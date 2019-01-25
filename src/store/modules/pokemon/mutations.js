import * as types from "./mutation-types";

export default {
  [types.CURRENT_POKEMON_SET](state, { pokemon }) {
    state.currentPokemon = pokemon;
  },

  [types.POKEMON_TOTAL_COUNT_SET](state, { count }) {
    state.totalCount = count;
  },

  [types.POKEMON_LIST_SET](state, { pokemonList }) {
    state.pokemonList = pokemonList;
  },

  [types.POKEMON_LIST_ADD](state, { pokemonList }) {
    state.pokemonList = state.pokemonList.concat(pokemonList);
  },

  [types.PAGINATION_OFFSET_SET](state, { offset }) {
    state.paginationOffset = offset;
  }
};
