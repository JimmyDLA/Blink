import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
/* Search Google API for activities to add to
form will search google places API and save search parameters to later dispay these results */
       <div id='form-container'>
        <input id="searchForm"
          type="text"
          placeholder="Search Your Bucket List Item"
          />
        <button className="searchButton">Search</button>
        </div>
    );
  }
}

export default Search;
