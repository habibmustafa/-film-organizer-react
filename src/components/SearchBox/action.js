// export default function sortMovies(id) {
//    return {
//       type: 'SORT_MOVIES', id
//    }
// }
import axios from "axios"

export const sortMovies = (name) => {
   return (dispatch) => {
      axios.get(`http://www.omdbapi.com/?s=${name}&apikey=91b17070`)
      .then(({ data }) => {
         dispatch({ type: 'SORT_MOVIES', payload: data.Search })
      })
   }
}