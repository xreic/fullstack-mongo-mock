import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.retrieveProducts = this.retrieveProducts.bind(this);
  }

  componentDidMount() {
    this.retrieveProducts();
  }

  retrieveProducts() {
    axios.get('/products').then(({ data }) => {
      this.setState({
        productList: data,
      }, () => console.log(this.state));
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer />
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList />
          </div>
        </div>
      </div>
    );
  }
}
