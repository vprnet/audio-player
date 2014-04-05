from index import app
from flask import render_template, request
from config import BASE_URL
from query import api_feed


@app.route('/')
def index():
    page_url = BASE_URL + request.path
    page_title = 'Audio Player'
    stories = api_feed([178480359], numResults=8)
    news_player = True

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
        news_player=news_player,
        page_url=page_url)
