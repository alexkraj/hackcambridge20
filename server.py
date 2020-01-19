# PYTHON FLASK SERVER
from flask import Flask, render_template, request
import json
import data_generator

app = Flask(__name__)


@app.route("/")
def load_landing():
    return render_template("home.html")

@app.route("/update", methods=['POST'])
def update_prediction():
    variable = int(request.form['variable'])
    offset = int(request.form['offset'])
    # send these values to the azure server
    
    return "success"
# @app.route("/change", methods=['POST'])

if __name__ == "__main__":
    app.run(debug=True)