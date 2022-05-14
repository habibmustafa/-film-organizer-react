import axios from "axios"

export const sortMovies = (name) => {
   return (dispatch) => {
      axios.get(`http://www.omdbapi.com/?s=${name}&apikey=91b17070`)
         .then(({ data }) => {
            dispatch({ type: 'SORT_MOVIES', data: data.Search })
         })
   }
}

export const favoriteMovies = (imdbID, Title, Year) => {
   return {
      type: 'ADD_FAVORITE_FILM',
      payload: {
         imdbID,
         Title,
         Year
      }
   }
}

export const removeFavoriteMovies = (id) => {
   return {
      type: 'REMOVE_FAVORITE_FILM',
      id
   }
}