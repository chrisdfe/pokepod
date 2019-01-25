<template>
  <div class="PokemonListView">
    <div class="PokemonListView__header">
      <h3 class="PokemonListView__name">{{ pokemon.name }}</h3>
      <strong class="PokemonListView__id">{{ formattedPokemonId }}</strong>
    </div>

    <PokemonTypeBadgeList :types="pokemon.types" />

    <div class="PokemonListView__sprite">
      <img :src="pokemon.sprites.front_default" alt="" />
    </div>

    <!--
    <p>
      <strong>Height:&nbsp;</strong>
      <span>{{ pokemon.height }}</span>
    </p>
    -->

    <!--
    <p>
      <strong>Abilities:&nbsp;</strong>
      <span v-for="(ability, abilityIndex) in pokemon.abilities">
        <span>{{ ability.ability.name }}</span>
        <span v-if="abilityIndex < pokemon.abilities.length - 1">,&nbsp;</span>
      </span>
    </p>

    <p>
      <strong>stats:&nbsp;</strong>
      <span v-for="(stat, statIndex) in pokemon.stats">
        <span>{{ stat.stat.name }}: {{ stat.base_stat }}</span>
        <span v-if="statIndex < pokemon.stats.length - 1">,&nbsp;</span>
      </span>
    </p>
    -->
  </div>
</template>

<script>
import _ from "lodash";

import PokemonTypeBadgeList from "@/components/app/pokemon/PokemonTypeBadgeList";

export default {
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },
  computed: {
    // TODO - put this in pokemon transform function instead
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
    PokemonTypeBadgeList
  }
};
</script>

<style>
.PokemonListView {
  border: 1px solid #111;
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: 0.2s background-color;
}

.PokemonListView:hover {
  background-color: #fff;
}

.PokemonListView__header {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.PokemonListView__name,
.PokemonListView__id {
  padding: 0;
  margin: 0;
}

.PokemonListView__name {
  font-size: 2rem;
  letter-spacing: 0.02em;
}

.PokemonListView__id {
  margin-left: auto;
}

.PokemonListView__sprite {
  padding: 3rem;
  text-align: center;
}
</style>
