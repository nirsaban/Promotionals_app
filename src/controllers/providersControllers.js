'use strict';
var Provider = require('../models/providerModel.js');

exports.add_provider = (req, res) => {
Provider.addProvider(req.body, async (err, providerCreated) => {
 if (err) res.send({msg:"somthing faild"});
    if(providerCreated.affectedRows == 1){
         res.send({
            provider:providerCreated.insertId
        })
    }
});
};
exports.get_providers = (req, res) => {
Provider.getProviders( (err, providers) => {
 if (err) res.send({msg:"somthing faild"});
    if(providers){
         res.send({
            providers
        })
    }
});
};