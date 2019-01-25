import * as types from "./mutation-types";

export default {
  [types.CURRENT_POKEMON_SET](state, { pokemon }) {
    state.currentPokemon = pokemon;
  },

  [types.POKEMON_TOTAL_COUNT_SET](state, { count }) {
    state.totalCount = count;
  },

  [types.POKEMON_LIST_SET](state, { pokemonList }) {
    console.log("setting pokemonList to ", pokemonList);
    state.pokemonList = pokemonList;
  },

  [types.POKEMON_LIST_ADD](state, { pokemonList }) {
    console.log("setting pokemonList to ", pokemonList);
    state.pokemonList = state.pokemonList.concat(pokemonList);
  },

  [types.CURRENT_PAGINATION_OFFSET_SET](state, { offset }) {
    state.currentPaginationOffset = offset;
  }
};
