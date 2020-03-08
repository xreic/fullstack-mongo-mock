// Controller here
// complete building out the controller
var Product = require('../db/');

const controller = {
  get: (req, res) => {
    res.status(200).send('Get (1)').end();
  },
  post: (req, res) => {
    res.status(200).send('Post (1)').end();
  },
  put: (req, res) => {
    res.status(200).send(`Put (${req.params._id})`).end();
  },
  delete: (req, res) => {
    res.status(200).send(`Delete (${req.params._id})`).end();
  },
};

module.exports = controller;
