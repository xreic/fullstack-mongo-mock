var mongoose = require('mongoose');
// Complete the productSchema below.
var productSchema = mongoose.Schema({
  item: {
    type: String,
    required: true,
  },

  lower: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },

  ends_in: {
    type: Number,
    required: true,
  },

  min_cost: {
    type: Number,
    required: true,
  },

  curr_bid: {
    type: Number,
    required: true,
  },
});

module.exports = productSchema;
