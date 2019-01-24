const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export default {
  fetchAll(params) {
    return fetch(`${BASE_URL}`).then(response => response.json());
  },

  // TODO - handle 404
  fetchByName({ name }) {
    return fetch(`${BASE_URL}${name}`).then(response => {
      console.log("response", response);
      return response.json();
    });
  }
};
