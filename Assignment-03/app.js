const express = require('express');
const path = require('path');
const usersRoute = require('./routes/user');
const homeRoute = require('./routes/home');
const errorPageRoute = require('./routes/404');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(usersRoute);
app.use(homeRoute);
app.use(errorPageRoute);

app.listen(3000);
