import axios from "axios";

export default async function dbCall() {
  const options = {
    method: 'POST',
    url: process.env.VUE_APP_DB_URL,
    headers: {
      'authorization': process.env.VUE_APP_DB_API_HEADER,
    },
    data: {
      query:
        `mutation CreateAMovie {
        createMovies(data: {
          image: "https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_.jpg",
          title: "The Hunger Games",
          year: 2012,
          synopsis: "synopsis",
            
            added_dt: "2021-01-02"
          }) {
            image
            title
            year
            synopsis
          }
        }`
    }
  }

  let result = {}
  await axios.request(options).then((response) => {
    result = response.data;
  })
  return result
}