#!/usr/bin/python
import json
import requests
import Image
import ImageOps
import urllib
import os
from bs4 import BeautifulSoup as Soup
from datetime import datetime
from cStringIO import StringIO
from config import NPR_API_KEY, ABSOLUTE_PATH


def api_feed(tag, numResults=1, char_limit=140, thumbnail=False):
    """Query the NPR API using given tag ID, return dictionary of results"""

    stories = query_api(tag, numResults)

    story_list = []
    for story in stories:
        link = story['link'][0]['$text']
        title = story['title']['$text'].strip()

        full_text = [i['$text'] for i in story['text']['paragraph'] if len(i) > 1]
        # if len(i) > 1 ignores pars w/ no text, i.e. when images or audio

        char_count = 0
        paragraphs_needed = 0
        while char_count < char_limit:
            paragraph = full_text[paragraphs_needed]
            char_count += len(paragraph)
            paragraphs_needed += 1

        text = full_text[:paragraphs_needed]

        story_list.append({
            'title': title,
            'link': link,
            'text': text
        })

    return story_list


def reporter_list(tag, numResults=50):
    """Queries the API for bylines and returns an ordered list of name
    and a path to a photo. Reporters ordered by number of stories"""

    stories = query_api(tag, numResults)

    name_list = []
    reporters = []
    for story in stories:
        name = story['byline'][0]['name']['$text']
        if name not in name_list:
            name_list.append(name)
            byline = {}
            byline['name'] = name
            try:
                url = story['byline'][0]['link'][0]['$text']
                byline['url'] = url
                byline['image_src'] = reporter_image(url)
                byline['count'] = 1
                reporters.append(byline)
            except KeyError:
                pass
        else:
            for reporter in reporters:
                if reporter['name'] == name:
                    reporter['count'] += 1

    reporters = sorted(reporters, key=lambda k: k['count'], reverse=True)

    with open(ABSOLUTE_PATH + 'static/data/twitter.json') as f:
        twitter_dict = json.load(f)

    ranked_list = []
    for reporter in reporters:
        for twitter in twitter_dict['reporters']:
            if reporter['name'] == twitter['name']:
                reporter['handle'] = twitter['handle']
        if reporter['image_src'] and reporter['count'] > 1:
            ranked_list.append(reporter)

    return ranked_list


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


def reporter_image(url):
    """Takes reporter URL from byline and returns URL to reporter's image"""

    r = requests.get(url)
    page = r.text
    soup = Soup(page)
    person_card = soup.find_all(id="person-card")[0]
    try:
        image = person_card.find_all('img')[0].get('src')
        thumbnail = generate_thumbnail(image, size=(80, 80))
    except IndexError:
        image = False
        thumbnail = False

    return thumbnail


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
