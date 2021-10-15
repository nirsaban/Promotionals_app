const mysql = require('mysql');
let db = mysql.createConnection({
    host     : 'myservicessapps.com',
    user     : 'myservicessapps_myservic_reg_apk_new_mb',
    password : 'TBNznM2aD;,vb((SIp',
    database:"myservic_registra_apk",
    connectionLimit : 10
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