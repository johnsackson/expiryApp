const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const connection = (closure) => {
  return MongoClient.connect('mongodb://localhost:27017/products', (err, db) => {
    if (err) return console.log(err);

    closure(db);
  });
};

const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err === 'object' ? err.message : err;
  res.status(501).json(response);
};

const response = {
  status: 200,
  data: [],
  message: null
};

router.get('/vegitables', (req, res) => {
  connection((db) => {
    db.collection('vegitables')
    .find()
    .toArray()
    .then((users) => {
      response.data = users;
      res.json(response);
    })
    .catch((err) => sendError(err, res));
  });
});

router.get('/fruits', (req, res) => {
  connection((db) => {
    db.collection('fruits')
    .find()
    .toArray()
    .then((users) => {
      response.data = users;
      res.json(response);
    })
    .catch((err) => sendError(err, res));
  });
});

router.get('/groceries', (req, res) => {
  connection((db) => {
    db.collection('groceries')
    .find()
    .toArray()
    .then((users) => {
      response.data = users;
      res.json(response);
    })
    .catch((err) => sendError(err, res));
  });
});

module.exports = router;