var sql = require('./DB.js');

const  Promotional = {};


Promotional.addPromotional = ({state:{product_name,more_info,product_price,provider_name}}, result) => {  
    sql.query("INSERT INTO `promotionals` VALUES(NULL,?,?,?,?,NOW())", [product_name,provider_name,more_info,product_price],  (err, res) => {  
       if(err) {
           result(err, null);
       }
       else{
           result(null, res);
       }
   });           
}
Promotional.getLastMonth = (result) => {  
    sql.query("SELECT * FROM promotionals WHERE created_at > DATE_SUB(NOW(), INTERVAL 30 DAY) ORDER BY created_at",(err, res) => {  
       if(err) {
           result(err, null);
       }
       else{
           result(null, res);
       }
   });           
}

module.exports = Promotional;