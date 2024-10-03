// import connectDB from '../../lib/dbConnect';
// import { dbConnect } from '../../lib/dbConnect';
// import User from '../../models/User';
// import bcrypt from 'bcrypt';

// // export default async function handler(req, res) {
// //     // Connect to the database
// //     await connectDB();

// //     if (req.method === 'POST') {
// //         // Destructure the request body
// //         const { name, email, password } = req.body;

// //         // Basic validation to ensure required fields are present
// //         if (!name || !email || !password) {
// //             return res.status(400).json({ error: 'Please provide all the required fields: name, email, password' });
// //         }

// //         try {
// //             // Check if the user already exists
// //             const existingUser = await User.findOne({ email });
// //             if (existingUser) {
// //                 return res.status(400).json({ error: 'User with this email already exists' });
// //             }

// //             // Hash password with bcrypt
// //             const hashedPassword = await bcrypt.hash(password, 10);

// //             // Create new user
// //             const user = await User.create({ name, email, password: hashedPassword });

// //             // Return successful response with user data (excluding password)
// //             res.status(201).json({
// //                 message: 'User created successfully',
// //                 user: {
// //                     id: user._id,
// //                     name: user.name,
// //                     email: user.email,
// //                 },
// //             });

// //         } catch (error) {
// //             // Handle possible errors
// //             res.status(500).json({ error: `Error creating user: ${error.message}` });
// //         }
// //     } else {
// //         // Method not allowed response for non-POST requests
// //         res.setHeader('Allow', ['POST']);
// //         res.status(405).end(`Method ${req.method} Not Allowed`);
// //     }
// // }


// // pages/register.js
// import { useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import styles from '../styles/Register.module.css';

// export default function Register() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch('/api/register', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ name, email, password }),
//         });

//         const data = await response.json();
//         console.log(data);
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

//                         <button type="submit" className={styles.button}>Register</button>
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


// pages/api/register.js
// import dbConnect from '../../lib/dbConnect';
// import User from '../../models/User';

// export default async function handler(req, res) {
//     await dbConnect();

//     if (req.method === 'POST') {
//         const { name, email, password } = req.body;

//         try {
//             // Ensure all fields are filled out
//             if (!name || !email || !password) {
//                 return res.status(400).json({ message: 'Please fill all the fields.' });
//             }

//             // Check if the user already exists
//             const userExists = await User.findOne({ email });
//             if (userExists) {
//                 return res.status(400).json({ message: 'User already exists.' });
//             }

//             // Create a new user
//             const newUser = await User.create({
//                 name,
//                 email,
//                 password,  // You should hash the password using bcrypt before storing it
//             });

//             return res.status(201).json({ message: 'User registered successfully!', user: newUser });
//         } catch (error) {
//             return res.status(500).json({ message: 'Server error', error });
//         }
//     } else {
//         res.status(405).json({ message: 'Method not allowed' });
//     }
// }



// 


// import { dbConnect } from '../../lib/dbConnect';

// export default async function handler(req, res) {
//   console.log("API called");
//   const connection = await dbConnect();  // Connect to MySQL

//   if (req.method === 'POST') {
//     const { name, email, password } = req.body;

//     try {
//       // Insert the new user into the MySQL table
//       const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
//       const values = [name, email, password];

//       await connection.execute(query, values);

//       res.status(200).json({ message: 'User registered successfully' });
//     } catch (error) {
//       console.error('Error inserting user into database:', error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }


// import { connectToDatabase } from '../../lib/dbConnect';
// import mysql from 'mysql2/promise';

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         const { name, emailid, password } = req.body;

//         const connection = await connectToDatabase();
//         try {
//             const [rows] = await connection.execute(
//                 'INSERT INTO users (name, emailid, password) VALUES (?, ?, ?)',
//                 [name, emailid, password]
//             );
//             res.status(201).json({ message: 'User registered successfully!' });
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ message: 'Error registering user' });
//         } finally {
//             connection.end();
//         }
//     } else {
//         res.setHeader('Allow', ['POST']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }






// import dbConnect from '../../lib/dbConnect';
// import bcrypt from 'bcrypt';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, emailid, password } = req.body;

//     // Log the password value to ensure it's passed correctly
//     console.log("Password received:", password);

//     if (!name || !emailid || !password) {
//       return res.status(400).json({ message: 'Missing required fields' });
//     }

//     try {
//       // Hashing the password and log the result
//       const hashedPassword = await bcrypt.hash(password, 10);
//       console.log("Hashed Password:", hashedPassword);

//       // Connecting to the database
//       const connection = await dbConnect();
//       console.log('Database connected successfully!');

//       // Inserting the user into the database
//       const [result] = await connection.execute(
//         'INSERT INTO users (name, emailid, password) VALUES (?, ?, ?)',
//         [name, emailid, hashedPassword]
//       );

//       res.status(200).json({ message: 'User registered successfully' });
//     } catch (error) {
//       console.error('Error registering user:', error);
//       res.status(500).json({ message: 'Error registering user', error });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }


import { hash } from 'bcrypt';  // Ensure bcrypt is imported
import { dbConnect } from '../../lib/dbConnect';  // Import dbConnect function

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, password } = req.body;

        // Hash the password before saving it to the database
        const hashedPassword = await hash(password, 10);

        try {
            // Connect to the database
            const connection = await dbConnect();

            // Insert the new user into the users table
            const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
            const values = [name, email, hashedPassword];

            await connection.execute(query, values);  // Use connection to execute the query

            res.status(200).json({ message: 'User registered successfully' });
        } catch (error) {
            console.error('Error inserting user into the database:', error);

            // Handle specific error for duplicate email entry
            if (error.code === 'ER_DUP_ENTRY') {
                res.status(400).json({ message: 'Email already exists.' });
            } else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
