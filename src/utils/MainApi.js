// setUserInfo saveMovieCard deleteMovieCard getSavedMovies 
import { BASE_FILMS_URL, BASE_URL } from "./constants";

export class Api {
    constructor(options) {
      this._options = options;
    }
  
    _makeRequest(url, method, body) {
      const fetchOptions = {
        method,
        credentials: 'include',
        headers: this._options.headers,
      };
      if (body) {
        fetchOptions.body = JSON.stringify(body);
      }
  
      return fetch(`${this._options.baseUrl}${url}`, fetchOptions).then((res) => {
        if (res.ok) {
          return res.json().then(data => data.data);
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
    }

    saveMovie(data) {
        return this._makeRequest("/movies", "POST", {
            country: data.country.slice(0, 30),
            director: data.director,
            duration: data.duration,
            year: data.year,
            description: data.description.slice(0, 30),
            image: BASE_FILMS_URL + data.image.formats.thumbnail.url,
            trailerLink: data.trailerLink,
            thumbnail: BASE_FILMS_URL + data.image.formats.thumbnail.url,
            movieId: data.id,
            nameRU:data.nameRU,
            nameEN: data.nameEN,
        });
    }

    deleteMovie(movieID) {
        return this._makeRequest(`/movies/${movieID}`, "DELETE");
    }

    getMovies() {
        return this._makeRequest("/movies", "GET");
    }

    getUser() {
      return this._makeRequest("/users/me", "GET");
    }

    editUser(data) {
        return this._makeRequest("/users/me", "PATCH", {
          name: data.name,
          email: data.email,
        });
    }


  }
  
  export const api = new Api({
    baseUrl: BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });
  