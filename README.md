# VPR Audio Player
This project contains the code not for the actual audio player, but for [the page](http://www.vpr.net/apps/audio-player) where the player is embedded.


## One-time set-up work:

1. Make sure you have Python 2.7 installed.
1. Clone the repo locally. `git clone git@github.com:vprnet/audio-player.git`
1. [Install `pip`](https://pip.pypa.io/en/latest/installing.html)
1. Install virtualenv. `pip install virtualenv`
1. Create a virtual environment for the app. `virtualenv venv`
1. Install the app requirements. `pip install -r requirements.txt`
1. Duplicate `_config.py` as `config.py`, which will be your private, git-ignored file of keys.
1. Grab the secret `homepage.json` file from someone on the VPR team.


## Regular Updates, start here:

1. Enter the virtual environment. `source venv/bin/activate`
1. To run locally, just hit a quick	`python audio-player/index.py` and head to `127.0.0.1:5000`


## Pushing to production:

This project runs on a cron job in Webfaction. The cron is currently set to run every ten minutes, pushing up to Amazon S3. To update the production code, SSH into our Webfaction server and update changes to the production code.


## Copyright and License

Copyright 2014 Vermont Public Radio

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in compliance with the License.
You may obtain a copy of the License in the LICENSE file, or at:

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language
governing permissions under the License.
