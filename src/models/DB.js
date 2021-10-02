const mysql = require('mysql');
let db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database:"naor"
});

db.connect((err) => {
    if (err) throw err;
});

module.exports = db;