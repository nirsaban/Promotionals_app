const path = require('path');
module.exports = (app) => {

const provider = require('../controllers/providersControllers.js');
const promotionals = require('../controllers/promotionalControllers.js');
app.route('/add_provider').post(provider.add_provider)
app.route('/get_providers').get(provider.get_providers)
app.route('/add_product').post(promotionals.add_promotional)

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build_copy', 'index.html'));
  });

}