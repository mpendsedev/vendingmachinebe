// const express = require('express')
const shopList = require('../dbconnections/shoppinglist')
const finalList = require('../dbconnections/finallist')

let obj = {}

obj.printAll = async function (req, res) {
    console.log('In print all API')
    let doc = await shopList.find().lean().select('-_id');
    res.send(doc)
}

obj.listprintall = async function (req, res) {
    console.log('In listprintall all API')
    let doc = await finalList.find().lean().select('-_id');
    res.send(doc)
}


  

obj.updateall = async function (req, res) {
    console.log('In updateall all API')
    console.log(req['query'])
    console.log(req['data'])
    console.log(req['param'])
    // console.log(req)
    console.log("___")

    const fl = new finalList({
        'id':req['query']['id'],
        'name' :req['query']['name'],
        'price':req['query']['price'],
    });

    console.log(req['query']['id'])
    console.log(req['query']['name'])
    console.log(req['query']['price'])
    

    let doc = await fl.save()
    res.send(doc)
}

obj.removeall = async function (req, res) {
    console.log('In removeall API');
    let doc = await finalList.remove({})
    res.send(doc)
}


module.exports = obj