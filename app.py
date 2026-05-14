from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

data = pd.read_csv("our_data/road_safety_dataset_india.csv")

@app.route("/")
def home():
    return "Road Safety AI Project Running"


@app.route("/predict", methods=["POST"])
def predict():

    input_data = request.json

    state = input_data["state"]
    city = input_data["city"]
    area = input_data["area"]
    time = input_data["time"]
    daynight = input_data["daynight"]
    rain = input_data["rain"]

    risk = "Low"

    if daynight == "Night" and rain == "Yes":
        risk = "High"

    elif daynight == "Night":
        risk = "Medium"

    elif rain == "Yes":
        risk = "Medium"

    return jsonify({"risk": risk})


if __name__ == "__main__":
    app.run(debug=True)