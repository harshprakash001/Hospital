// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// export default function Appointments() {
//     const [doctor, setDoctor] = useState('');
//     const [date, setDate] = useState('');
//     const [time, setTime] = useState('');
//     const [submitted, setSubmitted] = useState(false);
//     const [appointments, setAppointments] = useState([]);

//     // Fetch appointments when component mounts
//     useEffect(() => {
//         const fetchAppointments = async () => {
//             const token = localStorage.getItem('token');
//             if (token) {
//                 const response = await fetch('/api/userAppointments', {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (response.ok) {
//                     const data = await response.json();
//                     setAppointments(data);
//                 } else {
//                     console.error('Failed to fetch appointments');
//                 }
//             }
//         };

//         fetchAppointments();
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const token = localStorage.getItem('token');

//         const response = await fetch('/api/appointments', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify({ doctor, date, time }),
//         });

//         if (response.ok) {
//             const data = await response.json();
//             setAppointments((prev) => [...prev, data]); // Add the new appointment to the list
//             setSubmitted(true);
//             // Reset form fields
//             setDoctor('');
//             setDate('');
//             setTime('');
//         } else {
//             console.error('Failed to book appointment');
//         }
//     };

//     return (
//         <div className="min-h-screen flex flex-col">
//             <Navbar />
//             <div className="flex-grow flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 py-10 relative overflow-hidden">
//                 {/* Background Image */}
//                 <div className="absolute inset-0">
//                     <Image
//                         src="/images/appointment-bg.jpg"
//                         alt="Background"
//                         layout="fill"
//                         objectFit="cover"
//                         className="opacity-30"
//                     />
//                 </div>

//                 {/* Main Content */}
//                 <div className="w-full max-w-lg bg-white bg-opacity-90 p-10 rounded-xl shadow-xl relative z-10 animate-fadeIn">
//                     <h1 className="text-4xl font-bold text-gray-800 text-center mb-6 animate-slideInDown">
//                         Book an Appointment
//                     </h1>
//                     <p className="text-center text-gray-600 mb-8">
//                         Schedule your appointment with our expert doctors. It's quick, easy, and secure!
//                     </p>

//                     {/* Appointment Form */}
//                     {!submitted ? (
//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             <div className="relative">
//                                 <label className="block text-gray-700 font-semibold">Select Doctor</label>
//                                 <select
//                                     value={doctor}
//                                     onChange={(e) => setDoctor(e.target.value)}
//                                     required
//                                     className="mt-1 block w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 p-3 transition-all duration-300 hover:shadow-xl transform hover:scale-105"
//                                 >
//                                     <option value="">Choose Doctor</option>
//                                     <option value="Dr. Smith">Dr. Smith</option>
//                                     <option value="Dr. Johnson">Dr. Johnson</option>
//                                 </select>
//                             </div>

//                             <div className="relative">
//                                 <label className="block text-gray-700 font-semibold">Date</label>
//                                 <input
//                                     type="date"
//                                     value={date}
//                                     onChange={(e) => setDate(e.target.value)}
//                                     required
//                                     className="mt-1 block w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 p-3 transition-all duration-300 hover:shadow-xl transform hover:scale-105"
//                                 />
//                             </div>

//                             <div className="relative">
//                                 <label className="block text-gray-700 font-semibold">Time</label>
//                                 <input
//                                     type="time"
//                                     value={time}
//                                     onChange={(e) => setTime(e.target.value)}
//                                     required
//                                     className="mt-1 block w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 p-3 transition-all duration-300 hover:shadow-xl transform hover:scale-105"
//                                 />
//                             </div>

//                             <button
//                                 type="submit"
//                                 className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 focus:outline-none"
//                             >
//                                 Book Appointment
//                             </button>
//                         </form>
//                     ) : (
//                         <div className="text-center animate-fadeIn">
//                             <h2 className="text-2xl font-semibold text-teal-600 mb-4">
//                                 Appointment Booked!
//                             </h2>
//                             <p className="text-gray-600">
//                                 Your appointment with {doctor} on {date} at {time} is confirmed.
//                             </p>
//                             <button
//                                 onClick={() => setSubmitted(false)}
//                                 className="mt-6 px-6 py-3 bg-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105 focus:outline-none"
//                             >
//                                 Book Another
//                             </button>
//                         </div>
//                     )}

