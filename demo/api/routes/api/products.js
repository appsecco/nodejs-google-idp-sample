var express = require('express');
var router = express.Router();
var uuid4 = require('uuid4');

// In memory products DB simulation
var PRODUCTS_DB = []

function productsList() {
  return PRODUCTS_DB
}

function productAdd(prod) {
  prod.id = uuid4()
  PRODUCTS_DB.push(prod)

  return prod
}

function productGet(id) {
  let product = PRODUCTS_DB.find(function (x) {
    return x.id === id
  })

  return (product || {})
}

function productDelete(id) {
  PRODUCTS_DB = PRODUCTS_DB.filter(function (x) {
    return (x.id !== id)
  })
}

router.get('/:id', function (req, res, next) {
  let response = productGet(req.params.id)
  res.json(response)
})

router.get('/', function(req, res, next) {
  let response = productsList()
  res.json(response)
});

router.post('/', function(req, res, next) {
  let response = productAdd(req.body)
  res.json(response)
})

router.delete('/:id', function(req, res, next) {
  let response = productDelete(req.params.id)
  res.json(response)
})

module.exports = router;
