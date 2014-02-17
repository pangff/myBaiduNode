http = require('http')
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.render('list', { title: 'Express' });
};

exports.show = function(req, res){
  res.render('show', { title: 'Express' });
};