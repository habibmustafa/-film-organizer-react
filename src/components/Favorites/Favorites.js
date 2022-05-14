import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { removeFavoriteMovies } from '../../redux/action';
import './Favorites.css';


class Favorites extends Component {
   state = {
      inputValue: '',
      active: false
   }

   render() {
      const {inputValue, active} = this.state
      return (
         <div className="favorites">
            <input value={inputValue}
               onChange={(e) => this.setState({ inputValue: e.target.value })}
               placeholder="Новый список" className="favorites__name"
               disabled={active && true}
            />
            <ul className="favorites__list">
               {this.props.movies.map((item, index) => (
                  <li key={index}>
                     <p>{item.title} ({item.year})</p>
                     {active || <button onClick={() => this.props.removeMovie(item.id)}>X</button>}
                  </li>
               ))}
            </ul>
            
               {active || <button
                  onClick={() => this.setState({active: true})}
                  disabled={this.props.movies.length === 0 || !inputValue}
                  type="button" className="favorites__save">
                  Сохранить список
               </button>}
               {active && <Link to="/list">Перейти к списку</Link>}
         </div>
      );
   }
}

const mapStateToProps = state => {
   return { movies: state.favoriteFilms }
}

const mapDispatchToProps = dispatch => {
   return {
      removeMovie: (id) => { dispatch(removeFavoriteMovies(id)) }
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Favorites)