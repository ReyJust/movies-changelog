import axios from "axios";


export default async function getMovieId(title) {
  let id = []
  let results = {}

  const options = {
    method: 'GET',
    url: process.env.VUE_APP_IMDB_MOVIE_ID + String(title) + '/',
    headers: {
      'x-rapidapi-host': process.env.VUE_APP_RAPID_API_HOST,
      'x-rapidapi-key': process.env.VUE_APP_RAPID_API_KEY
    }
  };
  await axios.request(options).then((response) => {
    results = response.data.Data;
  })
  for (let result in results) {
    id.push(results[result].imdb_id)
  }

  return id
}