const initialState = {
   films: [],
   favoriteFilms: [],
   activeBtn: false
}

export default function reducer(state = initialState, action) {

   switch (action.type) {
      case 'SORT_MOVIES':
         return {
            ...state,
            films: action.data
         }
      case 'ADD_FAVORITE_FILM': {
         let newArray = state.favoriteFilms.slice()
         let checkArray = newArray.some(item => item.id === action.payload.imdbID)

         checkArray || newArray.push({
            id: action.payload.imdbID, title: action.payload.Title, year: action.payload.Year
         })
         return {
            ...state,
            favoriteFilms: newArray
         }
      }

      case 'REMOVE_FAVORITE_FILM': {
         let newArray = state.favoriteFilms.slice()
         for (let i = 0; i < newArray.length; ++i) {
            if(newArray[i].id === action.id) {
               newArray.splice(i, 1)
               break
            }
         }
         return {
            ...state,
            favoriteFilms: newArray
         }
      }

      default:
         return state
   }

}