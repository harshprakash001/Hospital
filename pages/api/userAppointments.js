// import dbConnect from '../../lib/dbConnect';
// import jwt from 'jsonwebtoken';

// export default async function handler(req, res) {
//     if (req.method === 'GET') {
//         const token = req.headers.authorization?.split(' ')[1]; // Bearer token

//         if (!token) {
//             return res.status(401).json({ error: 'Unauthorized' });
//         }

//         try {
//             const decoded = jwt.verify(token, process.env.JWT_SECRET);
//             const userId = decoded.id;

//             await dbConnect();

//             const query = 'SELECT * FROM appointments WHERE user_id = ?';
//             const values = [userId];
//             const appointments = await db.query(query, values);

//             return res.status(200).json(appointments);
//         } catch (error) {
//             return res.status(500).json({ error: 'Database error' });
//         }
//     }

//     res.setHeader('Allow', ['GET']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
// }


// pages/api/userAppointments.js
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
//       const userEmail = decoded.email; // Assuming the email is in the token

//       // Fetch appointments based on user email
//       const [appointments] = await connection.execute(
//         'SELECT * FROM appointments WHERE user_email = ?', // Make sure your appointments table has a user_email field
//         [userEmail]
//       );

//       return res.status(200).json(appointments);
//     } catch (error) {
//       return res.status(500).json({ message: 'Failed to fetch appointments', error: error.message });
//     }
//   } else {
//     res.setHeader('Allow', ['GET']);
//     return res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }



// // pages/api/userAppointments.js---------------------------------------
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
//       const userEmail = decoded.email; // Assuming the email is in the token

//       // Fetch appointments based on user email
//       const [appointments] = await connection.execute(
//         'SELECT * FROM appointments WHERE user_email = ?',
//         [userEmail]
//       );

//       // Send appointments as JSON response
//       return res.status(200).json(appointments); // Send the appointments data
//     } catch (error) {
//       return res.status(500).json({ message: 'Failed to fetch appointments', error: error.message });
//     }
//   } else {
//     res.setHeader('Allow', ['GET']);
//     return res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }


// pages/api/userAppointments.js
// import { dbConnect } from '../../lib/dbConnect'; // Make sure this path is correct
// import jwt from 'jsonwebtoken';

// export default async function handler(req, res) {
//     // Connect to the database
//     const connection = await dbConnect();

//     // Check if the request method is GET
//     if (req.method === 'GET') {
//         const token = req.headers.authorization?.split(' ')[1]; // Get the token from the authorization header

//         // If no token is provided, return Unauthorized
//         if (!token) {
//             return res.status(401).json({ message: 'Unauthorized' });
//         }

//         try {
//             // Verify the token and extract the email
//             const decoded = jwt.verify(token, process.env.JWT_SECRET);
//             const email = decoded.email;

//             // Fetch appointments for the user with the given email
//             const query = 'SELECT * FROM appointments WHERE user_email = ?';
//             const values = [email];
//             const [appointments] = await connection.execute(query, values);

//             return res.status(200).json({ appointments }); // Return appointments as JSON
//         } catch (error) {
//             console.error('Error fetching appointments:', error);
//             return res.status(500).json({ message: 'Internal Server Error' });
//         } finally {
//             await connection.end(); // Close the connection
//         }
//     }

//     // If the method is not GET, return Method Not Allowed
//     res.setHeader('Allow', ['GET']);
//     return res.status(405).end(`Method ${req.method} Not Allowed`);
// }



// import { dbConnect } from '../../lib/dbConnect';
// import jwt from 'jsonwebtoken';

// export default async function handler(req, res) {
//     if (req.method === 'GET') { // Change to GET for fetching appointments
//         const token = req.headers.authorization?.split(' ')[1];
//         if (!token) {
//             return res.status(401).json({ error: 'Unauthorized' });
//         }

//         try {
//             // Verify the token and get the user's email
//             const decoded = jwt.verify(token, process.env.JWT_SECRET);
//             const userId = decoded.id;

