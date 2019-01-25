<template>
  <div class="PokemonList">
    <div class="PokemonList__row">
      <div
        class="PokemonList__column"
        v-for="(pokemon, pokemonIndex) in pokemonList"
        :key="pokemonIndex"
      >
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

<style lang="scss">
.PokemonList {
  padding: 1rem 0;
  justify-content: center;
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
  padding: 0.5rem 1rem;

  @media screen and (max-width: 800px) {
    flex-basis: 50%;
  }

  @media screen and (max-width: 600px) {
    flex-basis: 100%;
  }
}

.PokemonList__pagination-wrapper {
  text-align: center;
}
</style>
