const mysql = require('mysql');
let db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database:"naor"
});

db.connect((err) => {
    if (err) {
        console.log(err)
        throw err
    }else{
        console.log('here DV')
    };
});
console.log('here DBBB')

module.exports = db;