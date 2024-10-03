// // // pages/register.js
// // import { useState } from 'react';
// // import Navbar from '../components/Navbar';
// // import Footer from '../components/Footer';
// // import styles from '../styles/Register.module.css';

// // export default function Register() {
// //     const [name, setName] = useState('');
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         console.log('Registration form submitted with', { name, email, password });
// //     };

// //     return (
// //         <div className={styles.pageWrapper}>
// //             <Navbar />
// //             <div className={styles.container}>
// //                 <div className={styles.formWrapper}>
// //                     <h1 className={styles.title}>Create Your Account</h1>
// //                     <p className={styles.subtitle}>Join us and explore endless possibilities</p>
// //                     <form onSubmit={handleSubmit} className={styles.form}>
// //                         <div className={styles.inputGroup}>
// //                             <label>Name</label>
// //                             <input
// //                                 type="text"
// //                                 value={name}
// //                                 onChange={(e) => setName(e.target.value)}
// //                                 required
// //                                 className={styles.input}
// //                                 placeholder="Enter your name"
// //                             />
// //                         </div>

// //                         <div className={styles.inputGroup}>
// //                             <label>Email</label>
// //                             <input
// //                                 type="email"
// //                                 value={email}
// //                                 onChange={(e) => setEmail(e.target.value)}
// //                                 required
// //                                 className={styles.input}
// //                                 placeholder="Enter your email"
// //                             />
// //                         </div>

// //                         <div className={styles.inputGroup}>
// //                             <label>Password</label>
// //                             <input
// //                                 type="password"
// //                                 value={password}
// //                                 onChange={(e) => setPassword(e.target.value)}
// //                                 required
// //                                 className={styles.input}
// //                                 placeholder="Enter your password"
// //                             />
// //                         </div>

// //                         <button type="submit" className={styles.button}>Register</button>
// //                     </form>
// //                     <div className={styles.extra}>
// //                         <p>Already have an account? <a href="#">Login here</a></p>
// //                     </div>
// //                 </div>
// //             </div>
// //             <Footer />
// //         </div>
// //     );
// // }


// // const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const response = await fetch('/api/register', {
// //         method: 'POST',
// //         headers: {
// //             'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ name, email, password }),
// //     });

// //     const data = await response.json();
// //     console.log(data);
// // };


import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Register.module.css';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Corrected handleSubmit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Registration successful:', data);
                alert('Registration successful!');
            } else {
                console.error('Registration failed:', data.message);
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error('An error occurred:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className={styles.pageWrapper}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.formWrapper}>
                    <h1 className={styles.title}>Create Your Account</h1>
                    <p className={styles.subtitle}>Join us and explore endless possibilities</p>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label>Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className={styles.input}
                                placeholder="Enter your name"
                            />
                        </div>

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

                        <button type="submit" className={styles.button}>Register</button>
                    </form>
                    <div className={styles.extra}>
                        <p>Already have an account? <a href="#">Login here</a></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}



// import { useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import styles from '../styles/Register.module.css';

// export default function Register() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isSubmitting, setIsSubmitting] = useState(false); // Track submitting state

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true); // Disable the button while submitting

//         try {
//             const response = await fetch('/api/register', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ name, email, password }),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 console.log('Registration successful:', data);
//                 alert('Registration successful!');
//                 // Optionally, reset the form
//                 setName('');
//                 setEmail('');
//                 setPassword('');
//             } else {
//                 console.error('Registration failed:', data.message);
//                 alert(`Error: ${data.message}`);
//             }
//         } catch (error) {
//             console.error('An error occurred:', error);
//             alert('An error occurred. Please try again.');
//         } finally {
//             setIsSubmitting(false); // Re-enable the button after submission
//         }
//     };

//     return (
//         <div className={styles.pageWrapper}>
//             <Navbar />
//             <div className={styles.container}>
//                 <div className={styles.formWrapper}>
//                     <h1 className={styles.title}>Create Your Account</h1>
//                     <p className={styles.subtitle}>Join us and explore endless possibilities</p>
//                     <form onSubmit={handleSubmit} className={styles.form}>
//                         <div className={styles.inputGroup}>
//                             <label>Name</label>
//                             <input
//                                 type="text"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 required
//                                 className={styles.input}
//                                 placeholder="Enter your name"
//                             />
//                         </div>

//                         <div className={styles.inputGroup}>
//                             <label>Email</label>
//                             <input
//                                 type="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                                 className={styles.input}
//                                 placeholder="Enter your email"
//                             />
//                         </div>

//                         <div className={styles.inputGroup}>
//                             <label>Password</label>
//                             <input
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                                 className={styles.input}
//                                 placeholder="Enter your password"
//                             />
//                         </div>

//                         <button type="submit" className={styles.button} disabled={isSubmitting}>
//                             {isSubmitting ? 'Registering...' : 'Register'}
//                         </button>
//                     </form>
//                     <div className={styles.extra}>
//                         <p>Already have an account? <a href="#">Login here</a></p>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }
