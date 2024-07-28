import { useState } from 'react';

const AddPatient = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [race, setRace] = useState('');
  const [message, setMessage] = useState('');

  const addPatient = async () => {
    if (!name || !age || !gender || !race) {
      setMessage('All fields are required');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:6969/add_patient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        },
        body: new URLSearchParams({
          name: name,
          age: age,
          gender: gender,
          race: race
        }),
        mode: 'cors'
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(`Patient added successfully with ID: ${data.patient_id}`);
        setName('');
        setAge('');
        setGender('');
        setRace('');
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Add New Patient</h2>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
      />
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        type="text"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        placeholder="Gender"
      />
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        type="text"
        value={race}
        onChange={(e) => setRace(e.target.value)}
        placeholder="Race"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={addPatient}
      >
        Add Patient
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default AddPatient;