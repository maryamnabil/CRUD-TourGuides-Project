const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');


var ToursRoutes = require('./routes/tours');
var UserRoutes = require('./routes/user');
// const swaggerDocs = require('./app/config/swaggerDef') ;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client

app.use((req , res ,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
     "GET, POST, PATCH, DELETE, PUT, OPTIONS"
   );
  next();
});

app.use('/tours',  ToursRoutes);
app.use('/users', UserRoutes);

// app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
// app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));

//These 2 lines make sure that vue and express app are coming from the same server. 
      app.use('/', express.static(path.join(__dirname,"../backend/public/dist/"))); 
      app.get('/', function(req,res) {
         res.sendFile('index.html', { root: path.join(__dirname, '../backend/public/dist/') });
      });

module.exports = app ;
