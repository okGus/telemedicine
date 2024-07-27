const PatientSchedule = ({ scheduleData }) => {
  return (
    <div className="component-container">
      <h2 className="component-title">Patient Schedule</h2>
      {scheduleData && scheduleData.length > 0 ? (
        <div className="patient-table-container">
          <table className="patient-table">
            <thead className="patient-table-header">
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Doctor</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody className="patient-table-body">
              {scheduleData.map((appointment) => (
                <tr key={appointment.id} className="patient-table-row">
                  <td className="patient-table-cell">{appointment.date}</td>
                  <td className="patient-table-cell">{appointment.time}</td>
                  <td className="patient-table-cell-highlight">{appointment.doctorName}</td>
                  <td className="patient-table-cell">{appointment.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No appointments scheduled.</p>
      )}
    </div>
  );
};

export default PatientSchedule;