//                     {/* Display User's Appointments */}
//                     <h2 className="text-2xl font-bold text-gray-800 mt-8">Your Appointments</h2>
//                     {appointments.length > 0 ? (
//                         <ul className="mt-4">
//                             {appointments.map((appointment, index) => (
//                                 <li key={index} className="border-b border-gray-300 py-2">
//                                     <p className="text-gray-600">
//                                         {appointment.doctor} on {appointment.date} at {appointment.time}
//                                     </p>
//                                 </li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <p className="text-gray-600">No appointments found.</p>
//                     )}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }



// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// export default function Appointments() {
//     const [doctor, setDoctor] = useState('');
//     const [date, setDate] = useState('');
//     const [time, setTime] = useState('');
//     const [submitted, setSubmitted] = useState(false);
//     const [appointments, setAppointments] = useState([]);

//     // Fetch appointments when component mounts
//     useEffect(() => {
//         const fetchAppointments = async () => {
//             const token = localStorage.getItem('token');
//             if (token) {
//                 const response = await fetch('/api/userAppointments', {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (response.ok) {
//                     const data = await response.json();
//                     setAppointments(data);
//                 } else {
//                     console.error('Failed to fetch appointments');
//                 }
//             }
//         };

//         fetchAppointments();
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const token = localStorage.getItem('token');
//         const userId = 'some_user_id';  // Replace this with actual user ID (e.g., from logged-in user)
//         const details = doctor;  // Assuming doctor name goes in the "details" field

//         const response = await fetch('/api/appointments', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify({ userId, appointmentDate: date, details }),
//         });

//         if (response.ok) {
//             const data = await response.json();
//             setAppointments((prev) => [...prev, data]); // Add the new appointment to the list
//             setSubmitted(true);
//             // Reset form fields
//             setDoctor('');
//             setDate('');
//             setTime('');
//         } else {
//             console.error('Failed to book appointment');
//         }
//     };

//     return (
//         <div className="min-h-screen flex flex-col">
//             <Navbar />
//             <div className="flex-grow flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 py-10 relative overflow-hidden">
//                 {/* Background Image */}
//                 <div className="absolute inset-0">
//                     <Image
//                         src="/images/appointment-bg.jpg"
//                         alt="Background"
//                         layout="fill"
//                         objectFit="cover"
//                         className="opacity-30"
//                     />
//                 </div>

//                 {/* Main Content */}
//                 <div className="w-full max-w-lg bg-white bg-opacity-90 p-10 rounded-xl shadow-xl relative z-10 animate-fadeIn">
//                     <h1 className="text-4xl font-bold text-gray-800 text-center mb-6 animate-slideInDown">
//                         Book an Appointment
//                     </h1>
//                     <p className="text-center text-gray-600 mb-8">
//                         Schedule your appointment with our expert doctors. It's quick, easy, and secure!
//                     </p>

//                     {/* Appointment Form */}
//                     {!submitted ? (
//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             <div className="relative">
//                                 <label className="block text-gray-700 font-semibold">Select Doctor</label>
//                                 <select
//                                     value={doctor}
//                                     onChange={(e) => setDoctor(e.target.value)}
//                                     required
//                                     className="mt-1 block w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 p-3 transition-all duration-300 hover:shadow-xl transform hover:scale-105"
//                                 >
//                                     <option value="">Choose Doctor</option>
//                                     <option value="Dr. Smith">Dr. Smith</option>
//                                     <option value="Dr. Johnson">Dr. Johnson</option>
//                                 </select>
//                             </div>

//                             <div className="relative">
//                                 <label className="block text-gray-700 font-semibold">Date</label>
//                                 <input
//                                     type="date"
//                                     value={date}
//                                     onChange={(e) => setDate(e.target.value)}
//                                     required
//                                     className="mt-1 block w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 p-3 transition-all duration-300 hover:shadow-xl transform hover:scale-105"
//                                 />
//                             </div>

//                             <div className="relative">
//                                 <label className="block text-gray-700 font-semibold">Time</label>
//                                 <input
//                                     type="time"
//                                     value={time}
//                                     onChange={(e) => setTime(e.target.value)}
//                                     required
//                                     className="mt-1 block w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 p-3 transition-all duration-300 hover:shadow-xl transform hover:scale-105"
//                                 />
//                             </div>

//                             <button
//                                 type="submit"
//                                 className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 focus:outline-none"
//                             >
//                                 Book Appointment
//                             </button>
//                         </form>
//                     ) : (
//                         <div className="text-center animate-fadeIn">
//                             <h2 className="text-2xl font-semibold text-teal-600 mb-4">
//                                 Appointment Booked!
//                             </h2>
//                             <p className="text-gray-600">
//                                 Your appointment with {doctor} on {date} at {time} is confirmed.
//                             </p>
//                             <button
//                                 onClick={() => setSubmitted(false)}
//                                 className="mt-6 px-6 py-3 bg-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105 focus:outline-none"
//                             >
//                                 Book Another
//                             </button>
//                         </div>
//                     )}

