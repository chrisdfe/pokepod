import * as types from "./mutation-types";

export default {
  [types.CURRENT_POKEMON_SET](state, { pokemon }) {
    console.log("setting currentPokemon to ", pokemon);
    state.currentPokemon = pokemon;
  }
};
