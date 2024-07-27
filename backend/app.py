from flask import Flask, jsonify, request
from utils import analyze_symptoms, create_appointment, create_patient
import os
import requests
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/consult', methods=['POST'])
@cross_origin()
def consult():
    symptoms = request.form.get('symptoms')
    if not symptoms:
        return jsonify({"error": "No symptoms provided"}), 400

    diagnosis = analyze_symptoms(symptoms)
    return jsonify({"diagnosis": diagnosis})

@app.route('/create_appointment', methods=['POST'])
def create_appointment_():
    data = request.form['patient_app']
    res = create_appointment(data)
    return res


@app.route('/create_patient', methods=['POST'])
def create_patient_():
    data = request.form['patient_info']
    res = create_patient(data)
    return res

@app.route('/auth', methods=['POST'])
def auth_user():
    url = "https://nexhealth.info/authenticates"

    headers = {
        "accept": "application/vnd.Nexhealth+json;version=2",
        "Authorization": os.environ.get("NEXHEALTH_API_KEY")
    }

    response = requests.post(url, headers=headers)
    if response.status_code == 201:
        data = response.json()
        token = data.get('data', {}).get('token')
        if token:
            return jsonify({"token": token}), 200
        else:
            return jsonify({"error": "Token not found in the response"}), 500
    else:
        return jsonify({"error": "Authentication failed"}), response.status_code

@app.route('/patient_search', methods=['GET'])
def patient_search():
    subdomain = os.getenv('SUBDOMAIN')
    location_id = os.getenv('LOCATIONID')

    name = request.args.get('name', '')
    email = request.args.get('email', '')
    new_patient = request.args.get('new_patient', 'false')
    location_strict = request.args.get('location_strict', 'false')
    sort = request.args.get('sort', 'name')
    page = request.args.get('page', 1)
    per_page = request.args.get('per_page', 5)

    url = f"https://nexhealth.info/patients?subdomain={subdomain}&location_id={location_id}&name={name}&email={email}&new_patient={new_patient}&location_strict={location_strict}&sort={sort}&page={page}&per_page={per_page}"

    headers = {
        "accept": "application/vnd.Nexhealth+json;version=2",
        "Authorization": os.environ.get("NEXHEALTH_API_KEY")
    }

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        return jsonify(response.json()), 200
    else:
        return jsonify({"error": "Patient search failed"}), response.status_code

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=6969 ,debug=True)