//                     {/* Display User's Appointments */}
//                     <h2 className="text-2xl font-bold text-gray-800 mt-8">Your Appointments</h2>
//                     {appointments.length > 0 ? (
//                         <ul className="mt-4">
//                             {appointments.map((appointment, index) => (
//                                 <li key={index} className="border-b border-gray-300 py-2">
//                                     <p className="text-gray-600">
//                                         {appointment.doctor} on {appointment.date} at {appointment.time}
//                                     </p>
//                                 </li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <p className="text-gray-600">No appointments found.</p>
//                     )}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }


// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// export default function Appointments() {
//     const [doctor, setDoctor] = useState('');
//     const [appointmentDate, setAppointmentDate] = useState('');
//     const [time, setTime] = useState('');
//     const [submitted, setSubmitted] = useState(false);
//     const [appointments, setAppointments] = useState([]);

//     // Fetch user's appointments when component mounts
//     useEffect(() => {
//         const fetchAppointments = async () => {
//             const token = localStorage.getItem('token');
//             if (token) {
//                 const response = await fetch('/api/userAppointments', {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (response.ok) {
//                     const data = await response.json();
//                     setAppointments(data);
//                 } else {
//                     console.error('Failed to fetch appointments');
//                 }
//             }
//         };

//         fetchAppointments();
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const token = localStorage.getItem('token');
//         const userId = 'some_user_id'; // Replace with actual user ID from your authentication context

//         const response = await fetch('/api/appointments', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify({ userId, appointmentDate, time, doctor }),
//         });

//         if (response.ok) {
//             const data = await response.json();
//             setAppointments((prev) => [...prev, data]); // Add the new appointment to the list
//             setSubmitted(true);
//             // Reset form fields
//             setDoctor('');
//             setAppointmentDate('');
//             setTime('');
//         } else {
//             console.error('Failed to book appointment');
//         }
//     };

//     return (
//         <div className="min-h-screen flex flex-col">
//             <Navbar />
//             <div className="flex-grow flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 py-10 relative overflow-hidden">
//                 {/* Background Image */}
//                 <div className="absolute inset-0">
//                     <Image
//                         src="/images/appointment-bg.jpg"
//                         alt="Background"
//                         layout="fill"
//                         objectFit="cover"
//                         className="opacity-30"
//                     />
//                 </div>

//                 {/* Main Content */}
//                 <div className="w-full max-w-lg bg-white bg-opacity-90 p-10 rounded-xl shadow-xl relative z-10">
//                     <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
//                         Book an Appointment
//                     </h1>
//                     <p className="text-center text-gray-600 mb-8">
//                         Schedule your appointment with our expert doctors. It's quick, easy, and secure!
//                     </p>

//                     {/* Appointment Form */}
//                     {!submitted ? (
//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             <div className="relative">
//                                 <label className="block text-gray-700 font-semibold">Select Doctor</label>
//                                 <select
//                                     value={doctor}
//                                     onChange={(e) => setDoctor(e.target.value)}
//                                     required
//                                     className="mt-1 block w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 p-3"
//                                 >
//                                     <option value="">Choose Doctor</option>
//                                     <option value="Dr. Smith">Dr. Smith</option>
//                                     <option value="Dr. Johnson">Dr. Johnson</option>
//                                 </select>
//                             </div>

//                             <div className="relative">
//                                 <label className="block text-gray-700 font-semibold">Appointment Date</label>
//                                 <input
//                                     type="date"
//                                     value={appointmentDate}
//                                     onChange={(e) => setAppointmentDate(e.target.value)}
//                                     required
//                                     className="mt-1 block w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 p-3"
//                                 />
//                             </div>

//                             <div className="relative">
//                                 <label className="block text-gray-700 font-semibold">Time</label>
//                                 <input
//                                     type="time"
//                                     value={time}
//                                     onChange={(e) => setTime(e.target.value)}
//                                     required
//                                     className="mt-1 block w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 p-3"
//                                 />
//                             </div>

//                             <button
//                                 type="submit"
//                                 className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-teal-600 transition-all duration-300"
//                             >
//                                 Book Appointment
//                             </button>
//                         </form>
//                     ) : (
//                         <div className="text-center">
//                             <h2 className="text-2xl font-semibold text-teal-600 mb-4">
//                                 Appointment Booked!
//                             </h2>
//                             <p className="text-gray-600">
//                                 Your appointment with {doctor} on {appointmentDate} at {time} is confirmed.
//                             </p>
//                             <button
//                                 onClick={() => setSubmitted(false)}
//                                 className="mt-6 px-6 py-3 bg-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
//                             >
//                                 Book Another
//                             </button>
//                         </div>
//                     )}

