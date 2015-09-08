var express = require('express');
var router = express.Router();

var Penguin = require('../models/penguins');


router.get('/', function(req, res, next) {
  res.render('allPenguins', { title: 'Penguin Gallery' });
});

router.get('/penguin', function(req, res, next) {
  res.render('penguin', { title: 'Penguin Profile' })
});

router.post('/allPenguins', function(req, res, next) {

});

router.put('/penguin', function(req, res, next) {

});

router.delete('/penguin', function(req, res, next) {

});

module.exports = router;
