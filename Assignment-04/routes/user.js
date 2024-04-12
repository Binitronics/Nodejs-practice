const express = require('express');
const route = express.Router();

route.get('/', (req, res, next) => {
  console.log('user page');
  res.render('user', { pageTitle: 'Users' ,path:'/'});
});
module.exports = route;
