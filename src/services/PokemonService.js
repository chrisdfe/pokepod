const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export default {
  fetchAll(params = {}) {
    const { limit = 10, offset = 0 } = params;

    const url = `${BASE_URL}?offset=${offset}&limit=${limit}`;

    return fetch(url).then(response => response.json());
  },

  // TODO -
  // 2) transform results to pair it down to just the fields this app uses
  fetchByName({ name }) {
    return fetch(`${BASE_URL}${name.toLowerCase()}`).then(response => {
      console.log("initial response", response);
      if (response.status === 200) {
        return response.json();
      }

      return {};
    });
  }
};
