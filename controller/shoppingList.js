const express = require('express')
var router = express.Router()


//import services

var shopService = require('../services/shopService')

router.get('/printall', shopService.printAll);

router.get('/listprintall', shopService.listprintall);

router.post('/updateall', shopService.updateall);

router.get('/removeall', shopService.removeall);

module.exports = router