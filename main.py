from flask import Flask , render_template, request, redirect, url_for, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import os
import requests
import flask
from algorithms.bubblesort import BubbleSort

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/binarytree')
def binarysearch():
    return render_template('binarytree.html')

@app.route('/bubblesort', methods=['POST'])
def bubblesort():
    json = request.get_json()
    array = json['array']
    obj = BubbleSort(array)
    json = obj.sortSteps()
    return jsonify(json)

if __name__ == '__main__':
    app.run(debug=True)
