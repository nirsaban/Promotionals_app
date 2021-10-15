const mysql = require('mysql');
let db = mysql.createConnection({
    host     : 'naor.cuu1hxd5gncc.eu-west-1.rds.amazonaws.com',
    user     : 'naor',
    password : '12345678',
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