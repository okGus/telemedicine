const PatientSchedule = ({ scheduleData }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Patient Schedule</h2>
      {scheduleData && scheduleData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Doctor</th>
                <th className="px-4 py-2">Reason</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((appointment) => (
                <tr key={appointment.id} className="border-b">
                  <td className="px-4 py-2">{appointment.date}</td>
                  <td className="px-4 py-2">{appointment.time}</td>
                  <td className="px-4 py-2">{appointment.doctorName}</td>
                  <td className="px-4 py-2">{appointment.reason}</td>
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
