import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

class Movies extends Component {
   
   render() {
      return (
         <>
            <ul className="movies">
               {this.props.movies ? this.props.movies.map((movie) => (
                  <li className="movies__item" key={movie.imdbID}>
                     <MovieItem {...movie} />
                  </li>
               )) : (<li>film tapılmadı..</li>)}
            </ul>
         </>
      )
   }
}

const mapStateToProps = (state) => {
   return { movies: state.films }
}

export default connect(mapStateToProps)(Movies)