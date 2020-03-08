import React from 'react';
import axios from 'axios';

export default class ProductViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemIndex: this.props.viewingItemIndex,
      bid: null,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  componentDidMount() {}

  onSubmitHandler(e) {
    e.preventDefault();
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    if (this.props.item === undefined) {
      return (
        <div className="product-viewer">
          <div>No items. Final Destination. Fox Only.</div>
        </div>
      );
    } else {
      return (
        <div className="product-viewer">
          <h1>{this.props.item.item}</h1>
          <img src={this.props.item.image}></img>
          <div>
            <h2>Current Bid: ${this.props.item.curr_bid}</h2>
            <h3>Starting Price: ${this.props.item.min_cost}</h3>
            <h3>Ends in: {this.props.item.ends_in} hr(s)</h3>
            <form onSubmit={this.onSubmitHandler}>
              <label>
                Bid: <input required name="bid" onChange={this.onChangeHandler} />{' '}
                <button>Submit Bid</button>
              </label>
            </form>
          </div>
        </div>
      );
    }
  }
}
