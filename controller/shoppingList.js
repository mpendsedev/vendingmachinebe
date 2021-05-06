const express = require('express')
var router = express.Router()


//import services

var shopService = require('../services/shopService')

router.get('/printall', shopService.printAll);


// router.get('/printall', (req, res) => {
//     shopService.
//     res.send('in print all!')
//   })
  



module.exports = router