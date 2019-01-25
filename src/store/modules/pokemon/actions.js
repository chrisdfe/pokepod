import PokemonService from "@/services/PokemonService";
import * as mutationTypes from "./mutation-types";

export default {
  setPaginationOffset({ commit }, params) {
    return Promise.resolve().then(() => {
      commit(mutationTypes.PAGINATION_OFFSET_SET, params);
    });
  },

  incrementPaginationOffset({ state, commit }) {
    return Promise.resolve().then(() => {
      commit(mutationTypes.PAGINATION_OFFSET_SET, {
        offset: state.paginationOffset + state.paginationPerPage
      });

      return state.paginationOffset;
    });
  },

  decrementPaginationOffset({ state, commit }) {
    return Promise.resolve().then(() => {
      commit(mutationTypes.PAGINATION_OFFSET_SET, {
        offset: state.paginationOffset - state.paginationPerPage
      });

      return state.paginationOffset;
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

  paginatePokemonListCurrent({ state, dispatch, commit }) {
    const offset = state.paginationOffset;

    return PokemonService.fetchAll({ offset })
      .then(response => {
        const { count, results } = response;

        commit(mutationTypes.POKEMON_TOTAL_COUNT_SET, { count });

        return Promise.all(
          results.map(({ name }) => PokemonService.fetchByName({ name }))
        );
      })
      .then(pokemonList => dispatch("setPokemonList", { pokemonList }));
  },

  paginatePokemonListNext({ dispatch }) {
    return Promise.resolve()
      .then(() => dispatch("incrementPaginationOffset"))
      .then(() => dispatch("paginatePokemonListCurrent"));
  },

  paginatePokemonListPrev({ dispatch }) {
    return Promise.resolve()
      .then(() => dispatch("decrementPaginationOffset"))
      .then(() => dispatch("paginatePokemonListCurrent"));
  },

  fetchCurrentPokemonByName({ commit }, { name }) {
    return PokemonService.fetchByName({ name }).then(response => {
      commit(mutationTypes.CURRENT_POKEMON_SET, { pokemon: response });
      return response;
    });
  }
};
