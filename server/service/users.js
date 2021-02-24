const logger = require('../utils/logger').logger()
const { dateFormat } = require('../utils/index')
const { findUsers, findUsersTotal } = require('../dao/users')

/**
 * 获取用户信息
 * @param {page} 页数
 * @param {limit} 每页的个数 
 */
exports.findUsers = async function ({page = 0, limit = 10}) {
  try {
    const users = await findUsers({page, limit})
    users.forEach(item => {
      item.create_time = dateFormat(new Date(item.create_time * 1000))
      item.update_time = dateFormat(new Date(item.update_time * 1000))
    })

    const total = await findUsersTotal()
    return { users, total }
  } catch (err) {
    logger.error(err)
    return [] 
  }
}
