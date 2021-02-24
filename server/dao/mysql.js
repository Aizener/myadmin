var mysql = require("mysql")

module.exports = mysql.createPool({
  host:"localhost",
  user:"root",
  password:"271019",
  database:"myadmin"
})
