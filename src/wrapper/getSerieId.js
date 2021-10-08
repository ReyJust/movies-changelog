import axios from "axios";

export default async function getSerieId(title) {
  let id = []
  let results = {}

  const options = {
    method: 'GET',
    url: process.env.VUE_APP_IMDB_SERIE_ID + String(title) + '/',
    headers: {
      'x-rapidapi-host': process.env.VUE_APP_RAPID_API_HOST,
      'x-rapidapi-key': process.env.VUE_APP_RAPID_API_KEY
    }
  };
  await axios.request(options).then((response) => {
    results = response.data.Result;
    console.log(results)
  })
  for (let result in results) {
    id.push(results[result].imdb_id)
  }

  return id
}