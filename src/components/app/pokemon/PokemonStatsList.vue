<template>
  <div class="PokemonStatsList">
    <div
      class="PokemonStat"
      v-for="(stat, statIndex) in displayStats"
      :key="statIndex"
    >
      <div class="PokemonStat__name">{{ formatStatName(stat.stat.name) }}</div>
      <h4 class="PokemonStat__value">{{ stat.base_stat }}</h4>
    </div>
  </div>
</template>

<script>
import { deslugify } from "@/lib/utils";

// These are the important ones.
const relevantStats = ["hp", "attack", "defense"];

export default {
  props: {
    statsList: {
      type: Array,
      required: true
    }
  },
  computed: {
    displayStats() {
      return relevantStats.map(statName =>
        this.statsList.find(stat => stat.stat.name === statName)
      );
    }
  },
  methods: {
    formatStatName(statName) {
      // Special case since hp is an acyonym
      if (statName === "hp") {
        return "HP";
      }

      return deslugify(statName);
    }
  }
};
</script>

<style lang="scss">
@import "../../../styles/variables";

.PokemonStatsList {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  background: lighten($brand-primary, 36%);
  color: $brand-primary;
  padding: 1rem 0.5rem;
}

.PokemonStat {
  padding: 0.5rem;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: 33%;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
}

.PokemonStat__name {
  margin-bottom: 0.2rem;
  color: lighten($brand-primary, 10%);
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 0.06em;
}

.PokemonStat__value {
  margin: 0;
  font-size: 1.7rem;
  font-weight: bold;
  color: $brand-primary;
}
</style>
