import Vuex from 'vuex'
import apicall from '../wrapper/apicall'

export default new Vuex.Store({
  state: {
    status: {
      searchedMovie: {
        isLoading: false,
      },
    },
    searchedMovie: [],
    movies: [{
      "image": "https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_.jpg",
      "title": "The Hunger Games",
      "year": 2012,
      "synopsis": "synopsis",
      "actors": [
        "Jennifer Lawrence",
        "Josh Hutcherson",
        "Liam Hemsworth"
      ],
      "added_dt": ""
    },
    {
      "image": "https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_.jpg",
      "title": "Cars", "year": 2006,
      "synopsis": "synopsis",
      "actors": [
        "Owen Wilson",
        "Bonnie Hunt",
        "Paul Newman"
      ]
    }],
    newMovies: [{}],
    deletedMovies: [{}],
  },
  getters: {
    getMovies: (state) => state.movies,
    getSearchedMovie: (state) => state.searchedMovie,
    getStatus: (state) => state.status.searchedMovie.isLoading,
  },
  mutations: {
    setStatus(state, status) {
      state.status.searchedMovie.isLoading = status
    },
    setMovie(state, movie) {
      state.movies.push(movie)
      state.searchedMovie = []
    },
    setSearchMovie(state, response) {
      let movies = []
      let results = response.results
      let actors = []

      for (let movie in results) {
        //Keep results which have a title
        if (results[movie].titleType) {
          //Keep results which are a movie or a serie
          if ((results[movie].titleType === "tvSeries") || (results[movie].titleType === "movie")) {
            movies.push({
              image: (results[movie].image ? results[movie].image.url : 'placeholder'),
              title: results[movie].title,
              year: results[movie].year,
            })
            //Fill the casting
            let casting = results[movie].principals
            for (let actor in casting) {
              actors.push(casting[actor].name)
            }
            movies[movies.length - 1]['actors'] = actors
            actors = []
          }
        }
      }
      state.searchedMovie = movies
    },
  },
  actions: {
    async searchMovie({ commit }, title) {
      const response = await apicall(title)
      commit('setSearchMovie', response)
      commit("setStatus", true);
    },
    setMovie({ commit }, movie) {
      commit('setMovie', movie)
      commit('setStatus', false)
    }
  }
})
