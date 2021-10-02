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


routes(app);
app.use(express.static(path.join(__dirname, 'build_copy')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build_copy', 'index.html'));
  });
  
app.listen(5000,() => {
    console.log("runing server")
})
