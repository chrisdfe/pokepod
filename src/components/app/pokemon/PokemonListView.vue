<template>
  <div class="PokemonListView">
    <h3>{{ pokemon.name }}</h3>
    <h4>Height: {{ pokemon.height }}</h4>

    <p>
      <strong>type:&nbsp;</strong>
      <span v-for="(type, typeIndex) in pokemon.types">
        <span>{{ type.type.name }}</span>
        <span v-if="typeIndex < pokemon.types.length - 1">,&nbsp;</span>
      </span>
    </p>

    <p>
      <strong>abilities:&nbsp;</strong>
      <span v-for="(ability, abilityIndex) in pokemon.abilities">
        <span>{{ ability.ability.name }}</span>
        <span v-if="abilityIndex < pokemon.abilities.length - 1">,&nbsp;</span>
      </span>
    </p>

    <p>
      <strong>Stats:&nbsp;</strong>
      <span v-for="(stat, statIndex) in pokemon.stats">
        <span>{{ stat.stat.name }}: {{ stat.base_stat }}</span>
        <span v-if="statIndex < pokemon.stats.length - 1">,&nbsp;</span>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.PokemonListView {
  border: 1px solid #111;
  padding: 1rem;
  margin-bottom: 1rem;
}
</style>
