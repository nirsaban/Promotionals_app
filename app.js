const express = require("express");
const cors = require("cors");
const helmet = require('helmet');
const morgan = require('morgan');
const routes = require('./src/routes/apiRoutes'); //importing route
const path = require('path');

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors())
app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));

});
routes(app);  
app.listen(process.env.PORT || 5000, function(){
   
});
