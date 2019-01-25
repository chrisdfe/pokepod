<template>
  <div class="PokemonListView">
    <div class="PokemonListView__content">
      <h5 class="PokemonListView__id">{{ formattedPokemonId }}</h5>
      <div class="PokemonListView__header">
        <h3 class="PokemonListView__name">{{ formattedName }}</h3>
        <div class="PokemonListView__types">
          <PokemonTypeBadgeList :types="pokemon.types" />
        </div>
      </div>

      <div class="PokemonListView__sprite">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
      </div>
    </div>
    <div class="PokemonListView__stats">
      <PokemonStatsList :statsList="pokemon.stats" />
    </div>
  </div>
</template>

<script>
import _ from "lodash";

import { deslugify } from "@/lib/utils";

import PokemonTypeBadgeList from "@/components/app/pokemon/PokemonTypeBadgeList";
import PokemonStatsList from "@/components/app/pokemon/PokemonStatsList";

export default {
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedName() {
      return deslugify(this.pokemon.name);
    },

    formattedPokemonId() {
      if (!this.pokemon) return;
      const { id } = this.pokemon;

      const targetLength = 3;
      const digitCount = id.toString().length;
      const fillerZeros = _.range(targetLength - digitCount)
        .map(() => "0")
        .join("");
      return `#${fillerZeros}${id}`;
    }
  },
  components: {
    PokemonTypeBadgeList,
    PokemonStatsList
  }
};
</script>

<style lang="scss">
@import "../../../styles/variables.scss";

$pokemon-list-view-accent-border-color: lighten($brand-primary, 35%);

.PokemonListView {
  background: #fff;
  margin-bottom: 1rem;
  overflow: hidden;
}

.PokemonListView__header {
  display: flex;
  align-items: flex-start;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid $pokemon-list-view-accent-border-color;
}

.PokemonListView__name,
.PokemonListView__id {
  padding: 0;
  margin: 0;
}

.PokemonListView__name {
  font-size: 1.7rem;
  font-weight: 600;
}

.PokemonListView__id {
  display: block;
  font-size: 0.7rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.PokemonListView__sprite {
  padding: 3rem;
  text-align: center;
}

.PokemonListView__content {
  padding: 1rem;
}

.PokemonListView__types {
  margin-left: auto;
}

.PokemonListView__stats {
  padding-top: 1rem;
}
</style>
