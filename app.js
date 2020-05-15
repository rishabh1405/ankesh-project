const express = require("express");
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const postData = require('./routes/data');
app.use(bodyParser.json());
app.use('/data',postData);

// mongoose.connect('mongodb://<dbuser>:<dbpsssword>link',
// { useNewUrlParser:true},
// ()=>{
//     console.log("db connected");
    
// });

app.listen(3000);