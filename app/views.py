from index import app
from flask import render_template, request
from config import BASE_URL
from query import get_callout, get_billboard, replay_schedule


@app.route('/')
def index():
    # real sheet ID
    #sheet_id = 'tzE2PsqJoWRpENlMr-ZlS8A'
    # copy sheet ID
    sheet_id = 'tIk5itVcfOHUmakkmpjCcxw'
    page_url = BASE_URL + request.path
    page_title = 'Audio Player'
    callout = get_callout(sheet_id)
    billboard = get_billboard(sheet_id)
    on_now, on_next = replay_schedule()
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
    sheet_id = 'tIk5itVcfOHUmakkmpjCcxw'
    billboard = get_billboard(sheet_id)

    return render_template('billboard.html', billboard=billboard)


@app.route('/callout')
def callout():
    sheet_id = 'tIk5itVcfOHUmakkmpjCcxw'
    callout = get_callout(sheet_id)

    return render_template('callout.html', callout=callout)


@app.route('/replay-schedule')
def schedule():
    on_now, up_next = replay_schedule()

    return render_template('replay-schedule.html',
        on_now=on_now,
        up_next=up_next)
