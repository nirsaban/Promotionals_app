// var sql = require('./db.js');

const  Promotional = {};


Promotional.addPromotional = ({state:{product_name,more_info,product_price,provider_name}}, result) => {  
//     sql.query("INSERT INTO `promotionals` VALUES(NULL,?,?,?,?,NOW())", [product_name,provider_name,more_info,product_price],  (err, res) => {  
//        if(err) {
//            result(err, null);
//        }
//        else{
//            result(null, res);
//        }
//    });           
}

module.exports = Promotional;