const mysql = require('mysql');
let db = mysql.createConnection({
    host     : 'localhost',
    port:'3306',
    user     : 'onclickj_main',
    password : 'parnasa2020S',
    database:"onclickj_naor"
});

db.connect((err) => {
    if (err) {
        console.log(err)
        throw err
    };
});

module.exports = db;