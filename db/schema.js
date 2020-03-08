var mongoose = require('mongoose');
// Complete the productSchema below.
var productSchema = mongoose.Schema({
  item: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
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

/*
  ensure your schema has the following:
    item:
      - string,
    min_cost:
      - number,
    curr_bid:
      - number,
    ends_in:
      - number
    image:
      - string
*/
