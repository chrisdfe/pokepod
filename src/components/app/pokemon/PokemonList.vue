<template>
  <div class="PokemonList">
    <div class="PokemonList__row">
      <div class="PokemonList__column" v-for="pokemon in pokemonList">
        <PokemonListView :pokemon="pokemon" />
      </div>
    </div>

    <slot name="pagination" />
  </div>
</template>

<script>
import PokemonListView from "@/components/app/pokemon/PokemonListView";

export default {
  props: {
    pokemonList: {
      type: Array,
      required: true
    }
  },
  methods: {
    onPaginateButtonClick($event) {
      this.$emit("pagination:requested", $event);
    }
  },
  components: {
    PokemonListView
  }
};
</script>

<style>
.PokemonList {
}

.PokemonList__row {
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
}

.PokemonList__column {
  flex: 3;
  flex-basis: 33%;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 1rem;
}

.PokemonList__pagination-wrapper {
  text-align: center;
}
</style>
