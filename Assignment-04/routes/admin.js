const express = require('express');
const route = express.Router();
const userList = [];
route.get('/user-list', (req, res, next) => {
  // res.send('user list')
  console.log('add user page');
  res.render('user-list', { pageTitle: 'User list', userList: userList, path: '/admin/user-list' });
});
route.post('/user-list', (req, res, next) => {
  console.log(req.body);
  userList.push({ name: req.body.name, age: req.body.age });
  res.redirect('/admin/user-list');
});

module.exports = route;
