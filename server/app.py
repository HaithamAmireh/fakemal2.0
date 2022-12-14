import json

import requests
from flask import Flask

app = Flask(__name__)


@app.route("/seasonal", methods=["GET"])
def seasonal():
    api = "https://api.jikan.moe/v4/seasons/now"
    res = requests.get(api)
    data = json.loads(res.text)
    return data


@app.route("/topanime", methods=["GET"])
def top_anime():
    api = "https://api.jikan.moe/v4/top/anime"
    res = requests.get(api)
    data = json.loads(res.text)
    return data


@app.route("/topmanga", methods=["GET"])
def top_manga():
    api = "https://api.jikan.moe/v4/top/manga"
    res = requests.get(api)
    data = json.loads(res.text)
    return data


@app.route("/home", methods=["GET"])
def recommendation():
    api = "https://api.jikan.moe/v4/recommendations/anime"
    res = requests.get(api)
    data = json.loads(res.text)
    return data


# @app.route("/search", methods=["GET", "POST"])
# def search():
#     value = request.args.get('q')
#     api = "https://api.jikan.moe/v4/anime?q=" + str(value)
#     res = requests.get(api)
#     data = json.loads(res.text)
#     return data

@app.route("/characters", methods=["GET"])
def characters():
    api = "https://api.jikan.moe/v4/top/characters"
    res = requests.get(api)
    data = json.loads(res.text)
    return data


if __name__ == "__main__":
    app.run()
