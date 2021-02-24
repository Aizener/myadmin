var express = require('express');
var router = express.Router();
var os = require('os');
// const logger = require('../utils/logger').logger()
const { queryUser } = require('../dao/index')

/* GET home page. */
router.get('/system/info', function(req, res, next) {
  const data = [
    { info: '服务器地址', content: os.hostname() },
    { info: '操作系统', content: os.type() + os.release() },
    { info: '运行环境', content: os.platform() },
    { info: '系统类型', content: os.arch() },
    { info: '内存大小', content: (os.totalmem()/1024/1024/1024).toFixed(1) + 'G' },
    { info: '开发框架', content: 'Express4.x' }
  ]
  queryUser()
  res.status(200).json({
    code: 200,
    data
  })
});

module.exports = router;
