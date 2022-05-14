import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieItem.css';
import { favoriteMovies } from "../../redux/action"

class MovieItem extends Component {
   render() {
      const { Title, Year, Poster } = this.props;
      return (
         <article className="movie-item">
            <img className="movie-item__poster" src={Poster} alt={Title} />
            <div className="movie-item__info">
               <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
               <button onClick={() => this.props.favoriteMovies(Title, Year)}
               type="button" className="movie-item__add-button">Добавить в список</button>
            </div>
         </article>
      );
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      favoriteMovies: (title, year) => { dispatch(favoriteMovies(title, year)) }
   }
}

export default connect(undefined, mapDispatchToProps)(MovieItem);