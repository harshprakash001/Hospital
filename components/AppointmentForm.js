// components/AppointmentForm.js
import { useState } from 'react';

export default function AppointmentForm({ onSubmit }) {
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ doctor, date, time });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Select Doctor</label>
      <select 
        value={doctor} 
        onChange={(e) => setDoctor(e.target.value)} 
        required
      >
        <option value="">Choose Doctor</option>
        <option value="Dr. Smith">Dr. Smith</option>
        <option value="Dr. Johnson">Dr. Johnson</option>
      </select>

      <label>Date</label>
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        required
      />

      <label>Time</label>
      <input 
        type="time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)} 
        required
      />

      <button type="submit">Book Appointment</button>
    </form>
  );
}
