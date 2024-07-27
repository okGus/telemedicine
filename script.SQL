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

-- Insert fake patient data
INSERT INTO PatientInfo (Name, Age, Gender, Race) VALUES
('John Doe', 45, 'Male', 'Caucasian'),
('Jane Smith', 32, 'Female', 'African American'),
('Maria Garcia', 28, 'Female', 'Hispanic'),
('Robert Johnson', 56, 'Male', 'Caucasian'),
('Yuki Tanaka', 39, 'Female', 'Asian'),
('Michael Brown', 61, 'Male', 'Caucasian'),
('Aisha Patel', 29, 'Female', 'South Asian'),
('David Lee', 42, 'Male', 'Asian'),
('Emma Wilson', 35, 'Female', 'Caucasian'),
('Carlos Rodriguez', 50, 'Male', 'Hispanic'),
('Olivia Chen', 27, 'Female', 'Asian'),
('Samuel Jackson', 55, 'Male', 'African American'),
('Sophie Martin', 33, 'Female', 'Caucasian'),
('Ahmed Hassan', 47, 'Male', 'Middle Eastern'),
('Linda Kim', 38, 'Female', 'Asian');

-- Insert fake medical history
INSERT INTO MedicalHistory (PatientID, Allergies, Deficiencies, PastSurgeries, GeneticIssues, HereditaryDiseases, OtherMedicalHistory) VALUES
(1, 'Penicillin', 'Vitamin D', 'Appendectomy', NULL, 'Hypertension', 'Occasional migraines'),
(2, 'Latex', 'Iron', NULL, NULL, 'Diabetes', 'Asthma'),
(3, NULL, NULL, 'Tonsillectomy', NULL, NULL, 'Eczema'),
(4, 'Shellfish', 'B12', 'Hip replacement', NULL, 'Coronary artery disease', 'Arthritis'),
(5, 'Pollen', NULL, NULL, NULL, NULL, 'Seasonal allergies'),
(6, NULL, 'Calcium', 'Cataract surgery', 'BRCA1 mutation', 'Breast cancer', 'Osteoporosis'),
(7, 'Peanuts', NULL, NULL, NULL, NULL, 'Polycystic ovary syndrome'),
(8, NULL, NULL, 'Knee arthroscopy', NULL, 'Type 2 diabetes', 'Hypertension'),
(9, 'Sulfa drugs', 'Vitamin B12', NULL, NULL, NULL, 'Depression'),
(10, NULL, NULL, 'Gallbladder removal', NULL, 'Hypertension', 'Gastroesophageal reflux disease'),
(11, 'Dairy', 'Iron', NULL, NULL, NULL, 'Irritable bowel syndrome'),
(12, NULL, NULL, 'Prostate surgery', 'Sickle cell trait', NULL, 'Gout'),
(13, 'Bee stings', NULL, 'Cesarean section', NULL, 'Rheumatoid arthritis', 'Hypothyroidism'),
(14, NULL, 'Vitamin D', 'Hernia repair', NULL, 'Glaucoma', 'Chronic kidney disease'),
(15, 'Aspirin', NULL, NULL, NULL, NULL, 'Fibromyalgia');

-- Insert fake appointments
INSERT INTO Appointments (PatientID, AppointmentDate, DoctorName, ReasonForVisit) VALUES
(1, '2024-08-15 09:30:00', 'Dr. Sarah Johnson', 'Annual physical'),
(2, '2024-08-16 14:00:00', 'Dr. Michael Chen', 'Diabetes follow-up'),
(3, '2024-08-17 11:15:00', 'Dr. Emily Brown', 'Skin rash consultation'),
(4, '2024-08-18 10:00:00', 'Dr. Robert Taylor', 'Post-surgery check-up'),
(5, '2024-08-19 15:30:00', 'Dr. Lisa Wong', 'Allergy testing'),
(6, '2024-08-20 13:45:00', 'Dr. James Wilson', 'Bone density scan'),
(7, '2024-08-21 09:00:00', 'Dr. Anita Gupta', 'PCOS management'),
(8, '2024-08-22 16:00:00', 'Dr. David Lee', 'Diabetes and hypertension follow-up'),
(9, '2024-08-23 10:30:00', 'Dr. Jessica Martinez', 'Mental health check-up'),
(10, '2024-08-24 14:15:00', 'Dr. Thomas Anderson', 'GERD treatment review'),
(11, '2024-08-25 11:00:00', 'Dr. Sophie Clark', 'IBS management'),
(12, '2024-08-26 09:45:00', 'Dr. William Patel', 'Prostate cancer screening'),
(13, '2024-08-27 13:30:00', 'Dr. Olivia Rodriguez', 'Thyroid function test'),
(14, '2024-08-28 15:00:00', 'Dr. Hassan Ali', 'Kidney function evaluation'),
(15, '2024-08-29 10:45:00', 'Dr. Grace Kim', 'Fibromyalgia pain management');