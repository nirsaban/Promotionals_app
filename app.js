const express = require("express");
const cors = require("cors");
const routes = require('./src/routes/apiRoutes'); //importing route
const path = require('path');
const app = express();

app.use(express.json());
app.use(cors())
app.use(express.static(path.join(__dirname, 'build')));
routes(app);
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
routes(app);
app.listen(process.env.PORT || 5000, function(){
   
});
