<template>
  <div class="Page Page--index">
    <Hero>
      <h1>Pokedex</h1>

      <SearchBar @search:requested="onPokemonSearchRequested" />
    </Hero>

    <PageContent>
      <div class="Page--Index__SearchResultsBox" v-if="showSearchResults">
        <div class="Page--Index__Searching" v-if="isSearching">Searching</div>
        <div v-else>
          <h3>Search Results:</h3>

          <PokemonListView v-if="currentPokemon" :pokemon="currentPokemon" />
          <div v-else><h3>No pokemon found</h3></div>
        </div>
      </div>

      <div class="Page--Index__BrowseBox">
        <h3>Browse:</h3>

        <div class="Page--Index__Loading" v-if="isLoading">Loading</div>
        <div v-else v-for="pokemon in pokemonList">
          <PokemonListView :pokemon="pokemon" />
        </div>
      </div>
    </PageContent>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import Hero from "@/components/lib/Hero";
import PageContent from "@/components/lib/PageContent";
import SearchBar from "@/components/lib/SearchBar";

import PokemonListView from "@/components/app/pokemon/PokemonListView";

export default {
  data() {
    return {
      isLoading: false,
      isSearching: false,
      currentPokemonSearchTerm: ""
    };
  },

  computed: {
    ...mapState("pokemon", ["pokemonList", "currentPokemon"]),

    showSearchResults() {
      return Object.keys(this.currentPokemon).length;
    }
  },

  methods: {
    ...mapActions("pokemon", ["fetchAll", "fetchByName"]),

    fetchPokemonList() {
      this.isLoading = true;

      this.fetchAll().then(() => {
        this.isLoading = false;
      });
    },

    onPokemonSearchRequested({ value }) {
      this.isSearching = true;
      return this.fetchByName({ name: value }).then(() => {
        this.isSearching = false;
      });
    }
  },

  created() {
    this.fetchPokemonList();
  },

  components: {
    Hero,
    PageContent,
    SearchBar,
    PokemonListView
  }
};
</script>
