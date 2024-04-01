const express= require ('express');
const router= express.Router();
const path = require ('path');
const relPath= require ('../util/rouetUtil')
router.use((req,res,next)=>{
  res.sendFile(path.join(relPath, 'views', '404.html'))
})

module.exports= router;