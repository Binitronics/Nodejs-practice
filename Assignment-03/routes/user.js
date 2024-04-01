const express =require('express');
const path= require('path');
const relPath= require('../util/rouetUtil');
const route = express.Router();

route.get('/user',(req,res,next)=>{
  console.log('user page route')

  res.sendFile(path.join(relPath,'views','user.html'));
})

module.exports = route;
