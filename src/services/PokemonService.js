const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export default {
  fetchAll(params = {}) {
    const { limit = 10, offset = 0 } = params;

    const url = `${BASE_URL}?offset=${offset}&limit=${limit}`;

    return fetch(url).then(response => response.json());
  },

  fetchByName({ name }) {
    return fetch(`${BASE_URL}${name.toLowerCase()}`).then(response => {
      if (response.status === 200) {
        return response.json();
      }

      return {};
    });
  }
};
