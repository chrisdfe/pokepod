<template>
  <div class="Page Page--index">
    <Hero>
      <h1>Poképod</h1>
      <h3>Explore all <AnimatedCounter :value="totalCount" /> Pokémon</h3>
    </Hero>

    <PageContent>
      <div class="Page--index__raised-content">
        <div class="Page--index__search-bar">
          <SearchBar
            :value="currentPokemonSearchTerm"
            :placeholder="'e.g probopass'"
            @search:requested="onPokemonSearchRequested"
            @clear:requested="onPokemonSearchClearRequested"
          />
        </div>

        <div class="PokemonSearchResults" v-show="showSearchResults">
          <div class="container">
            <h2>Search Results</h2>
          </div>

          <div class="PokemonSearchResults__content-wrapper">
            <div class="PokemonSearchResults__content">
              <PokemonList
                v-if="currentPokemonIsPresent"
                :pokemonList="[currentPokemon]"
              >
              </PokemonList>
              <div class="container" v-else>
                <h3>No results for "{{ currentPokemonSearchTerm }}" :(</h3>
              </div>
            </div>
          </div>
        </div>

        <div class="PokemonBrowse" v-show="!showSearchResults">
          <div class="container">
            <h2>Browse Pokémon</h2>
          </div>

          <LoadingOverlay :is-loading="isLoading">
            <PokemonList :pokemonList="pokemonList" />
          </LoadingOverlay>

          <div class="PaginationWrapper">
            <Pagination
              v-if="pokemonList.length"
              :currentOffset="paginationOffset"
              :totalItemCount="totalCount"
              :perPage="paginationPerPage"
              @next-page:requested="fetchNextPage"
              @prev-page:requested="fetchPrevPage"
            />
          </div>
        </div>
      </div>
    </PageContent>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import _ from "lodash";

import CloseIcon from "@/assets/icons/close.svg";

import Hero from "@/components/lib/Hero";
import PageContent from "@/components/lib/PageContent";
import SearchBar from "@/components/lib/SearchBar";
import AnimatedCounter from "@/components/lib/AnimatedCounter";
import Pagination from "@/components/lib/Pagination";

import LoadingOverlay from "@/components/lib/LoadingOverlay";

import PokemonList from "@/components/app/pokemon/PokemonList";

export default {
  data() {
    return {
      currentPokemonSearchTerm: "",
      isLoading: false,
      isSearching: false,
      showSearchResults: false
    };
  },

  computed: {
    ...mapState("pokemon", [
      "pokemonList",
      "currentPokemon",
      "paginationOffset",
      "totalCount",
      "paginationPerPage"
    ]),

    currentPokemonIsPresent() {
      return !_.isEmpty(this.currentPokemon);
    }
  },

  methods: {
    ...mapActions("pokemon", [
      "paginatePokemonListCurrent",
      "paginatePokemonListNext",
      "paginatePokemonListPrev",
      "fetchCurrentPokemonByName"
    ]),

    loadingStateWhile(operation) {
      this.isLoading = true;

      operation
        .then(results => {
          this.isLoading = false;
          return results;
        })
        .catch(err => {
          this.isLoading = false;
          throw err;
        });
    },

    fetchCurrentPage() {
      this.loadingStateWhile(this.paginatePokemonListCurrent());
    },

    fetchNextPage() {
      this.loadingStateWhile(this.paginatePokemonListNext());
    },

    fetchPrevPage() {
      this.loadingStateWhile(this.paginatePokemonListPrev());
    },

    clearPokemonSearch() {
      this.isSearching = false;
      this.showSearchResults = false;
      this.currentPokemonSearchTerm = "";
    },

    onPokemonSearchClearRequested() {
      this.clearPokemonSearch();
    },

    onPokemonSearchRequested({ value }) {
      this.currentPokemonSearchTerm = value;

      if (value === "") {
        this.clearPokemonSearch();
      } else {
        this.isSearching = true;
        return this.fetchCurrentPokemonByName({ name: value }).then(() => {
          this.isSearching = false;
          this.showSearchResults = true;
        });
      }
    }
  },

  created() {
    this.fetchCurrentPage();
  },

  components: {
    Hero,
    PageContent,
    SearchBar,
    PokemonList,
    AnimatedCounter,
    LoadingOverlay,
    CloseIcon,
    Pagination
  }
};
</script>

<style lang="scss">
@import "../../styles/variables";

.Page--index {
  .Hero {
    .AnimatedCounter {
      color: darken($brand-primary, 10%);
    }
  }

  .PageContent {
    min-height: 700px;
  }

  .PokemonSearchResults,
  .PokemonBrowse {
    padding: 1rem 0;
  }
}

.Page--index__raised-content {
  // background: $cool-grey;
  position: relative;
  top: -3.9rem;
  padding-top: 1rem;
}

.Page--index__search-bar {
  // padding: 0 1rem;
}
</style>
