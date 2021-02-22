var express = require('express');
var router = express.Router();
var os = require('os');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(500).json({
    systemName: os.hostname(),
    systemType: os.type() + os.release(),
    systemPlatform: os.platform(),
    systemArch: os.arch(),
    systemTotal: (os.totalmem()/1024/1024/1024).toFixed(1) + 'G',
    framework: 'Express4.x'
  })
});

module.exports = router;
