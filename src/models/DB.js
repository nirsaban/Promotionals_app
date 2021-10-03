const mysql = require('mysql');
let db = mysql.createConnection({
    host     : 'https://academyjob.org',
    user     : 'onclickj_naor',
    password : 'parnasa2020',
    database:"onclickj_naor"
});

db.connect((err) => {
    if (err) throw err;
});

module.exports = db;