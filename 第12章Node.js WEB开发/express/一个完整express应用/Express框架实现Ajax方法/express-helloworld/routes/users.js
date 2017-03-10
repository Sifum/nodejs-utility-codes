var express = require('express');
var router = express.Router();

/* GET login page. */
router.post('/', function(req, res, next) {
  res.render('login', { 
       title: 'Express-Login',
       // 接受的参数
       userid: req.body.userid,
       pwd: req.body.pwd
    });
});

module.exports = router;
