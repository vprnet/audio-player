from index import app
from flask import render_template, request
from config import BASE_URL
from query import get_callout, get_billboard


@app.route('/')
def index():
    sheet_id = 'tzE2PsqJoWRpENlMr-ZlS8A'
    page_url = BASE_URL + request.path
    page_title = 'Audio Player'
    callout = get_callout(sheet_id)
    billboard = get_billboard(sheet_id)
    on_now, on_next = False, False
    stream_name = "My Place"

    social = {
        'title': "VPR Audio Player",
        'subtitle': "",
        'img': "static/img/logo/vpr-logo-share.jpg",
        'description': "Listen to the live streams of VPR News, VPR Classical, the BBC, Jazz24 and My Place.",
        'twitter_text': "News, Classical, the BBC and more. The VPR Audio Player:",
        'twitter_hashtag': ""
    }

    return render_template('content.html',
        page_title=page_title,
        social=social,
        callout=callout,
        billboard=billboard,
        stream_name=stream_name,
        on_now=on_now,
        on_next=on_next,
        page_url=page_url)


@app.route('/billboard')
def billboard():
    sheet_id = 'tzE2PsqJoWRpENlMr-ZlS8A'
    billboard = get_billboard(sheet_id)

    return render_template('_billboard.html', billboard=billboard)
