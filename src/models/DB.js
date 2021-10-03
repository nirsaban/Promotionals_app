const mysql = require('mysql');
let db = mysql.createConnection({
    host     : 'https://academyjob.org',
    port:'3306',
    user     : 'onclickj_naor',
    password : 'parnasa2020',
    database:"onclickj_naor"
});

db.connect((err) => {
    if (err) {
        console.log(err)
        throw err
    };
});

module.exports = db;