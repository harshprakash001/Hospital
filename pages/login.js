import { useState } from 'react';
import styles from '../styles/Login.module.css';
import Navbar from '../components/Navbar';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('token', data.token); // Store token
            window.location.href = '/appointments'; // Redirect to appointments page
        } else {
            console.error(data.error);
        }
    };

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.card}>
                <h1 className={styles.title}>Welcome Back!</h1>
                <p className={styles.subtitle}>Please log in to your account</p>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={styles.input}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className={styles.input}
                            placeholder="Enter your password"
                        />
                    </div>

                    <button type="submit" className={styles.button}>Login</button>
                </form>
                <div className={styles.extra}>
                    <p>Forgot your password? <a href="#">Reset it here</a></p>
                    <p>Don't have an account? <a href="#">Sign up</a></p>
                </div>
            </div>
        </div>
    );
}



// import { useState, useEffect } from 'react';
// import styles from '../styles/Login.module.css';
// import Navbar from '../components/Navbar';

// export default function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [appointments, setAppointments] = useState([]); // State to hold appointment details
//     const [error, setError] = useState(null); // State to hold error messages

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch('/api/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email, password }),
//         });

//         const data = await response.json();

//         if (response.ok) {
//             localStorage.setItem('token', data.token); // Store token
//             await fetchAppointments(data.token); // Fetch appointments after successful login
//         } else {
//             setError(data.error); // Set error message
//             console.error(data.error);
//         }
//     };

//     const fetchAppointments = async (token) => {
//         const response = await fetch('/api/userAppointments', {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${token}`, // Send the token in the Authorization header
//             },
//         });

//         if (response.ok) {
//             const data = await response.json();
//             setAppointments(data); // Update appointments state
//             window.location.href = '/appointments'; // Redirect to appointments page
//         } else {
//             console.error('Error fetching appointments:', await response.json());
//         }
//     };

//     return (
//         <div className={styles.container}>
//             <Navbar />
//             <div className={styles.card}>
//                 <h1 className={styles.title}>Welcome Back!</h1>
//                 <p className={styles.subtitle}>Please log in to your account</p>
//                 <form onSubmit={handleSubmit} className={styles.form}>
//                     <div className={styles.inputGroup}>
//                         <label>Email</label>
//                         <input
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                             className={styles.input}
//                             placeholder="Enter your email"
//                         />
//                     </div>

//                     <div className={styles.inputGroup}>
//                         <label>Password</label>
//                         <input
//                             type="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                             className={styles.input}
//                             placeholder="Enter your password"
//                         />
//                     </div>

//                     {error && <p className={styles.error}>{error}</p>} {/* Show error message if exists */}

//                     <button type="submit" className={styles.button}>Login</button>
//                 </form>
//                 <div className={styles.extra}>
//                     <p>Forgot your password? <a href="#">Reset it here</a></p>
//                     <p>Don't have an account? <a href="#">Sign up</a></p>
//                 </div>
//             </div>
//         </div>
//     );
// }



// import { useState } from 'react';
// import styles from '../styles/Login.module.css';
// import Navbar from '../components/Navbar';

// export default function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [appointments, setAppointments] = useState([]); // State to hold appointment details
//     const [error, setError] = useState(null); // State to hold error messages

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Reset error message
//         setError(null);

//         try {
//             const response = await fetch('/api/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password }),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 localStorage.setItem('token', data.token); // Store token in localStorage
//                 await fetchAppointments(data.token); // Fetch appointments after successful login
//             } else {
//                 setError(data.message); // Set error message (adjusted to match backend response)
//                 console.error(data.message);
//             }
//         } catch (error) {
//             console.error('Login error:', error);
//             setError('Something went wrong. Please try again.');
//         }
//     };

//     const fetchAppointments = async (token) => {
//         try {
//             const response = await fetch('/api/userAppointments', {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': `Bearer ${token}`, // Send the token in the Authorization header
//                 },
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 setAppointments(data); // Update appointments state
//                 window.location.href = '/appointments'; // Redirect to appointments page
//             } else {
//                 console.error('Error fetching appointments:', await response.json());
//             }
//         } catch (error) {
//             console.error('Error fetching appointments:', error);
//         }
//     };

//     return (
//         <div className={styles.container}>
//             <Navbar />
//             <div className={styles.card}>
//                 <h1 className={styles.title}>Welcome Back!</h1>
//                 <p className={styles.subtitle}>Please log in to your account</p>
//                 <form onSubmit={handleSubmit} className={styles.form}>
//                     <div className={styles.inputGroup}>
//                         <label>Email</label>
//                         <input
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                             className={styles.input}
//                             placeholder="Enter your email"
//                         />
//                     </div>

//                     <div className={styles.inputGroup}>
//                         <label>Password</label>
//                         <input
//                             type="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                             className={styles.input}
//                             placeholder="Enter your password"
//                         />
//                     </div>

//                     {error && <p className={styles.error}>{error}</p>} {/* Show error message if exists */}

//                     <button type="submit" className={styles.button}>Login</button>
//                 </form>
//                 <div className={styles.extra}>
//                     <p>Forgot your password? <a href="#">Reset it here</a></p>
//                     <p>Don't have an account? <a href="#">Sign up</a></p>
//                 </div>
//             </div>
//         </div>
//     );
// }
