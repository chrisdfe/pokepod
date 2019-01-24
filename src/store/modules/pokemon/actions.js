import PokemonService from "@/services/PokemonService";
import * as mutationTypes from "./mutation-types";

export default {
  fetchAll({ commit }, params) {
    return PokemonService.fetchAll(params)
      .then(response => {
        const { count, results } = response;
        commit(mutationTypes.POKEMON_TOTAL_COUNT_SET, { count });

        return Promise.all(
          results.map(({ name }) => PokemonService.fetchByName({ name }))
        );
      })
      .then(pokemonList => {
        commit(mutationTypes.POKEMON_LIST_SET, { pokemonList });
        return pokemonList;
      });
  },

  // TODO
  // 1) rename this method to indicate what gets updated in the state
  // 2) transform response
  fetchByName({ commit }, { name }) {
    return PokemonService.fetchByName({ name }).then(response => {
      commit(mutationTypes.CURRENT_POKEMON_SET, { pokemon: response });
      return response;
    });
  }
};
