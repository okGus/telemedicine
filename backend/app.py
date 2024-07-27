from flask import Flask, request
from utils import analyze_symptoms

app = Flask(__name__)

@app.route('/consult', methods=['POST'])
def consult():
    symptoms = request.form['symptoms']
    diagnosis = analyze_symptoms(symptoms)
    return diagnosis

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=6969 ,debug=True)