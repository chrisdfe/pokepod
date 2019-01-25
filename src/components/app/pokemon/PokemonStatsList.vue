<template>
  <div class="PokemonStatsList">
    <div class="PokemonStat" v-for="(stat, statIndex) in statsList">
      <div class="PokemonStat__name">{{ formatStatName(stat.stat.name) }}</div>
      <div class="PokemonStat__value">{{ stat.base_stat }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    statsList: {
      type: Array,
      required: true
    }
  },
  methods: {
    formatStatName(statName) {
      return statName.replace(/-/g, " ");
    }
  }
};
</script>

<style>
.PokemonStatsList {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}

.PokemonStat {
  padding: 0.5rem;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: 33%;
  flex-direction: column;
  justify-content: flex-end;
}

.PokemonStat__name {
  font-size: 0.5rem;
  margin-bottom: 0.2rem;
  opacity: 0.7;
}

.PokemonStat__value {
  font-size: 1.7rem;
}
</style>
