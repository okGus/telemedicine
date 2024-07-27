from flask import Flask, request, jsonify
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
)
# defaults to getting the key using os.environ.get("OPEN_API_KEY")

app = Flask(__name__)

@app.route('/analyze_symptoms', methods=['POST'])
def analyze_symptoms():
    data = request.json
    symptoms_text = data.get('symptoms')
    
    res = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": "Analyze the following symptoms and suggest possible diagnoses."
            },
            {
                "role": "user",
                "content": symptoms_text
            }
        ],
    )

    diagnosis = res.choices[0].message
    return jsonify({'diagnosis': diagnosis})

@app.route('/create_patient', methods=['POST'])
def create_patient():
    data = request.json
    # Process the data and create a new patient
    # Example: patient_name = data.get('name')
    # Implement patient creation logic here
    
    return jsonify({'status': 'Patient created successfully'})

@app.route('/create_appointment', methods=['POST'])
def create_appointment():
    data = request.json
    # Process the data and create a new appointment
    # Example: appointment_time = data.get('time')
    # Implement appointment creation logic here
    
    return jsonify({'status': 'Appointment created successfully'})

if __name__ == '__main__':
    app.run(debug=True)


symptoms = "I have a headache, sore throat, and a mild fever."
diagnosis = analyze_symptoms(symptoms)
print("Possible Diagnosis:")
print(diagnosis)
