// // /pages/api/appointments.js
// import { dbConnect } from '../../lib/dbConnect';  // Assuming you already have dbConnect
// // import jwt from 'jsonwebtoken';
// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { doctor, date, time,userId} = req.body;

//     try {
//       // Connect to the database
//       const connection = await dbConnect();

//       // Insert the appointment into the database
//       const [result] = await connection.execute(
//         'INSERT INTO appointments (doctor, date, time,userId) VALUES (?, ?, ?,?)',
//         [doctor, date, time,userId]
//       );

//       // Send a success response
//       res.status(200).json({ message: 'Appointment booked successfully!' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Error booking appointment' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }

// pages/api/appointments.js
// import { dbConnect } from '../../../lib/dbConnect';
// import { dbConnect } from '../../lib/dbConnect';

// import jwt from 'jsonwebtoken';

// export default async function handler(req, res) {
//   const connection = await dbConnect();

//   if (req.method === 'POST') {
//     const { doctor, date, time } = req.body;
//     const token = req.headers.authorization?.split(' ')[1];
    
//     if (!token) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }

//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace with your JWT secret
//       const userId = decoded.id;

//       const [result] = await connection.execute(
//         'INSERT INTO appointments (doctor, date, time, user_id) VALUES (?, ?, ?, ?)',
//         [doctor, date, time, userId]
//       );

//       return res.status(201).json({ message: 'Appointment booked', appointmentId: result.insertId });
//     } catch (error) {
//       return res.status(500).json({ message: 'Failed to book appointment', error: error.message });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     return res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }



// import { dbConnect } from '../../lib/dbConnect';
// import jwt from 'jsonwebtoken';

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         const { doctor, date, time } = req.body;

//         // Get the token from the headers
//         const token = req.headers.authorization?.split(' ')[1];
        
//         if (!token) {
//             return res.status(401).json({ error: 'Unauthorized' });
//         }

//         try {
//             // Verify the token to get the user's id
//             const decoded = jwt.verify(token, process.env.JWT_SECRET);
//             const userId = decoded.id;

//             // Connect to the database
//             await dbConnect();

//             // Insert the new appointment along with the user_id
//             const query = 'INSERT INTO appointments (doctor, date, time, user_id) VALUES (?, ?, ?, ?)';
//             const values = [doctor, date, time, userId];  // Ensure you include the user_id

//             // Execute the query using db.execute instead of db.query
//             const [result] = await db.execute(query, values);

//             if (result.affectedRows > 0) {
//                 return res.status(201).json({ message: 'Appointment created successfully' });
//             } else {
//                 return res.status(500).json({ error: 'Failed to create appointment' });
//             }
//         } catch (error) {
//             console.error('Database Error:', error);
//             return res.status(500).json({ error: 'An error occurred while creating the appointment' });
//         }
//     }

//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
// }


// import { dbConnect } from '../../lib/dbConnect';

// export default async function handler(req, res) {
//     const connection = await dbConnect(); // Connect to MySQL

//     if (req.method === 'POST') {
//         const { doctor, date, time, userId } = req.body; // Make sure to include userId for foreign key reference

//         const query = 'INSERT INTO appointments (doctor, date, time, user_id) VALUES (?, ?, ?, ?)'; // Make sure user_id matches your DB structure
//         const values = [doctor, date, time, userId]; // Include userId in your values array

//         try {
//             await connection.execute(query, values); // Execute the query
//             res.status(201).json({ message: 'Appointment created successfully' });
//         } catch (error) {
//             console.error('Database error:', error); // Log the error for debugging
//             res.status(500).json({ error: 'Database error' });
//         } finally {
//             await connection.end(); // Close the connection
//         }
//     } else {
//         res.setHeader('Allow', ['POST']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }


// pages/api/appointments.js
// import { dbConnect } from '../../lib/dbConnect';
// import jwt from 'jsonwebtoken';

// export default async function handler(req, res) {
//   const connection = await dbConnect();

//   if (req.method === 'GET') {
//     const token = req.headers.authorization?.split(' ')[1];

//     if (!token) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }

//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       const userId = decoded.id;

//       // Fetch the user email from the users table
//       const [userRows] = await connection.execute('SELECT email FROM users WHERE id = ?', [userId]);
//       const email = userRows[0]?.email;

//       // Fetch appointments based on the user's email
//       const [appointments] = await connection.execute('SELECT * FROM appointments WHERE user_email = ?', [email]);

//       return res.status(200).json({ appointments });
//     } catch (error) {
//       return res.status(500).json({ message: 'Failed to fetch appointments', error: error.message });
//     }
//   } else {
//     res.setHeader('Allow', ['GET']);
//     return res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }





// /pages/api/appointments.js
// import { db } from '../../lib/dbConnect';// Your database connection logic

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         const { doctor, date, time, user_id } = req.body;

//         try {
//             const result = await db.query(
//                 'INSERT INTO appointments (doctor, date, time, user_id) VALUES (?, ?, ?, ?)', 
//                 [doctor, date, time, user_id]
//             );
//             res.status(200).json({ message: 'Appointment booked successfully!' });
//         } catch (error) {
//             res.status(500).json({ message: 'Appointment booking failed.' });
//         }
//     }
// }



