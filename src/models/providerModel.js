var sql = require('./db.js');

const  Provider = {};


Provider.addProvider = ({state:{provider_name,more_info}}, result) => {     
    sql.query("INSERT INTO `providers` VALUES (NULL,?,?,NOW())", [provider_name,more_info],  (err, res) => {  
       if(err) {
           result(err, null);
       }
       else{
           result(null, res);
       }
   });           
}
Provider.getProviders = (getProviders, result) => {    
    console.log(getProviders) 
    sql.query("SELECT name FROM providers",  (err, res) => {  
       if(err) {
           result(err, null);
       }
       else{
           result(null, res);
       }
   });           
}
module.exports = Provider;