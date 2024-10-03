// pages/dashboard/admin.js
import { useState } from 'react';

export default function AdminDashboard() {
  const [doctors, setDoctors] = useState(['Dr. Smith', 'Dr. Johnson']);
  const [patients, setPatients] = useState(['John Doe', 'Jane Smith']);
  
  return (
    <div>
      <h1>Admin Dashboard</h1>
      
      <h2>Doctors</h2>
      <ul>
        {doctors.map((doctor, index) => (
          <li key={index}>{doctor}</li>
        ))}
      </ul>

      <h2>Patients</h2>
      <ul>
        {patients.map((patient, index) => (
          <li key={index}>{patient}</li>
        ))}
      </ul>
    </div>
  );
}
