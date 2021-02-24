const pool = require('./mysql')

exports.queryUser = function () {
  pool.query('select * from users', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
  })
}
