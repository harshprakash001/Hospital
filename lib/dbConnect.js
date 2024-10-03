



// import mysql from 'mysql2/promise';

// let connection;


// const mysql = require('mysql2');
// require('dotenv').config(); // Load environment variables

// // Create a connection to the database
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,      // Use host from .env.local
//   user: process.env.DB_USER,      // Use username from .env.local
//   password: process.env.DB_PASSWORD, // Use blank password from .env.local
//   database: process.env.DB_NAME    // Use database name from .env.local
// });

// // Connect to MySQL
// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting: ' + err.stack);
//     return;
//   }
//   console.log('Connected as id ' + connection.threadId);
// });

// module.exports = connection; // Export the connection for use in other files

import mysql from 'mysql2/promise';

let connection;

export async function dbConnect() {
  if (!connection) {
    connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || '',
      database: process.env.MYSQL_DATABASE || 'ram',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
  return connection;
}





// import mysql from 'mysql2/promise';

// async function dbConnect() {
//   try {
//     const connection = await mysql.createConnection({
//       host: process.env.DB_HOST || 'localhost',
//       user: process.env.DB_USER || 'root',
//       password: process.env.DB_PASSWORD || '',
//       database: process.env.DB_NAME || 'ram'
//     });
//     console.log('Database connected successfully!');
//     return connection;
//   } catch (error) {
//     console.error('Database connection failed:', error);
//     throw error; // Re-throw the error for further handling
//   }
// }

// export default dbConnect; // Make sure this line is present







// async function testConnection() {
//   const db = await dbConnect();
//   console.log('Database connected successfully!');
//   await db.end();
// }

// testConnection().catch(console.error);
