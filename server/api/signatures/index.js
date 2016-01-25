'use strict';

var express = require('express');
var controller = require('./signature.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/id/:id', controller.show);
router.get('/country/:country', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;