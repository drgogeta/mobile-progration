const BASE_API = 'http://ywhrnva2y5pnjur4n-mock.stoplight-proxy.io';

class Api {

  async getSuggestion() {
    const url = `${BASE_API}/movie_suggestions`
    const query = await fetch(url);
    const { data } = await query.json();
    return data.movies
  }

  async getMovies() {
    const url = `${BASE_API}/list_movies`
    const query = await fetch(url);
    const { data } = await query.json();
    return data.movies
  }

}

export default new Api();