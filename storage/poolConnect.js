// var mysql = require('mysql2');

// var pool  = mysql.createPool({
//     connectionLimit : 10,
//     host            : 'localhost',
//     user            : 'root',
//     password        : 'Test123',
//     database        : 'userdb'
// });

// pool.getConnection(function(err, connection) {
//     if (err) throw err; // not connected!
  
//     // Use the connection
//     connection.query('SELECT * FROM users;', function (error, results, fields) {
//       // When done with the connection, release it.
//       connection.release();
  
//       // Handle error after the release.
//       if (error) throw error;
  
//       // Don't use the connection here, it has been returned to the pool.
//     });
// });
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function executeQuery(pool, queryText) {
//     let connection;
  
//     try {
//       // Getting a connection from the pool
//       connection = await pool.getConnection();
//       const [results, ] = await connection.query(queryText);
//       console.log(results);
//     } catch (error) {
//       console.error('Error executing query:', error);
//     } finally {
//       await sleep(2000);

//       // Don't forget to release the connection when finished!
//       if (connection) connection.release();
//     }
// }


// const queries = [
//     'show DATABASES;',
//     'SELECT COUNT(*) AS count FROM users;',
//     'select * from users;',
//     'SELECT COUNT(*) AS count FROM users;',
//     'SELECT COUNT(*) AS count FROM users;',
// ];
  
// for (let query of queries) {
//     //executeQuery(pool, query);
// }
// module.exports = pool;