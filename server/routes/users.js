var express = require('express');
var router = express.Router();
const {
  findUsers
} = require('../service/users.js')

/**
 * 获取用户信息接口
 */
router.post('/', async function(req, res, next) {
  const { page, limit } = req.body
  const userResult = await findUsers({page, limit})
  setTimeout(() => {
    res.status(200).json({
      code: 200,
      data: userResult
    })
  }, 1500)
})

module.exports = router;
