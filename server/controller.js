// Controller here
// complete building out the controller
var Product = require('../db/dbhelpers.js');

const controller = {
  get: (req, res) => {
    Product.getProductsHelper()
      .then((allItems) => {
        console.log(allItems);
        res.status(200).send(allItems).end();
      })
      .catch((err) => {
        console.error('------- Controllers / Get / Error -------');
        console.error(err);
        console.error('------- Controllers / Get / Error -------');
        res.status(400).send(err).end();
      });
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
