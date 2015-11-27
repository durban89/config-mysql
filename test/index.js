'use strict';

let config = {
  'host': '127.0.0.1',
  'user': 'root',
  'password': '123456',
  'database': 'qeeniao'
}

let mysql = require('../index')(config);
mysql.query('SELECT 1 + 1 AS solution', function(err, result) {
  console.log(err);
  console.log(result);
});