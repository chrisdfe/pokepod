<template>
  <div class="PokemonTypeBadge" :style="{ backgroundColor: backgroundColor }">
    <!-- {{ typeName }} -->
  </div>
</template>

<script>
const typeColorMap = {
  normal: "#C2B49B",
  fire: "#F5941E",
  fighting: "#BC1E2B",
  water: "#00AEED",
  flying: "#C2B7D9",
  grass: "#19A148",
  poison: "#91288D",
  electric: "#F9EB2F",
  ground: "#FFCC67",
  psychic: "#EC2A79",
  rock: "#C39A6E",
  ice: "#A3DDF5",
  bug: "#AACF4E",
  dragon: "#4D2F8F",
  ghost: "#877299",
  dark: "#3B2417",
  steel: "#A1ABB3",
  fairy: "#F391BD",
  cell: "#61AAA5",
  cyber: "#3755A3"
};

// TODO - pick better color
const defaultTypeColor = "#AAABAC";

export default {
  props: {
    typeName: {
      type: String,
      required: true
    }
  },
  computed: {
    backgroundColor() {
      const backgroundColor = typeColorMap[this.typeName];

      if (!backgroundColor) {
        return defaultTypeColor;
      }

      return backgroundColor;
    }
  }
};
</script>

<style>
.PokemonTypeBadge {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 40em;
}
</style>
