<template>
  <div class="Page Page--index">
    <Hero>
      <h1>Pokedex</h1>

      <!-- TODO - hide until totalCount -->
      <h3>Search {{ totalCount }} pokemon</h3>
    </Hero>

    <PageContent>
      <div class="Page--index__raised-content">
        <!-- TODO - animate total count -->
        <div class="container">
          <SearchBar @search:requested="onPokemonSearchRequested" />
        </div>

        <div class="Page--Index__Loading" v-if="isLoading">Loading</div>

        <PokemonList
          :pokemonList="pokemonDisplayList"
          :show-pagination-button="showPaginationButton"
        >
          <template slot="pagination">
            <div
              class="PokemonList__pagination-wrapper"
              v-if="showPaginationButton"
            >
              <LoadingButton
                :is-loading="isLoading"
                @click="onListPaginationRequested"
              >
                load more
              </LoadingButton>
            </div>
          </template>
        </PokemonList>
      </div>
    </PageContent>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import Hero from "@/components/lib/Hero";
import PageContent from "@/components/lib/PageContent";
import SearchBar from "@/components/lib/SearchBar";
import LoadingButton from "@/components/lib/LoadingButton";

import PokemonList from "@/components/app/pokemon/PokemonList";

export default {
  data() {
    return {
      isLoading: false,
      isSearching: false
    };
  },

  computed: {
    ...mapState("pokemon", ["pokemonList", "currentPokemon", "totalCount"]),

    pokemonDisplayList() {
      if (Object.keys(this.currentPokemon).length) {
        return [this.currentPokemon];
      }

      // TODO - show currentPokemon if it exists
      return this.pokemonList;
    },

    showPaginationButton() {
      // TODO - don't currentPokemon if it exists
      return true;
    }
  },

  methods: {
    ...mapActions("pokemon", ["paginatePokemonList", "fetchByName"]),

    // TODO - rename
    fetchPokemonList() {
      this.isLoading = true;

      this.paginatePokemonList().then(() => {
        this.isLoading = false;
      });
    },

    onPokemonSearchRequested({ value }) {
      this.isSearching = true;
      return this.fetchByName({ name: value }).then(() => {
        this.isSearching = false;
      });
    },

    onListPaginationRequested() {
      return this.fetchPokemonList();
    }
  },

  created() {
    this.fetchPokemonList();
  },

  components: {
    Hero,
    PageContent,
    SearchBar,
    LoadingButton,
    PokemonList
  }
};
</script>

<style>
.Page--index .Hero {
  padding-bottom: 7rem;
}

.Page--index__raised-content {
  background: #f2fafc;
  position: relative;
  top: -3.5rem;
  padding-top: 1rem;
}
</style>
