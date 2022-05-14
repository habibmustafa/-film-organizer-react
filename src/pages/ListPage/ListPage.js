import React from 'react';
import { connect } from 'react-redux';
import './ListPage.css';

// "https://www.imdb.com/title/tt0068646/"

const ListPage = ({ movies }) => {
   return (
      <div className="list-page">
         <h1 className="list-page__title">Мой список</h1>
         <ul>
            {movies.map((item) => {
               return (
                  <li key={item.id}>
                     <a target="_blank" rel="noopener noreferrer"
                        href={`https://www.imdb.com/title/${item.id}/`}
                     >
                        {item.title} ({item.year})
                     </a>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}

const mapStateToProps = state => {
   return { movies: state.favoriteFilms }
}

export default connect(mapStateToProps)(ListPage);