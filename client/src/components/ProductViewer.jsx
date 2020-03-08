import React from 'react';
import axios from 'axios';

export default class ProductViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemIndex: this.props.viewingItemIndex,
      bid: null,
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onSubmitHandler(e, _id) {
    e.preventDefault();

    if (this.state.bid > this.props.item.curr_bid) {
      axios
        .put(`/products/${_id}`, { bid: this.state.bid })
        .then((result) => {
          if (result.data !== '') {
            this.props.refreshData();
            setTimeout(() => {
              alert('You are now the leading bidder.');
            }, 125);
          } else {
            alert('Your bid is too low.');
          }
        })
        .catch((err) => {
          console.error('Front End - ProductViewer - Put', err);
        });
    } else {
      alert('Your bid is lower than the current going bid!');
    }
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onClickHandler(_id) {
    axios
      .delete(`/products/${_id}`)
      .then(() => this.props.refreshData())
      .catch((err) => {
        console.error('Front End - ProductViewer - Delete', err);
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
          <h1>
            {this.props.item.item}{' '}
            <button onClick={() => this.onClickHandler(this.props.item._id)}>
              Remove Item
            </button>
          </h1>
          <br />
          <a>
            <img src={this.props.item.image}></img>
          </a>
          <div>
            <h2>Current Bid: ${this.props.item.curr_bid.toLocaleString()}</h2>
            <h3>
              Starting Price: ${this.props.item.min_cost.toLocaleString()}
            </h3>
            <h3>Ends in: {this.props.item.ends_in} hr(s)</h3>
            <form
              onSubmit={(e) => this.onSubmitHandler(e, this.props.item._id)}
            >
              <label>
                Bid:{' '}
                <input required name="bid" onChange={this.onChangeHandler} />{' '}
                <button>Submit Bid</button>
              </label>
            </form>
          </div>
        </div>
      );
    }
  }
}
