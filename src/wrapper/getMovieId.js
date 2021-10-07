import axios from "axios";
import getMovieData from "./getMovieData";


export default async function getMovieId(title) {
  const options = {
    method: 'GET',
    url: process.env.VUE_APP_IMDB_MOVIE_ID + String(title) + '/',
    headers: {
      'x-rapidapi-host': process.env.VUE_APP_RAPID_API_HOST,
      'x-rapidapi-key': process.env.VUE_APP_RAPID_API_KEY
    }
  };
  let results = {}
  let movieList = []
  await axios.request(options).then((response) => {
    results = response.data;
  })

  for (let result in results) {
    let film = getMovieData(results.Data[result].imdb_id)
    movieList.push(film)
  }



}

