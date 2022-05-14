const initialState = {
   films: [],
   favoriteFilms: []
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

         let checkArray = newArray.some(item => item.title === action.payload.Title 
            && item.year === action.payload.Year)

         checkArray || newArray.push({title: action.payload.Title, year: action.payload.Year})

         console.log(checkArray);
         console.log(newArray);
         return {
            ...state,
            favoriteFilms: newArray
         }
      }

      default:
         return state
   }

}