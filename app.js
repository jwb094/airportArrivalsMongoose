const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const layouts = require('express-ejs-layouts');
const routes = require('./routes/displayPagesRoutes');
const airportsroutes = require('./routes/airportsDetailRoute');

const mongoose = require('mongoose');


  // connect to the database - create a new database
mongoose.connect('mongodb://localhost/airports');

app.set('view engine' , 'ejs');
app.use(layouts);

//middleware used
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.use(routes);
app.use(airportsroutes);


app.listen(3000 , () => {
  console.log('listening on port 3000');
});