from index import app
from flask import render_template, request
from config import BASE_URL
from query import api_feed, replay_schedule, get_callout, get_billboard


@app.route('/')
def index():
    sheet_id = 'tzE2PsqJoWRpENlMr-ZlS8A'
    page_url = BASE_URL + request.path
    page_title = 'Audio Player'
    stories = api_feed([299364082, 299368018, 299363915], numResults=3, thumbnail=True, sidebar=True)
    schedule = replay_schedule()
    callout = get_callout(sheet_id)
    billboard = get_billboard(sheet_id)
    stream_name = "My Place"

    social = {
        'title': "",
        'subtitle': "",
        'img': "",
        'description': "",
        'twitter_text': "",
        'twitter_hashtag': ""
    }

    return render_template('content.html',
        page_title=page_title,
        social=social,
        stories=stories,
        schedule=schedule,
        callout=callout,
        billboard=billboard,
        stream_name=stream_name,
        page_url=page_url)
