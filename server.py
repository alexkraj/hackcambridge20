# PYTHON FLASK SERVER
from flask import Flask, render_template, request
import json
import data_generator
import os, uuid
from azure.storage.blob import BlobServiceClient, BlobClient

app = Flask(__name__)

json_data = data_generator.generate_JSON()

# def upload_to_datalake(local_path, connection_string, container_name):
#     blob_service_client = BlobServiceClient.from_connection_string(connection_string)
#     blob_client = blob_service_client.get_blob_client(container=container_name, blob=local_path)
#     data = open(local_path, "rb")
#     blob_client.upload_blob(data)

@app.route("/")
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


if __name__ == "__main__":
    app.run(debug=True)

