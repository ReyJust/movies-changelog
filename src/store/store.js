import Vuex from 'vuex'
import apicall from '../wrapper/apicall'

export default new Vuex.Store({
  state: {
    status: {
      searchedMovie: {
        isLoading: false,
      },
    },
    searchedMovie: {},
    movies: [{ "image": "https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_.jpg", "title": "The Hunger Games", "year": 2012, "synopsis": "synopsis", "actors": [{ "disambiguation": "III", "id": "/name/nm2225369/", "legacyNameText": "Lawrence, Jennifer (III)", "name": "Jennifer Lawrence", "billing": 3, "category": "actress", "characters": ["Katniss Everdeen"], "roles": [{ "character": "Katniss Everdeen", "characterId": "/character/ch0242701/" }] }, { "id": "/name/nm1242688/", "legacyNameText": "Hutcherson, Josh", "name": "Josh Hutcherson", "billing": 11, "category": "actor", "characters": ["Peeta Mellark"], "roles": [{ "character": "Peeta Mellark", "characterId": "/character/ch0239974/" }] }, { "id": "/name/nm2955013/", "legacyNameText": "Hemsworth, Liam", "name": "Liam Hemsworth", "billing": 5, "category": "actor", "characters": ["Gale Hawthorne"], "roles": [{ "character": "Gale Hawthorne", "characterId": "/character/ch0244190/" }] }] }, { "image": "https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_.jpg", "title": "Cars", "year": 2006, "synopsis": "synopsis", "actors": [{ "disambiguation": "I", "id": "/name/nm0005562/", "legacyNameText": "Wilson, Owen (I)", "name": "Owen Wilson", "attr": ["voice"], "billing": 1, "category": "actor", "characters": ["Lightning McQueen"], "roles": [{ "character": "Lightning McQueen", "characterId": "/character/ch0009186/" }] }, { "disambiguation": "I", "id": "/name/nm0001372/", "legacyNameText": "Hunt, Bonnie (I)", "name": "Bonnie Hunt", "attr": ["voice"], "billing": 3, "category": "actress", "characters": ["Sally Carrera"], "roles": [{ "character": "Sally Carrera", "characterId": "/character/ch0009191/" }] }, { "disambiguation": "I", "id": "/name/nm0000056/", "legacyNameText": "Newman, Paul (I)", "name": "Paul Newman", "attr": ["voice"], "billing": 2, "category": "actor", "characters": ["Doc Hudson"], "roles": [{ "character": "Doc Hudson", "characterId": "/character/ch0009187/" }] }] }, { "image": "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg", "title": "Deadpool", "year": 2016, "synopsis": "synopsis", "actors": [{ "disambiguation": "I", "id": "/name/nm0005351/", "legacyNameText": "Reynolds, Ryan (I)", "name": "Ryan Reynolds", "billing": 1, "category": "actor", "characters": ["Wade", "Deadpool"], "roles": [{ "character": "Wade", "characterId": "/character/ch0526914/" }, { "character": "Deadpool", "characterId": "/character/ch0027050/" }] }, { "id": "/name/nm1072555/", "legacyNameText": "Baccarin, Morena", "name": "Morena Baccarin", "billing": 15, "category": "actress", "characters": ["Vanessa"], "roles": [{ "character": "Vanessa", "characterId": "/character/ch0513108/" }] }, { "disambiguation": "I", "id": "/name/nm2554352/", "legacyNameText": "Miller, T.J. (I)", "name": "T.J. Miller", "billing": 13, "category": "actor", "characters": ["Weasel"], "roles": [{ "character": "Weasel", "characterId": "/character/ch0086757/" }] }] }],
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
    setMovie(state) {
      state.movies.push(state.searchedMovie)
      state.searchedMovie = {}
    },
    setSearchMovie(state, response) {
      let movie = {
        image: response.results[0].image.url,
        title: response.results[0].title,
        year: response.results[0].year,
        synopsis: 'synopsis',
        // actors: response.results[0].principals
      }
      state.searchedMovie = movie
    },
  },
  actions: {
    async searchMovie({ commit }, title) {
      const response = await apicall(title)
      commit('setSearchMovie', response)
      commit("setStatus", true);
    },
    setMovie({ commit }) {
      commit('setMovie')
      commit('setStatus', false)
    }
  }
})
