const express = require('express');
const bodyParser= require('body-parser')
const path = require('path');
const app = express();
const userRoute = require('./routes/user');
const adminRoute = require('./routes/admin');
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');
app.set('views', 'view');
app.use(userRoute);
app.use('/admin', adminRoute);
app.use((req,res,next)=>{
  res.render('404',{pageTitle:'Page not Found',path:''});
})
app.listen(3000);