//                     {/* Display User's Appointments */}
//                     <h2 className="text-2xl font-bold text-gray-800 mt-8">Your Appointments</h2>
//                     {appointments.length > 0 ? (
//                         <ul className="mt-4">
//                             {appointments.map((appointment, index) => (
//                                 <li key={index} className="border-b border-gray-300 py-2">
//                                     <p className="text-gray-600">
//                                         {appointment.details} on {appointment.appointment_date} at {appointment.time}
//                                     </p>
//                                 </li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <p className="text-gray-600">No appointments found.</p>
//                     )}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }


import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Appointments() {
    const [doctor, setDoctor] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [time, setTime] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [appointments, setAppointments] = useState([]);

    // Fetch user's appointments when the component mounts
    useEffect(() => {
        const fetchAppointments = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                const response = await fetch('/api/userAppointments', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setAppointments(data);
                } else {
                    console.error('Failed to fetch appointments');
                }
            }
        };

        fetchAppointments();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        const token = localStorage.getItem('token');
        const userId = 'some_user_id'; // Replace with actual user ID from your authentication context

        // Prepare the appointment data
        const appointmentData = {
            userId,
            appointment_date: appointmentDate, // Ensure this is correctly set
            time,
            doctor,
        };

        const response = await fetch('/api/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(appointmentData),
        });

        if (response.ok) {
            const data = await response.json();
            setAppointments((prev) => [...prev, data]); // Add the new appointment to the list
            setSubmitted(true);
            // Reset form fields
            setDoctor('');
            setAppointmentDate('');
            setTime('');
        } else {
            console.error('Failed to book appointment');
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 py-10 relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/appointment-bg.jpg"
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-30"
                    />
                </div>

                {/* Main Content */}
                <div className="w-full max-w-lg bg-white bg-opacity-90 p-10 rounded-xl shadow-xl relative z-10">
                    <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
                        Book an Appointment
                    </h1>
                    <p className="text-center text-gray-600 mb-8">
                        Schedule your appointment with our expert doctors. It's quick, easy, and secure!
                    </p>

                    {/* Appointment Form */}
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative">
                                <label className="block text-gray-700 font-semibold">Select Doctor</label>
                                <select
                                    value={doctor}
                                    onChange={(e) => setDoctor(e.target.value)}
                                    required
                                    className="mt-1 block w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 p-3"
                                >
                                    <option value="">Choose Doctor</option>
                                    <option value="Dr. Smith">Dr. Smith</option>
                                    <option value="Dr. Johnson">Dr. Johnson</option>
                                    <option value="Dr. Bala">Dr. Bala</option>
                                    <option value="Dr. Pal">Dr. Pal</option>
                                </select>
                            </div>

                            <div className="relative">
                                <label className="block text-gray-700 font-semibold">Appointment Date</label>
                                <input
                                    type="date"
                                    value={appointmentDate}
                                    onChange={(e) => setAppointmentDate(e.target.value)} // Set appointment date
                                    required
                                    className="mt-1 block w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 p-3"
                                />
                            </div>

                            <div className="relative">
                                <label className="block text-gray-700 font-semibold">Time</label>
                                <input
                                    type="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)} // Set appointment time
                                    required
                                    className="mt-1 block w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 p-3"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-teal-600 transition-all duration-300"
                            >
                                Book Appointment
                            </button>
                        </form>
                    ) : (
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
                                Appointment Booked!
                            </h2>
                            <p className="text-gray-600">
                                Your appointment with {doctor} on {appointmentDate} at {time} is confirmed.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)} // Reset form for a new appointment
                                className="mt-6 px-6 py-3 bg-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
                            >
                                Book Another
                            </button>
                        </div>
                    )}

                    {/* Display User's Appointments */}
                    <h2 className="text-2xl font-bold text-gray-800 mt-8">Your Appointments</h2>
                    {appointments.length > 0 ? (
                        <ul className="mt-4">
                            {appointments.map((appointment, index) => (
                                <li key={index} className="border-b border-gray-300 py-2">
                                    <p className="text-gray-600">
                                        {appointment.doctor} on {appointment.appointment_date} at {appointment.time}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600">No appointments found.</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}


// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// export default function Appointments() {
//     const [doctor, setDoctor] = useState('');
//     const [appointmentDate, setAppointmentDate] = useState('');
//     const [time, setTime] = useState('');
//     const [submitted, setSubmitted] = useState(false);
//     const [appointments, setAppointments] = useState([]);
    

//     useEffect(() => {
//         const fetchAppointments = async () => {
//             const token = localStorage.getItem('token');
//             if (token) {
//                 try {
//                     const response = await fetch('/api/userAppointments', {
//                         headers: {
//                             Authorization: `Bearer ${token}`,
//                         },
//                     });

//                     if (response.ok) {
//                         const data = await response.json();
//                         setAppointments(data);
//                     } else {
//                         console.error('Failed to fetch appointments');
//                     }
//                 } catch (error) {
//                     console.error('Error fetching appointments:', error);
//                 }
//             }
//         };

//         fetchAppointments();
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const token = localStorage.getItem('token');
//         const userId = 'some_user_id'; // Replace with actual user ID from your authentication context

//         const response = await fetch('/api/appointments', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify({ userId, appointmentDate, time, doctor }),
//         });

//         if (response.ok) {
//                          const data = await response.json();
//                          setAppointments((prev) => [...prev, data]); // Add the new appointment to the list
//                          setSubmitted(true);
//                          // Reset form fields
//                          setDoctor('');
//                          setAppointmentDate('');
//                          setTime('');
//                      } else {
//                          console.error('Failed to book appointment');
//                     }
//                  };
//     return (
//         <div className="min-h-screen flex flex-col">
//             <Navbar />
//             <div className="flex-grow flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 py-10 relative overflow-hidden">
//                 <div className="absolute inset-0">
//                     <Image
//                         src="/images/appointment-bg.jpg"
//                         alt="Background"
//                         layout="fill"
//                         objectFit="cover"
//                         className="opacity-30"
//                     />
//                 </div>
//                 <div className="w-full max-w-lg bg-white bg-opacity-90 p-10 rounded-xl shadow-xl relative z-10">
//                     <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
//                         Book an Appointment
//                     </h1>
//                     <p className="text-center text-gray-600 mb-8">
//                         Schedule your appointment with our expert doctors. It's quick, easy, and secure!
//                     </p>
//                     {!submitted ? (
//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             <div className="relative">
//                                 <label className="block text-gray-700 font-semibold">Select Doctor</label>
//                                 <select
//                                     value={doctor}
//                                     onChange={(e) => setDoctor(e.target.value)}
//                                     required
//                                     className="mt-1 block w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 p-3"
//                                 >
//                                     <option value="">Choose Doctor</option>
//                                     <option value="Dr. Smith">Dr. Smith</option>
//                                     <option value="Dr. Johnson">Dr. Johnson</option>
//                                 </select>
//                             </div>
//                             <div className="relative">
//                                 <label className="block text-gray-700 font-semibold">Appointment Date</label>
//                                 <input
//                                     type="date"
//                                     value={appointmentDate}
//                                     onChange={(e) => setAppointmentDate(e.target.value)} // Set appointment date
//                                     required
//                                      className="mt-1 block w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 p-3"
//                               />
//                             </div>
//                             <div className="relative">
//                                 <label className="block text-gray-700 font-semibold">Time</label>
//                                 <input
//                                     type="time"
//                                     value={time}
//                                     onChange={(e) => setTime(e.target.value)}
//                                     required
//                                     className="mt-1 block w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 p-3"
//                                 />
//                             </div>
//                             <button
//                                 type="submit"
//                                 className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-teal-600 transition-all duration-300"
//                             >
//                                 Book Appointment
//                             </button>
//                         </form>
//                     ) : (
//                         <div className="text-center">
//                             <h2 className="text-2xl font-semibold text-teal-600 mb-4">
//                                 Appointment Booked!
//                             </h2>
//                             <p className="text-gray-600">
//                                 Your appointment with {doctor} on {appointmentDate} at {time} is confirmed.
//                             </p>
//                             <button
//                                 onClick={() => setSubmitted(false)}
//                                 className="mt-6 px-6 py-3 bg-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
//                             >
//                                 Book Another
//                             </button>
//                         </div>
//                     )}
//                     <h2 className="text-2xl font-bold text-gray-800 mt-8">Your Appointments</h2>
//                     {appointments.length > 0 ? (
//                         <ul className="mt-4">
//                             {appointments.map((appointment, index) => (
//                                 <li key={index} className="border-b border-gray-300 py-2">
//                                     <p className="text-gray-600">
//                                         {appointment.details} on {appointment.appointment_date} at {appointment.time}
//                                     </p>
//                                 </li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <p className="text-gray-600">No appointments found.</p>
//                     )}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }
