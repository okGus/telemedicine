const PatientHistory = ({ historyData }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Patient History</h2>
      {historyData && historyData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Doctor</th>
                <th className="px-4 py-2">Diagnosis</th>
                <th className="px-4 py-2">Treatment</th>
              </tr>
            </thead>
            <tbody>
              {historyData.map((record) => (
                <tr key={record.id} className="border-b">
                  <td className="px-4 py-2">{record.date}</td>
                  <td className="px-4 py-2">{record.doctorName}</td>
                  <td className="px-4 py-2">{record.diagnosis}</td>
                  <td className="px-4 py-2">{record.treatment}</td>
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
