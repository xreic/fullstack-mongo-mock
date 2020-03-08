// Controller here
// complete building out the controller
var Product = require('../db/dbhelpers.js');

const controller = {
  get: (req, res) => {
    Product.getProductsHelper()
      .then((allItems) => {
        res.status(200).send(allItems).end();
      })
      .catch((err) => {
        console.error('------- Controllers / Get / Error -------');
        console.error(err);
        console.error('------- Controllers / Get / Error -------');
        res.status(400).send(err).end();
      });
  },

  find: (req, res) => {
    Product.findProductsHelper(req.params.item)
      .then((allItems) => {
        res.status(200).send(allItems).end();
      })
      .catch((err) => {
        console.error('------- Controllers / Find / Error -------');
        console.error(err);
        console.error('------- Controllers / Find / Error -------');
        res.status(400).send(err).end();
      });
  },

  post: (req, res) => {
    req.body['lower'] = req.body.item.toLowerCase();
    Product.postProductsHelper(req.body)
      .then((result) => {
        console.log(result);
        res.status(200).send(result).end();
      })
      .catch((err) => {
        console.error('------- Controllers / Post / Error -------');
        console.error(err);
        console.error('------- Controllers / Post / Error -------');
        res.status(400).send(err).end();
      });
  },

  put: (req, res) => {
    Product.updateProductHelper(req.params._id, req.body.bid)
    .then((result) => {
      // Null when the bid is less than the minimum
      console.log('Result:', result);
      res.status(200).send(result).end();
    })
    .catch((err) => {
      console.error('------- Controllers / Put / Error -------');
      console.error(err);
      console.error('------- Controllers / Put / Error -------');
      res.status(400).send(err).end();
    });
  },

  delete: (req, res) => {
    Product.deleteProductHelper(req.params._id)
    .then((result) => {
      // n : 0 when _id not found within DB
      console.log('Result:', result.result);
      res.status(200).send(result.result).end();
    })
    .catch((err) => {
      console.error('------- Controllers / Delete / Error -------');
      console.error(err);
      console.error('------- Controllers / Delete / Error -------');
      res.status(400).send(err).end();
    });
  },
};

module.exports = controller;
