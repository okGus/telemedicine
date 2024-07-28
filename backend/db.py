import mysql.connector
from mysql.connector import Error
import os

# Database connection configuration
db_config = {
    'host': '127.0.0.1',
    'database': 'TelemedicineDB',
    'user': os.environ.get("DB_USERNAME"),
    'password': os.environ.get("DB_PASSWORD")
}

# Function to create a database connection
def create_connection():
    connection = None
    try:
        connection = mysql.connector.connect(**db_config)
        if connection.is_connected():
            print("Connection to MySQL DB successful")
    except Error as e:
        print(f"The error '{e}' occurred")
    return connection

# Function to get all appointments in order
def get_all_appointments():
    connection = create_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM Appointments ORDER BY AppointmentID ASC")
    appointments = cursor.fetchall()
    cursor.close()
    connection.close()
    return appointments

# Function to get all patients
def get_all_patients():
    connection = create_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM PatientInfo")
    patients = cursor.fetchall()
    cursor.close()
    connection.close()
    return patients

# Function to search for a patient by name
def search_patient_by_name(name):
    connection = create_connection()
    cursor = connection.cursor(dictionary=True)
    query = "SELECT * FROM PatientInfo WHERE Name LIKE %s"
    cursor.execute(query, ('%' + name + '%',))
    patients = cursor.fetchall()
    cursor.close()
    connection.close()
    return patients

# Function to add a new patient
def add_patient(name, age, gender, race):
    connection = create_connection()
    cursor = connection.cursor()
    query = "INSERT INTO PatientInfo (Name, Age, Gender, Race) VALUES (%s, %s, %s, %s)"
    cursor.execute(query, (name, age, gender, race))
    connection.commit()
    cursor.close()
    connection.close()
    return cursor.lastrowid