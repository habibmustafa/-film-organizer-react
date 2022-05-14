import axios from "axios"

export const favoriteMovies = (Title, Year) => {
   return {
      type: 'ADD_FAVORITE_FILM',
      payload: {
         Title,
         Year
      }
   }
}

export const sortMovies = (name) => {
   return (dispatch) => {
      axios.get(`http://www.omdbapi.com/?s=${name}&apikey=91b17070`)
         .then(({ data }) => {
            dispatch({ type: 'SORT_MOVIES', data: data.Search })
         })
   }
}