'use strict';

let mysql = require('mysql');
exports = module.exports = cm.cm = cm;

function cm(config){
  const fn = function(){
    console.log(config);
    console.log('hree');
  };

  return fn;
}