const express = require('express');
const path = require('path');
const relPath = require('../util/rouetUtil');

const router = express.Router();

router.use('/', (req, resp, next) => {
  console.log('home page route');
  resp.sendFile(path.join(relPath, 'views', 'home.html'));
});

module.exports = router;
