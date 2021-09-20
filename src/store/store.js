import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    movies: [{}],
    newMovies: [{}],
    deletedMovies: [{}],
  },
  getters: {
    getMovies: (state) => state.movies
  }
})
