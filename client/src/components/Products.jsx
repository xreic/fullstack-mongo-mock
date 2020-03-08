import React from 'react';

const Products = ({ item, index }) => {
  return (
    <div className="product-list-entry">
      <img src={item.image}></img>
      <div>
        <div>Item: {item.item}</div>
        <br />
        <br />
        <div>Starting Bid: ${item.min_cost}</div>
        <br />
        <br />
        <div>Current Bid: ${item.curr_bid}</div>
        <br />
        <br />
        <div>Ends in: {item.ends_in} hr(s)</div>
      </div>
    </div>
  );
};

export default Products;
