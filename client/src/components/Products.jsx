import React from 'react';

const Products = ({ item, index, onClickChangeViewingItem }) => {
  return (
    <div
      className="product-list-entry"
      onClick={(e) => onClickChangeViewingItem(e, index)}
    >
      <img src={item.image}></img>
      <div>
        <div>Item: {item.item}</div>
        <br />
        <br />
        <div>Current Bid: ${item.curr_bid.toLocaleString()}</div>
        <br />
        <br />
        <div>Starting Bid: ${item.min_cost.toLocaleString()}</div>
        <br />
        <br />
        <div>Ends in: {item.ends_in} hr(s)</div>
      </div>
    </div>
  );
};

export default Products;
