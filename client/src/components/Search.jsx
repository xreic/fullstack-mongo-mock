import React from 'react';

var Search = ({ onSubmitSearchHandler, onChangeInput }) => (
  <form
    className="search-bar form-inline"
    id="formSearch"
    onSubmit={onSubmitSearchHandler}
  >
    <input
      required
      name="query"
      className="form-control"
      type="text"
      onChange={onChangeInput}
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </form>
);

export default Search;
