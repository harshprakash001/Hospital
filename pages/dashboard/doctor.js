// pages/dashboard/doctor.js
import { useEffect, useState } from 'react';

export default function DoctorDashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch doctor's appointments (e.g., from API)
    const fetchedAppointments = [
      { id: 1, patient: 'John Doe', date: '2024-10-10', time: '10:00 AM' },
      { id: 2, patient: 'Jane Smith', date: '2024-10-12', time: '02:00 PM' },
    ];
    setAppointments(fetchedAppointments);
  }, []);

  return (
    <div>
      <h1>Doctor Dashboard</h1>
      <h2>Your Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.patient} - {appointment.date} at {appointment.time}
          </li>
        ))}
      </ul>
    </div>
  );
}
