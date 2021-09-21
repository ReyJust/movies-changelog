import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    movies: [{
      'title': 'title1'
    }, {
      'title': 'title3'
    }, {
      'title': 'title2'
    }, {
      'title': 'title1'
    }, {
      'title': 'title3'
    }, {
      'title': 'title2'
    }, {
      'title': 'title1'
    }, {
      'title': 'title3'
    }, {
      'title': 'title2'
    }],
    newMovies: [{}],
    deletedMovies: [{}],
  },
  getters: {
    getMovies: (state) => state.movies
  }
})
