// const express = require('express')
const shopList = require('../dbconnections/shoppinglist')

let obj = {}

obj.printAll = async function (req, res) {
    console.log('In print all API')
    let doc = await shopList.find().lean().select('-_id');
    res.send(doc)
}


module.exports = obj