from flask import Flask, jsonify, request
from utils import analyze_symptoms, create_appointment, create_patient
from db import get_all_appointments, get_all_patients, search_patient_by_name, add_patient
import os
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv

load_dotenv()
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)
# cors = CORS(app)
CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'

# Database connection configuration
db_config = {
    'host': '127.0.0.1',
    'database': 'TelemedicineDB',
    'user': os.environ.get("DB_USERNAME"),
    'password': os.environ.get("DB_PASSWORD")
}

@app.route('/consult', methods=['POST'])
def consult():
    symptoms = request.form.get('symptoms')
    if not symptoms:
        return jsonify({"error": "No symptoms provided"}), 400

    diagnosis = analyze_symptoms(symptoms)
    return jsonify({"diagnosis": diagnosis})

@app.route('/appointments', methods=['GET'])
def appointments():
    appointments = get_all_appointments()
    return jsonify(appointments)

@app.route('/patients', methods=['GET'])
def patients():
    patients = get_all_patients()
    return jsonify(patients)

@app.route('/search_patient', methods=['GET'])
def search_patient():
    name = request.args.get('name', '')
    if not name:
        return jsonify({"error": "No name provided"}), 400
    patients = search_patient_by_name(name)
    return jsonify(patients)

@app.route('/add_patient', methods=['POST'])
def add_patient_route():
    name = request.form.get('name')
    age = request.form.get('age')
    gender = request.form.get('gender')
    race = request.form.get('race')
    
    if not all([name, age, gender, race]):
        return jsonify({"error": "Missing patient information"}), 400
    
    patient_id = add_patient(name, age, gender, race)
    return jsonify({"status": "Patient created successfully", "patient_id": patient_id})

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=6969, debug=True)