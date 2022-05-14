const initialState = {
   films: []
}

export default function reducer(state = initialState, action) {

   switch (action.type) {
      case 'SORT_MOVIES':
         // let newFilms = state.films.slice()
         // if(action.id === "1")
         //    newFilms = ["Success"]

         
         return {
            ...state,
            films: action.payload
         }

      default:
         return state
   }
}


// const getData = async () => {
//    const response = await fetch(`http://www.omdbapi.com/?s=${action.id}&apikey=91b17070`)
//    const data = await response.json()
//    console.log(data.Search);
//    return data
// }
// getData().then(data => newFilms = data.Search)
// console.log(newFilms);