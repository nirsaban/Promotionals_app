var sql = require('./DB.js');

const  Promotional = {};



Promotional.addPromotional = (data, result) => { 
    const {product_name,more_info,product_price,provider_name,fileName} = data
    sql.query("INSERT INTO `promotionals` VALUES(NULL,?,?,?,?,?,NOW(),?)", [product_name,provider_name,more_info,product_price,fileName,0],  (err, res) => {  
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
Promotional.updateProductStatus = (data,result) => {  
    sql.query("UPDATE `promotionals` SET confirm = ? WHERE id = ?",[!data.status,data.id],(err, res) => {  
       if(err) {
           result(err, null);
       }
       else{
           result(null, res);
       }
   });           
}
Promotional.deleteProduct = (data,result) => {  
    sql.query("DELETE FROM `promotionals`  WHERE id = ?",[data.id],(err, res) => {  
       if(err) {
           result(err, null);
       }
       else{
           result(null, res);
       }
   });           
}

module.exports = Promotional;