'use strict';

let config = {
  'host': '127.0.0.1',
  'user': 'root',
  'password': '123456',
  'database': 'qeeniao'
}

let Mysql = require('../index')(config);
let mysql = new Mysql;
// console.log('',mysql);
mysql.query('select * from user order by user_id DESC limit 0,10', function(err, result) {
  console.log(err);
  console.log(result);
});