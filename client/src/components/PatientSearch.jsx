import { useState } from 'react';

const SearchPatients = () => {
  const [name, setName] = useState('');
  const [patients, setPatients] = useState([]);

  const searchPatient = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:6969/search_patient?name=${name}`);
      if (response.ok) {
        const data = await response.json();
        setPatients(data);
      } else {
        console.error('Error fetching patient data:', response.statusText);
      }
    } catch (error) {
      console.error('Error searching patient:', error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Search Patients</h2>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter patient name"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
        onClick={searchPatient}
      >
        Search
      </button>
      <ul className="mt-4">
        {patients.map(patient => (
          <li key={patient.id} className="bg-gray-100 p-2 mb-2 rounded shadow">
            {patient.name} - {patient.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPatients;
