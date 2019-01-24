import PokemonService from "@/services/PokemonService";
import * as mutationTypes from "./mutation-types";

export default {
  // TODO
  // 1) rename this method to indicate what gets updated in the state
  // 2) transform response
  fetchByName({ commit }, { name }) {
    return PokemonService.fetchByName({ name }).then(response => {
      commit("CURRENT_POKEMON_SET", { pokemon: response });
      return response;
    });
  }
};
