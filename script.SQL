-- Create the database
CREATE DATABASE TelemedicineDB;
USE TelemedicineDB;

-- Create PatientInfo table
CREATE TABLE PatientInfo (
    PatientID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Age INT NOT NULL,
    Gender VARCHAR(10) NOT NULL,
    Race VARCHAR(50) NOT NULL
);

-- Create MedicalHistory table
CREATE TABLE MedicalHistory (
    PatientID INT,
    Allergies TEXT,
    Deficiencies TEXT,
    PastSurgeries TEXT,
    GeneticIssues TEXT,
    HereditaryDiseases TEXT,
    OtherMedicalHistory TEXT,
    FOREIGN KEY (PatientID) REFERENCES PatientInfo(PatientID)
);

-- Create Appointments table
CREATE TABLE Appointments (
    AppointmentID INT AUTO_INCREMENT PRIMARY KEY,
    PatientID INT,
    AppointmentDate DATETIME NOT NULL,
    DoctorName VARCHAR(100) NOT NULL,
    ReasonForVisit TEXT,
    FOREIGN KEY (PatientID) REFERENCES PatientInfo(PatientID)
);