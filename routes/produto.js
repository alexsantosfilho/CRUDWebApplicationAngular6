var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Produto = require('../models/Produto.js');

/* GET ALL Produto */
router.get('/', function(req, res, next) {
  Produto.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Produto BY ID */
router.get('/:id', function(req, res, next) {
  Produto.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Produto */
router.post('/', function(req, res, next) {
  Produto.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Produto */
router.put('/:id', function(req, res, next) {
  Produto.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Produto */
router.delete('/:id', function(req, res, next) {
  Produto.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