// import { dbConnect } from '../../lib/dbConnect';  // Import the database connection

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         const { userId, appointmentDate, details } = req.body;

//         try {
//             // Connect to the database
//             const connection = await dbConnect();

//             // Insert the appointment into the database
//             const query = 'INSERT INTO appointments (user_id, appointment_date, details) VALUES (?, ?, ?)';
//             const values = [userId, appointmentDate, details];

//             await connection.execute(query, values);

//             res.status(200).json({ message: 'Appointment created successfully' });
//         } catch (error) {
//             console.error('Error creating appointment:', error);
//             res.status(500).json({ message: 'Internal Server Error' });
//         }
//     } else {
//         res.status(405).json({ message: 'Method Not Allowed' });
//     }
// }


// import { dbConnect } from '../../lib/dbConnect';  // Import the database connection

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         const { userId, appointmentDate, details } = req.body;

//         // Check if any of the required fields are missing
//         if (!userId || !appointmentDate || !details) {
//             return res.status(400).json({ message: 'Missing required fields' });
//         }

//         try {
//             // Connect to the database
//             const connection = await dbConnect();

//             // Insert the appointment into the database
//             const query = 'INSERT INTO appointments (doctor,appointment_date,time,) VALUES (?, ?, ?)';
//             const values = [userId, appointmentDate, details];

//             await connection.execute(query, values);

//             res.status(200).json({ message: 'Appointment created successfully' });
//         } catch (error) {
//             console.error('Error creating appointment:', error);
//             res.status(500).json({ message: 'Internal Server Error' });
//         }
//     } else {
//         res.status(405).json({ message: 'Method Not Allowed' });
//     }
// }


// import { dbConnect } from '../../lib/dbConnect'; // Import the database connection

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         const { userId, appointmentDate, time, doctor } = req.body;

//         // Check if any of the required fields are missing
//         if (!userId || !appointmentDate || !time || !doctor) {
//             return res.status(400).json({ message: 'Missing required fields' });
//         }

//         try {
//             // Connect to the database
//             const connection = await dbConnect();

//             // Insert the appointment into the database
//             const query = 'INSERT INTO appointments (user_id, appointment_date, time, doctor) VALUES (?, ?, ?, ?)';
//             const values = [userId, appointmentDate, time, doctor];

//             const [result] = await connection.execute(query, values);

//             res.status(200).json({
//                 id: result.insertId,
//                 user_id: userId,
//                 appointment_date: appointmentDate,
//                 time,
//                 doctor,
//                 message: 'Appointment created successfully'
//             });
//         } catch (error) {
//             console.error('Error creating appointment:', error);
//             res.status(500).json({ message: 'Internal Server Error' });
//         }
//     } else {
//         res.status(405).json({ message: 'Method Not Allowed' });
//     }
// }



// import { dbConnect } from '../../lib/dbConnect'; // Import the database connection

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         const { userId, appointmentDate, time, doctor } = req.body;

//         // Check if any of the required fields are missing
//         if (!userId || !appointmentDate || !time || !doctor) {
//             return res.status(400).json({ message: 'Missing required fields' });
//         }

//         try {
//             // Connect to the database
//             const connection = await dbConnect();

//             // Check if the user exists
//             const checkUserQuery = 'SELECT * FROM users WHERE id = ?';
//             const [user] = await connection.execute(checkUserQuery, [userId]);

//             if (user.length === 0) {
//                 return res.status(400).json({ message: 'User ID does not exist' });
//             }

//             // Insert the appointment into the database
//             const query = 'INSERT INTO appointments (user_id, appointment_date, time, doctor) VALUES (?, ?, ?, ?)';
//             const values = [userId, appointmentDate, time, doctor];

//             const [result] = await connection.execute(query, values);

//             res.status(200).json({
//                 id: result.insertId,
//                 user_id: userId,
//                 appointment_date: appointmentDate,
//                 time,
//                 doctor,
//                 message: 'Appointment created successfully'
//             });
//         } catch (error) {
//             console.error('Error creating appointment:', error);
//             res.status(500).json({ message: 'Internal Server Error' });
//         }
//     } else {
//         res.status(405).json({ message: 'Method Not Allowed' });
//     }
// }



import { dbConnect } from '../../lib/dbConnect';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const authHeader = req.headers.authorization;
        const token = authHeader?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized: Token missing' });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const userId = decoded.id; // Assuming user ID is part of the token payload
            const { appointment_date, time, doctor } = req.body; // Get data from request body

            // Log data for debugging
            console.log('Creating appointment:', { userId, appointment_date, time, doctor });

            // Check for missing fields
            if (!appointment_date || !time || !doctor) {
                return res.status(400).json({ error: 'Missing required fields: appointment_date, time, doctor' });
            }

            const connection = await dbConnect();
            await connection.execute(
                'INSERT INTO appointments (user_id, appointment_date, time, doctor) VALUES (?, ?, ?, ?)', 
                [userId, appointment_date, time, doctor]
            );
            await connection.end();

            res.status(201).json({ message: 'Appointment created successfully' });
        } catch (error) {
            console.error('Error creating appointment:', error);
            res.status(500).json({ error: 'Error creating appointment: ' + error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}
