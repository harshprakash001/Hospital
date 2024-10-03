// pages/dashboard/patient.js
import { useEffect, useState } from 'react';

export default function PatientDashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch patient's appointments (e.g., from API)
    const fetchedAppointments = [
      { id: 1, doctor: 'Dr. Smith', date: '2024-10-10', time: '10:00 AM' },
      { id: 2, doctor: 'Dr. Johnson', date: '2024-10-12', time: '02:00 PM' },
    ];
    setAppointments(fetchedAppointments);
  }, []);

  return (
    <div>
      <h1>Patient Dashboard</h1>
      <h2>Your Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.doctor} - {appointment.date} at {appointment.time}
          </li>
        ))}
      </ul>
    </div>
  );
}
