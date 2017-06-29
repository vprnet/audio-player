from index import app
from flask import render_template, request
from config import BASE_URL
from query import get_callout



@app.route('/')
def index():
    page_url = BASE_URL + request.path
    page_title = 'Audio Player'
    stream_name = "Replay"

    social = {
        'title': "VPR Audio Player",
        'subtitle': "",
        'img': "static/img/logo/vpr-logo-share.jpg",
        'description': "Listen to the live streams of VPR News, VPR Classical, the BBC, Jazz24 and My Place.",
        'twitter_text': "News, Classical, the BBC and more. The VPR Audio Player:",
        'twitter_hashtag': ""
    }

    SHEET_ID = 'tzE2PsqJoWRpENlMr-ZlS8A'
    callout = get_callout(SHEET_ID)

    return render_template('content.html',
        page_title=page_title,
        social=social,
        stream_name=stream_name,
        callout=callout,
        page_url=page_url)
