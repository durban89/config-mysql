'use strict';

let mysql = require('mysql');
exports = module.exports = cm.cm = cm;

function cm(config) {

  function Mysql() {
    this.connection = mysql.createConnection({
      host: config.host || 'localhost',
      user: config.user || '',
      password: config.password || '',
      database: config.database || ''
    });
  }

  Mysql.prototype.query = function(sql, callback) {
    this.connection.query(sql, function(error, rows, field) {
      if(error){
        return callback(error);
      }

      callback(null,rows);
    });
  }

  Mysql.prototype.close = function(callback){
    this.connection.end();
    callback(null);
  }

  return Mysql;
}