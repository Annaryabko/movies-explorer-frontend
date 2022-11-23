import {FILMS_URL} from './constants';

export function getAllMovies() {
    return fetch(FILMS_URL)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject('Ошибка сервера');
            }
        });
}
