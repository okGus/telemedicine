from flask import jsonify
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
)
# defaults to getting the key using os.environ.get("OPEN_API_KEY")

def analyze_symptoms(symptoms_text):
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

    # print(res.choices[0].message.content)
    return res.choices[0].message.content

# symptoms = "I have a headache, sore throat, and a mild fever."
# diagnosis = analyze_symptoms(symptoms)
# print("Possible Diagnosis:")
# print(diagnosis)

def create_patient(data):
    # Process the data and create a new patient
    # Example: patient_name = data.get('name')
    # Implement patient creation logic here
    
    return jsonify({'status': 'Patient created successfully'})

def create_appointment(data):
#     # Process the data and create a new appointment
#     # Example: appointment_time = data.get('time')
#     # Implement appointment creation logic here
    
    return jsonify({'status': 'Appointment created successfully'})

