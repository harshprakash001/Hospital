// import { dbConnect } from '../../lib/dbConnect';

// export default async function handler(req, res) {
//   const connection = await dbConnect(); // Connect to MySQL

//   if (req.method === 'POST') {
//     const { email, password } = req.body;

//     try {
//       // Query the 'users' table to check if the email and password match
//       const [rows] = await connection.execute('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);

//       if (rows.length > 0) {
//         // If a match is found, login is successful
//         res.status(200).json({ message: 'Login successful', user: rows[0] });
//       } else {
//         // If no match is found, send an error message
//         res.status(401).json({ message: 'Invalid email or password' });
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }




// import { compare } from 'bcrypt';  // bcrypt for password comparison
// import { dbConnect } from '../../lib/dbConnect';  // Import dbConnect function

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         const { email, password } = req.body;

//         try {
//             // Connect to the database
//             const connection = await dbConnect();

//             // Query the database for the user with the provided email
//             const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);

//             if (rows.length === 0) {
//                 // No user found with that email
//                 return res.status(404).json({ message: 'User not found' });
//             }

//             const user = rows[0]; // Get the user from the query result

//             // Compare the provided password with the stored hashed password
//             const isPasswordValid = await compare(password, user.password);

//             if (!isPasswordValid) {
//                 // If password does not match, send an error
//                 return res.status(401).json({ message: 'Invalid credentials' });
//             }

//             // If password is valid, return success response
//             res.status(200).json({ message: 'Login successful', user: { id: user.id, name: user.name, email: user.email } });
//         } catch (error) {
//             console.error('Error during login:', error);
//             res.status(500).json({ message: 'Internal Server Error' });
//         }
//     } else {
//         res.status(405).json({ message: 'Method Not Allowed' });
//     }
// }



import { compare } from 'bcrypt'; // bcrypt for password comparison
import { dbConnect } from '../../lib/dbConnect'; // Import dbConnect function
import jwt from 'jsonwebtoken'; // Import jsonwebtoken for JWT token generation

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        try {
            // Connect to the database
            const connection = await dbConnect();

            // Query the database for the user with the provided email
            const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);

            if (rows.length === 0) {
                // No user found with that email
                return res.status(404).json({ error: 'User not found' });
            }

            const user = rows[0]; // Get the user from the query result

            // Compare the provided password with the stored hashed password
            const isPasswordValid = await compare(password, user.password);

            if (!isPasswordValid) {
                // If password does not match, send an error
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            // If password is valid, generate a JWT token
            const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

            // Return the token along with the user info
            res.status(200).json({ message: 'Login successful', token, user: { id: user.id, name: user.name, email: user.email } });

        } catch (error) {
            console.error('Error during login:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
