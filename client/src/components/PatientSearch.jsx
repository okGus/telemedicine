import { useState } from 'react';

const SearchPatients = () => {
  const [name, setName] = useState('');
  const [patients, setPatients] = useState([]);
  const [message, setMessage] = useState('');

  const searchPatients = async () => {
    if (!name) {
      setMessage('Please enter a name to search');
      return;
    }

    try {
      const response = await fetch(`http://127.0.0.1:6969/search_patient?name=${name}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        },
        mode: 'cors'
      });

      const data = await response.json();
      if (response.ok) {
        setPatients(data);
        setMessage('');
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Search Patients</h2>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter patient name"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={searchPatients}
      >
        Search
      </button>
      {message && <p className="mt-4">{message}</p>}
      {patients.length > 0 && (
        <ul className="mt-4">
          {patients.map((patient) => (
            <li key={patient.id} className="mb-2">
              {patient.name} - {patient.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchPatients;