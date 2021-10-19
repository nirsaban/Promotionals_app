const multer = require('multer')
const { v4: uuidv4 } = require('uuid');
module.exports = (app) => {

const provider = require('../controllers/providersControllers.js');
const promotionals = require('../controllers/promotionalControllers.js');
app.route('/add_provider').post(provider.add_provider)
app.route('/get_providers').get(provider.get_providers)
app.route('/get_last_month').get(promotionals.get_last_month)


const upload = multer()
app.route('/add_product').post(upload.single("file"),promotionals.add_promotional)



}   