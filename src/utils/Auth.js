import { BASE_URL } from "./constants";

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
  })
  .then((response) => {
    if (response.ok) {
        return response.json();
    } else {
      const error= new Error('Something went wrong');
      error.code = response.status;
      throw error;
    }
  });
}; 


export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password, email})
    })
    .then((response) => {
      if (response.status === 200) {
          return response.json();
      } else {
          throw new Error('Something went wrong');
      }
    })
    .then((data) => {
        return data.token;
    });
  };

  export const logout = () => {
    return fetch(`${BASE_URL}/signout`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if (response.status === 200) {
          return response.json();
      } else {
          throw new Error('Something went wrong');
      }
    })
  };