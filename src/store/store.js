import Vuex from 'vuex'
import apicall from '../wrapper/apicall'

export default new Vuex.Store({
  state: {
    movies: [{
      image: 'bullshitwfewdwe',
      title: 'title1',
      year: 2000,
      synopsis: 'NA',
      actors: {}
    }, {
      image: 'bullshitwfewdwe',
      title: 'title19',
      year: 2013,
      synopsis: 'NA',
      actors: {}
    }, {
      image: 'bullshitwfewdwe',
      title: 'title2',
      year: 2012,
      synopsis: 'NA',
      actors: {}
    }],
    newMovies: [{}],
    deletedMovies: [{}],
  },
  getters: {
    getMovies: (state) => state.movies
  },
  mutations: {
    setMovie(state, response) {
      let movie = {
        image: response.results[0].image.url,
        title: response.results[0].title,
        year: response.results[0].year,
        synopsis: 'synopsis',
        actors: response.results[0].principals
      }
      state.movies.push(movie)
    }
  },
  actions: {
    async setMovies() {
      await apicall()
    }

  }
})
