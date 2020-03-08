var Product = require('./index.js');
// complete the dbhelpers
var helpers = {
  getProductsHelper: () => Product.find({}),
  postProductsHelper: (item) => Product.create(item),
  updateProductHelper: (_id, bid) =>
    Product.findOneAndUpdate(
      { _id, min_cost: { $lte: bid } },
      { $max: { curr_bid: bid } }
    ),
  deleteProductHelper: (_id) => Product.deleteOne({_id}),
};

module.exports = helpers;
