import React, { Component } from 'react';
import { connect } from "react-redux"
import './SearchBox.css';
import {sortMovies} from "./action"

class SearchBox extends Component {
   state = {
      searchLine: ''
   }
   searchLineChangeHandler = (e) => {
      this.setState({ searchLine: e.target.value });
   }
   searchBoxSubmitHandler = (e) => {
      e.preventDefault();
   }
   render() {
      const { searchLine } = this.state;

      return (
         <div className="search-box">
            <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
               <label className="search-box__form-label">
                  Искать фильм по названию:
                  <input
                     value={searchLine}
                     type="text"
                     className="search-box__form-input"
                     placeholder="Например, Shawshank Redemption"
                     onChange={this.searchLineChangeHandler}
                  />
               </label>
               <button
                  type="submit"
                  className="search-box__form-submit"
                  disabled={!searchLine}
                  onClick={() => this.props.sortMovies(this.state.searchLine)}
               >
                  Искать
               </button>
            </form>
         </div>
      );
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      sortMovies: (name) => { dispatch(sortMovies(name)) }
   }
}

const mapStateToProps = (state) => {
   return {a: true}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)