<template>
  <div class="Page Page--index">
    <Hero>
      <h1>pokécyclopedia</h1>

      <h3>explore all <AnimatedCounter :value="totalCount" /> pokémon</h3>
    </Hero>

    <PageContent>
      <div class="Page--index__raised-content">
        <!-- TODO - animate total count -->
        <div class="container">
          <SearchBar @search:requested="onPokemonSearchRequested" />
        </div>

        <div class="Page--Index__Loading" v-if="isLoading || isSearching">
          <div class="PokeballWrapper">
            <PokeballIcon />
          </div>
        </div>
        <div class="Page--index__search-results" v-if="showSearchView">
          <div class="container">
            <h2>Search Results</h2>
          </div>
          <PokemonList
            v-if="currentPokemonIsPresent"
            :pokemonList="[currentPokemon]"
          >
          </PokemonList>
          <div class="container" v-else>
            <h3>No results for {{ currentPokemonSearchTerm }} :(</h3>
          </div>
        </div>

        <div class="Page--Index__browse" v-else>
          <div class="container">
            <h2>Browse Pokemon</h2>
          </div>
          <PokemonList :pokemonList="pokemonList">
            <template slot="pagination">
              <div class="PokemonList__pagination-wrapper">
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
      </div>
    </PageContent>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import PokeballIcon from "@/assets/icons/pokeball.svg";

import Hero from "@/components/lib/Hero";
import PageContent from "@/components/lib/PageContent";
import SearchBar from "@/components/lib/SearchBar";
import LoadingButton from "@/components/lib/LoadingButton";
import AnimatedCounter from "@/components/lib/AnimatedCounter";

import PokemonList from "@/components/app/pokemon/PokemonList";

export default {
  data() {
    return {
      currentPokemonSearchTerm: "",
      isLoading: false,
      isSearching: false,
      showSearchView: false
    };
  },

  computed: {
    ...mapState("pokemon", ["pokemonList", "currentPokemon", "totalCount"]),

    currentPokemonIsPresent() {
      return Object.keys(this.currentPokemon).length;
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
      this.currentPokemonSearchTerm = value;

      if (value === "") {
        this.isSearching = false;
        this.showSearchView = false;
      } else {
        return this.fetchByName({ name: value }).then(() => {
          this.isSearching = false;
          this.showSearchView = true;
        });
      }
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
    PokemonList,
    AnimatedCounter,
    PokeballIcon
  }
};
</script>

<style>
.Page--index .Hero {
  padding-bottom: 7rem;
}

.Page--index .Hero .AnimatedCounter {
  color: #fff;
}

.Page--index__raised-content {
  background: #f2fafc;
  position: relative;
  top: -3.5rem;
  padding-top: 1rem;
}

@keyframes spinning-pokeball {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.PokeballWrapper {
  width: 64px;
  height: 64px;
  margin: 0 auto;
  animation: spinning-pokeball 2s linear infinite;
}
</style>
