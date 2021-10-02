'use strict';
var Promotional = require('../models/promotionalModel.js');

exports.add_promotional= (req, res) => {
Promotional.addPromotional(req.body, async (err, promotionalCreated) => {
 if (err) res.send({msg:"somthing faild"});
    if(promotionalCreated.affectedRows == 1){
         res.send({
            provider:promotionalCreated.insertId
        })
    }
});
};
