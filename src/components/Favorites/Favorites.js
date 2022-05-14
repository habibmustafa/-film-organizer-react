import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Favorites.css';


class Favorites extends Component {

   render() {
      return (
         <div className="favorites">
            <input placeholder="Новый список" className="favorites__name" />
            <ul className="favorites__list">
               {this.props.movies.map((item, index) => {
                  return <li key={index}>{item.title} {item.year}</li>;
               })}
            </ul>
            <button
               type="button"
               className="favorites__save"
            >
               Сохранить список
            </button>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return { movies: state.favoriteFilms }
}


export default connect(mapStateToProps)(Favorites)