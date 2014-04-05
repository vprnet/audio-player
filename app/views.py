from index import app
from flask import render_template, request
from config import BASE_URL
from query import api_feed, replay_schedule


@app.route('/')
def index():
    page_url = BASE_URL + request.path
    page_title = 'Audio Player'
    stories = api_feed([299364082, 299368018, 299363915], numResults=3, thumbnail=True, sidebar=True)
    schedule = replay_schedule()

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
        page_url=page_url)
