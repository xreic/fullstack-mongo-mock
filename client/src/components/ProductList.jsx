import React from 'react';
import Products from './Products';

const ProductList = ({ items, onClickChangeViewingItem }) => {
  if (items.length > 0) {
    return (
      <div className="product-list">
        <h2>Current Products</h2>
        {items.map((item, index) => (
          <Products
            key={index}
            item={item}
            index={index}
            onClickChangeViewingItem={onClickChangeViewingItem}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="product-list">
        <h2>No items. Final Destination. Fox Only.</h2>
      </div>
    );
  }
};

export default ProductList;
