import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

class Movies extends Component {
   // state = {
   //    movies: []
   // }

   // getData = async () => {
   //    const response = await fetch(`http://www.omdbapi.com/?s=flash&apikey=91b17070`)
   //    const data = await response.json()
   //    return data
   // }

   // componentDidMount() {

   //    this.getData().then(data => this.setState({ movies: data.Search }))
   // }

   render() {
      return (
         <>
            <ul className="movies">
               {this.props.movies ? this.props.movies.map((movie, index) => (
                  <li className="movies__item" key={index}>
                     <MovieItem {...movie} />
                  </li>
               )) : (<li>film tapilmadi</li>)}
            </ul>
         </>
      )
   }
}

const mapStateToProps = (state) => {
   return { movies: state.films }
}

export default connect(mapStateToProps)(Movies)