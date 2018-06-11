var express = require('express');
var router = express();
var path = require('path');
var loginRouter = require(path.join(__dirname,'login'));
var registerRouter = require(path.join(__dirname,'register'));
var updateRouter = require(path.join(__dirname,'update'));


router.use(updateRouter);
router.use(loginRouter);
router.use(registerRouter);

module.exports = router;