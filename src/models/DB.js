const mysql = require('mysql');
let db = mysql.createConnection({
    host     : 'academyjob.org',
    user     : 'onclickj_naor',
    port:'3306',
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