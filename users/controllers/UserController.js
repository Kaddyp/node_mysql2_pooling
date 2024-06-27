const {conn, pool} = require('../../storage/connection');

module.exports = {
    registerUser: (req, res) => {
        
        var sql = `show DATABASES;`;
        
        conn.query(sql, (_err, rows) => {
            //console.log(rows);           
        })        
        sql = `INSERT INTO users (firstName, lastName, username, email, password, repeatPassword)
            VALUES (?, ?, ?, ?, ?, ?)`;
        const values = [
            req.body.firstName, req.body.lastName, req.body.username, req.body.email, req.body.password, req.body.repeatPassword
        ];
        conn.query(sql, values, (_err, rows) => {
            console.log(rows);           
        })
        sql = `select * from users;`;
        conn.query(sql, (_err, rows) => {
            //console.log(rows);           
        })
        pool.getConnection(function(err, connection) {
            if (err) throw err; // not connected!
            connection.query('SELECT * FROM users;', function (error, results, fields) {
                console.log('Daddy', results);
                // When done with the connection, release it.
                connection.release();
            
                // Handle error after the release.
                if (error) throw error;
            
                // Don't use the connection here, it has been returned to the pool.
            });
        });
        pool.on('connection', function (connection) {
            connection.query('SET SESSION auto_increment_increment=1')
          });
        pool.on('acquire', function (connection) {
            console.log('Connection %d acquired', connection.threadId);
        });

        res.json({
             message: `Successfully added new user, Customer ID- ${req.body}`,
        });
       
    }
}