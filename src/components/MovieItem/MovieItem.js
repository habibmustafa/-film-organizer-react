import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieItem.css';
import { favoriteMovies } from "../../redux/action"

class MovieItem extends Component {
   render() {
      const { Title, Year, Poster, imdbID } = this.props;
      return (
         <article className="movie-item">
            <img className="movie-item__poster" src={Poster} alt={Title} />
            <div className="movie-item__info">
               <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
               <button onClick={() => this.props.favoriteMovies(imdbID, Title, Year)}
               type="button" className="movie-item__add-button">Добавить в список</button>
            </div>
         </article>
      );
   }
}

// const mapStateToProps = (state) => {
//    return {
//       list: state.list
//    }
// }

const mapDispatchToProps = (dispatch) => {
   return {
      favoriteMovies: (id, title, year) => { dispatch(favoriteMovies(id, title, year)) }
   }
}

export default connect(undefined, mapDispatchToProps)(MovieItem);