//             // Connect to the database
//             const connection = await dbConnect();

//             // Fetch appointments based on user ID
//             const [rows] = await connection.execute('SELECT * FROM appointments WHERE user_id = ?', [userId]);

//             // Close the connection (if not using a connection pool)
//             await connection.end(); // Make sure this line is in the right place

//             return res.status(200).json(rows);
//         } catch (error) {
//             console.error('Error fetching appointments:', error);
//             return res.status(500).json({ error: 'Error fetching appointments' });
//         }
//     } else {
//         res.setHeader('Allow', ['GET']);
//         return res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }



// import { dbConnect } from '../../lib/dbConnect';
// import jwt from 'jsonwebtoken';

// export default async function handler(req, res) {
//     if (req.method === 'GET') { 
//         const authHeader = req.headers.authorization;
//         const token = authHeader?.split(' ')[1]; // Extract the token from "Bearer <token>"

//         // Check if the token exists
//         if (!token) {
//             return res.status(401).json({ error: 'Unauthorized: Token missing' });
//         }

//         try {
//             // Verify the JWT token
//             const decoded = jwt.verify(token, process.env.JWT_SECRET);
//             const userId = decoded.id;

//             // Connect to the database
//             const connection = await dbConnect();

//             // Fetch the appointments for the logged-in user by user ID
//             const [rows] = await connection.execute('SELECT * FROM appointments WHERE user_id = ?', [userId]);

//             // Close the connection after the query
//             await connection.end();

//             return res.status(200).json(rows);
//         } catch (error) {
//             // Handle JWT errors (like malformed or expired tokens)
//             if (error.name === 'JsonWebTokenError') {
//                 return res.status(401).json({ error: 'Invalid or malformed token' });
//             } else if (error.name === 'TokenExpiredError') {
//                 return res.status(401).json({ error: 'Token expired' });
//             } else {
//                 console.error('Error fetching appointments:', error);
//                 return res.status(500).json({ error: 'Server error while fetching appointments' });
//             }
//         }
//     } else {
//         res.setHeader('Allow', ['GET']);
//         return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
//     }
// }



import { dbConnect } from '../../lib/dbConnect';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const authHeader = req.headers.authorization;
        const token = authHeader?.split(' ')[1]; // Extract the token from "Bearer <token>"

        // Check if the token exists
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized: Token missing' });
        }

        try {
            // Verify the JWT token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const userId = decoded.id;

            // Connect to the database
            const connection = await dbConnect();

            // Fetch the appointments for the logged-in user by user ID
            const [rows] = await connection.execute('SELECT * FROM appointments WHERE user_id = ?', [userId]);

            // Close the connection after the query
            await connection.end();

            return res.status(200).json(rows);
        } catch (error) {
            // Handle JWT errors (like malformed or expired tokens)
            if (error.name === 'JsonWebTokenError') {
                return res.status(401).json({ error: 'Invalid or malformed token' });
            } else if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            } else {
                console.error('Error fetching appointments:', error);
                return res.status(500).json({ error: 'Server error while fetching appointments: ' + error.message });
            }
        }
    } else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}


// pages/api/userAppointments.js
// import pool from '../../db'; // Adjust the import path as necessary
// import { pool } from '../../lib/db';

// export default async function handler(req, res) {
//     if (req.method === 'GET') {
//         try {
//             const token = req.headers.authorization.split(' ')[1]; // Assuming token is passed as 'Bearer token'
//             const userId = 'your_user_id'; // Replace this with your logic to extract user ID from token
            
//             const [appointments] = await pool.query('SELECT * FROM appointments WHERE userId = ?', [userId]);

//             res.status(200).json(appointments);
//         } catch (error) {
//             console.error('Error fetching appointments:', error);
//             res.status(500).json({ message: 'Error fetching appointments' });
//         }
//     } else {
//         res.setHeader('Allow', ['GET']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }
