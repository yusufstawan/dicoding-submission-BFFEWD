class DataSource {
  static searchFilm(keyword) {
    return fetch(`http://www.omdbapi.com/?apikey=70cbb31d&s=${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((responeJson) => {
        if (responeJson.Search) {
          return Promise.resolve(responeJson.Search);
        } else {
          return Promise.reject(`${keyword} Film tidak ditemukan`);
        }
      });
  }
}

export default DataSource;
