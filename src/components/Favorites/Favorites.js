import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { listPage, removeFavoriteMovies } from '../../redux/action';
import './Favorites.css';

class Favorites extends Component {
   state = {
      inputValue: '',
      active: false,
      isPending: false,
      id: ''
   }

   clickBtn = () => {

      this.setState({ isPending: true })
      const info = {
         title: this.state.inputValue,
         movies: this.props.movies.map(movie => movie.id)
      }
      fetch('https://acb-api.algoritmika.org/api/movies/list', {
         method: 'POST',
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify(info)
      })
      .then(res=> res.json())
      .then(data => {
         this.setState({ active: true, isPending: false, id: data.id })
      })
      
   }

   render() {
      const { inputValue, active, isPending } = this.state
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

            {!active && <button
               onClick={this.clickBtn}
               disabled={this.props.movies.length === 0 || !inputValue || isPending}
               type="button" className="favorites__save">
               {!isPending ? "Сохранить список" : "Loading.."}
            </button>}
            {active && <Link onClick={() => this.props.listPage(this.state.id)} to="/list">Перейти к списку</Link>}
         </div>
      );
   }
}

const mapStateToProps = state => {
   return { movies: state.favoriteFilms }
}

const mapDispatchToProps = dispatch => {
   return {
      removeMovie: (id) => { dispatch(removeFavoriteMovies(id)) },
      listPage: (id) => {dispatch(listPage(id))}
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Favorites)