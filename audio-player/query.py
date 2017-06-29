#!/usr/bin/python
import json
import requests
import gspread
from PIL import Image
from PIL import ImageOps
import urllib
import os
import markdown
import xml.etree.ElementTree as ET
from datetime import datetime
from cStringIO import StringIO
from config import NPR_API_KEY, ABSOLUTE_PATH
from oauth2client.client import SignedJwtAssertionCredentials



def get_google_sheet():
    json_key = json.load(open('homepage.json'))
    scope = ['https://spreadsheets.google.com/feeds']
    credentials = SignedJwtAssertionCredentials(json_key['client_email'], json_key['private_key'], scope)
    authorization = gspread.authorize(credentials)
    spreadsheet = authorization.open('VPR Homepage App')
    worksheet = spreadsheet.get_worksheet(1)

    return worksheet.get_all_records()


def get_callout(sheet_key):
    callout = get_google_sheet()
    md = callout[0]['Text']
    if md:
        html = markdown.markdown(md)
    else:
        html = False
    return html


def api_feed(tag, numResults=1, char_limit=140, thumbnail=False, sidebar=False):
    """Query the NPR API using given tag ID, return dictionary of results"""

    stories = query_api(tag, numResults)

    story_list = []
    for story in stories:
        link = story['link'][0]['$text']
        date = convert_date(story['storyDate']['$text'])
        title = story['title']['$text'].strip()

        try:  # if there's an image, determine orientation and define boundary
            story_image = story['image'][0]['crop'][0]
            image = story_image['src']
            width = int(story_image['width'])
            height = int(story_image['height'])
            if int(width) > int(height):
                landscape = True
                if width > 728:  # biggest size for landscape photos
                    width = 728
            else:
                landscape = False
                if width > 223:  # biggest size for portrait photos
                    width = 223
        except KeyError:
            image = False  # set equal to url string for default image
            landscape = False

        try:
            audio = {}
            audio_file = story['audio'][0]
            audio['mp3'] = audio_file['format']['mp3'][0]['$text'].split('?')[0]
            audio['duration'] = audio_file['duration']['$text']
        except KeyError:
            audio = False

        full_text = [i['$text'] for i in story['text']['paragraph'] if len(i) > 1]
        # if len(i) > 1 ignores pars w/ no text, i.e. when images or audio

        char_count = 0
        paragraphs_needed = 0
        par_count = len(full_text)
        while char_count < char_limit and paragraphs_needed < par_count:
            paragraph = full_text[paragraphs_needed]
            char_count += len(paragraph)
            paragraphs_needed += 1

        text = full_text[:paragraphs_needed]

        if thumbnail:
            try:
                image_url = story['image'][0]['crop'][0]['src']
                if sidebar:
                    image = generate_thumbnail(image_url, preserve_ratio=True, size=(90, 90))
                else:
                    image = generate_thumbnail(image_url, preserve_ratio=True, size=(width, height))
            except KeyError:
                image = False

        story_list.append({
            'title': title,
            'date': date,
            'link': link,
            'image': image,
            'text': text,
            'audio': audio,
            'landscape': landscape
        })

    return story_list


def query_api(tag, numResults=10):
    """Hits the NPR API, returns JSON story list"""

    id_string = ','.join([str(s) for s in tag])
    query = ('http://api.npr.org/query?orgid=692' +
        '&fields=title,byline,storyDate,image,text,audio' +
        '&sort=dateDesc' +
        '&action=Or' +
        '&output=JSON' +
        '&numResults=%d' +
        '&id=%s' +
        '&apiKey=%s') % (numResults, id_string, NPR_API_KEY)

    r = requests.get(query)
    j = json.loads(r.text)
    stories = j['list']['story']

    return stories


def generate_thumbnail(image_url, preserve_ratio=False, size=(220, 165)):
    """Take an image src, generate a thumbnail, return new path"""

    filename = image_url.rsplit('/', 1)[1]
    path_to_read = 'img/thumbnails/' + filename
    path_to_save = ABSOLUTE_PATH + 'static/' + path_to_read

    if not os.path.isfile(path_to_save):
        img_file = urllib.urlopen(image_url)
        img = StringIO(img_file.read())
        image = Image.open(img)
        if preserve_ratio:
            width = image.size[0]
            height = image.size[1]
            new_height = size[0] * height / width
            size = (size[0], new_height)
        im = ImageOps.fit(image, size, Image.ANTIALIAS)
        im.save(path_to_save)

    return path_to_read


def convert_date(timestamp):
    """Converts API timestamp to publication-ready dateline"""

    day = timestamp[5:7]
    month = datetime.strptime(timestamp[8:11], '%b').strftime('%B')
    year = timestamp[12:16]
    date = month + ' ' + day + ", " + year
    return date


def replay_schedule():
    r = requests.get('http://www.vpr.net/xml/vpr-mix-stream/vprmix.xml')
    xml = r.text
    root = ET.fromstring(xml)
    index_list = [child for child in root if child.tag == 'PLAY']
    on_now = {'title': index_list[0][0].text,
        'artist': index_list[0][1].text}
    on_next = {'title': index_list[-1][0].text,
        'artist': index_list[-1][1].text}
    return on_now, on_next
