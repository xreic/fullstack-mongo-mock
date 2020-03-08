import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer.jsx';
import Search from './Search';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      viewingItemIndex: 0,
      query: '',
      posting: false,
      item: '',
      image: '',
      min_cost: '',
      ends_in: '',
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.retrieveProducts = this.retrieveProducts.bind(this);
    this.onClickChangeViewingItem = this.onClickChangeViewingItem.bind(this);
    this.onSubmitSearchHandler = this.onSubmitSearchHandler.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onClickPostButton = this.onClickPostButton.bind(this);
    this.onSubmitNewItem = this.onSubmitNewItem.bind(this);
  }

  componentDidMount() {
    this.retrieveProducts();
  }

  retrieveProducts() {
    axios
      .get('/products')
      .then(({ data }) => {
        this.setState({
          items: data,
          viewingItemIndex: this.state.posting ? (data.length - 1) : this.state.viewingItemIndex,
          posting: false,
          item: '',
          image: '',
          min_cost: '',
          ends_in: '',
        });
      })
      .catch((err) => console.error('App.jsx - Get:', err));
  }

  onClickChangeViewingItem(e, index) {
    this.setState({
      viewingItemIndex: index,
    }, () => scrollTo(0, 0));
  }

  onSubmitSearchHandler(e) {
    e.preventDefault();

    axios
      .get(`/products/${this.state.query}`)
      .then(({ data }) => {
        this.setState({
          items: data,
          viewingItemIndex: 0
        });
      })
      .catch((err) => console.error('App.jsx - Find:', err));
  }

  onChangeInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onClickPostButton(e) {
    this.setState({
      posting: true,
    });
  }

  onSubmitNewItem(e) {
    e.preventDefault();

    if (isNaN(this.state.min_cost)) {
      alert('Starting price must only contain numbers.');
    } else if (isNaN(this.state.ends_in)) {
      alert('Time limit must only contain numbers.');
    } else {
      axios
        .post('/products', {
          item: this.state.item,
          image:
            this.state.image === ''
              ? 'http://lorempixel.com/400/400/technics/3'
              : this.state.image,
          min_cost: this.state.min_cost,
          curr_bid: this.state.min_cost,
          ends_in: this.state.ends_in,
        })
        .then(() => {
          this.retrieveProducts();
          alert('Item added.');
        });
    }
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
            <Search
              onSubmitSearchHandler={this.onSubmitSearchHandler}
              onChangeInput={this.onChangeInput}
            />
          </div>
        </nav>

        {this.state.posting ? (
          <form onSubmit={this.onSubmitNewItem}>
            <label>
              Item: <input required name="item" onChange={this.onChangeInput} />
            </label>
            <label>
              Image: <input name="image" onChange={this.onChangeInput} />
            </label>
            <label>
              Starting Price:{' '}
              <input required name="min_cost" onChange={this.onChangeInput} />
            </label>
            <label>
              Time Limit (hours):{' '}
              <input required name="ends_in" onChange={this.onChangeInput} />
            </label>
            <button>Add Item</button>
          </form>
        ) : (
          <button onClick={this.onClickPostButton}>Post An Item</button>
        )}

        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer
              viewingItemIndex={this.state.viewingItemIndex}
              item={this.state.items[this.state.viewingItemIndex]}
              refreshData={this.componentDidMount}
            />
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList
              items={this.state.items}
              onClickChangeViewingItem={this.onClickChangeViewingItem}
            />
          </div>
        </div>
      </div>
    );
  }
}
