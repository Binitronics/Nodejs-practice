const express = require('express');
const path= require ('path');
const usersRoute = require('./routes/user');
const homeRoute = require('./routes/home');
 const app = express();
 app.use(express.static(path.join(__dirname, 'public')))
 app.use(usersRoute);
app.use(homeRoute);

app.listen(3000);