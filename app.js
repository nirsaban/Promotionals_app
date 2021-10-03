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
app.use(express.static(path.join(__dirname, 'build_copy')));

routes(app);

  
app.listen(process.env.PORT || 3000, function(){
   
});
