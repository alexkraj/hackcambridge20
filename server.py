# PYTHON FLASK SERVER
from flask import Flask, render_template, request
import requests
import json
import data_generator
import os, uuid
from azure.storage.blob import BlobServiceClient, BlobClient

app = Flask(__name__)
json_data = data_generator.generate_JSON(1,1,1)

@app.route("/", methods=['GET'])
def load_landing():
    initial_values = json_data
    return render_template("home.html", values = initial_values)

@app.route("/update", methods=['POST'])
def update_prediction():
    variable = int(request.form['variable'])
    offset = int(request.form['offset'])
    # send these values to the azure server
    # receive next prediction line
    new_trend = [] #data from the azure server

    return json.dumps(new_trend)

@app.route("/calculate", methods=['GET'])
def calculate_savings():
    time_frame = int(request.form['time frame'])
    value = int(request.form['value'])
# @app.route("/change", methods=['POST'])

# @app.route()


if __name__ == "__main__":
    app.run(debug=True)


# https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/webServices/{webServiceName}?api-version=2016-05-01-preview
# https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/webServices/{webServiceName}?api-version=2016-05-01-preview