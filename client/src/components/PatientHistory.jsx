const PatientHistory = ({ historyData }) => {
  return (
    <div className="component-container">
      <h2 className="component-title">Patient History</h2>
      {historyData && historyData.length > 0 ? (
        <div className="patient-table-container">
          <table className="patient-table">
            <thead className="patient-table-header">
              <tr>
                <th>Date</th>
                <th>Doctor</th>
                <th>Diagnosis</th>
                <th>Treatment</th>
              </tr>
            </thead>
            <tbody className="patient-table-body">
              {historyData.map((record) => (
                <tr key={record.id} className="patient-table-row">
                  <td className="patient-table-cell">{record.date}</td>
                  <td className="patient-table-cell-highlight">{record.doctorName}</td>
                  <td className="patient-table-cell">{record.diagnosis}</td>
                  <td className="patient-table-cell">{record.treatment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No history records found.</p>
      )}
    </div>
  );
};

export default PatientHistory;