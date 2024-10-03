// const connection = require('./dbConnect'); // Adjust the path if necessary

// // Insert a new user
// const newUser = {
//     name: 'John Doe',
//     email: 'john@example.com',
//     password: 'password123', // In a real app, make sure to hash this!
// };

// connection.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [newUser.name, newUser.email, newUser.password], (err, results) => {
//     if (err) {
//         console.error('Error executing query:', err);
//         return;
//     }
//     console.log('Inserted User ID:', results.insertId);
// });

// // Test a simple query
// connection.query('SELECT * FROM users', (err, results) => {
//     if (err) {
//         console.error('Error executing query:', err);
//         return;
//     }
//     console.log('Users:', results);
// });

// // Close the connection when done
// connection.end();
