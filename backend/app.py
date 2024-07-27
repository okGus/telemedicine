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

@app.route('/auth')
def auth_user():
    url = "https://nexhealth.info/authenticates"

    headers = {
        "accept": "application/vnd.Nexhealth+json;version=2",
        "Authorization": os.environ.get("NEXHEALTH_API_KEY")
    }

    response = requests.post(url, headers=headers)
    return response 

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=6969 ,debug=True)