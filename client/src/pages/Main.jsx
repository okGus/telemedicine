import { useState, useEffect } from "react";
import PatientSchedule from "../components/PatientSchedule";
import PatientHistory from "../components/PatientHistory";
import AiChatBox from "../components/AIChatBox";
import PatientSearch from "../components/PatientSearch";
import { mockScheduleData, mockPatientHistoryData } from "../mockData";
import AddPatient from "../components/AddPatient";
const MainPage = () => {
  const [scheduleData, setScheduleData] = useState([]);
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    // Simulating an API call with a setTimeout
    setTimeout(() => {
      setScheduleData(mockScheduleData);
      setHistoryData(mockPatientHistoryData);
    }, 1000); // Delay of 1 second
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Telemedicine Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PatientSchedule scheduleData={scheduleData} />
        <PatientHistory historyData={historyData} />
        <AiChatBox historyData={historyData} />
        <PatientSearch />
        <AddPatient />
      </div>
    </div>
  );
};

export default MainPage;
