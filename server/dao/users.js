const pool = require('./mysql')

/**
 * 获取用户信息
 * @param {page} 页数
 * @param {limit} 每页的个数 
 */
exports.findUsers = function ({page, limit}) {
  return new Promise((resolve, reject) => {
    pool.query('select * from users limit ?, ?', [(page - 1) * limit, limit], (err, res) => {
      if (err) reject(err)
      resolve(res)
    })
  })
}

exports.findUsersTotal = function () {
  return new Promise((resolve, reject) => {
    pool.query('select count(id) as total from users', (err, res) => {
      if (err) reject(err)
      if (res.length) {
        resolve(res[0].total)
      } else {
        resolve(0)
      }
    })
  })
}
