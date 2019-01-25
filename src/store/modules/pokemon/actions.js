import PokemonService from "@/services/PokemonService";
import * as mutationTypes from "./mutation-types";

export default {
  setPaginationOffset({ commit }, params) {
    return Promise.resolve().then(() => {
      commit(mutationTypes.CURRENT_PAGINATION_OFFSET_SET, params);
    });
  },

  incrementPaginationOffset({ state, commit }) {
    return Promise.resolve().then(() => {
      // TODO - use a config variable for '10'
      commit(mutationTypes.CURRENT_PAGINATION_OFFSET_SET, {
        offset: state.currentPaginationOffset + 10
      });

      return state.currentPaginationOffset;
    });
  },

  setPokemonList({ commit }, params) {
    return Promise.resolve().then(() => {
      commit(mutationTypes.POKEMON_LIST_SET, params);
    });
  },

  addToPokemonList({ state, commit }, params) {
    return Promise.resolve().then(() => {
      commit(mutationTypes.POKEMON_LIST_ADD, params);
      return state.pokemonList;
    });
  },

  paginatePokemonList({ state, dispatch, commit }) {
    const offset = state.currentPaginationOffset;

    PokemonService.fetchAll({ offset })
      .then(response => {
        const { count, results } = response;

        commit(mutationTypes.POKEMON_TOTAL_COUNT_SET, { count });

        return Promise.all(
          results.map(({ name }) => PokemonService.fetchByName({ name }))
        );
      })
      .then(pokemonList => dispatch("addToPokemonList", { pokemonList }))
      .then(() => dispatch("incrementPaginationOffset"));
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
