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
                "content": ""
            }
        ],
    )

    return res.choices[0].message

symptoms = "I have a headache, sore throat, and a mild fever."
diagnosis = analyze_symptoms(symptoms)
print("Possible Diagnosis:")
print(diagnosis)
