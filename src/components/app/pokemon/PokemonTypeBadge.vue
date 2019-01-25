<template>
  <div class="PokemonTypeBadge">
    <div
      class="PokemonTypeBadge__badge"
      :style="{ backgroundColor: backgroundColor }"
    ></div>
    <div class="PokemonTypeBadge__label">
      {{ typeName }}
    </div>
  </div>
</template>

<script>
import { deslugify } from "@/lib/utils";

const typeColorMap = {
  normal: "#C2B49B",
  fire: "#F5941E",
  fighting: "#BC1E2B",
  water: "#00AEED",
  flying: "#C2B7D9",
  grass: "#19A148",
  poison: "#91288D",
  // electric: "#F9EB2F",
  electric: "#FFC510",
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

const defaultTypeColor = typeColorMap.normal;

export default {
  props: {
    typeName: {
      type: String,
      required: true
    }
  },
  computed: {
    formattedTypeName() {
      return deslugify(this.typeName);
    },

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

<style lang="scss">
@import "../../../styles/variables";

.PokemonTypeBadge {
  $size: 0.8rem;
  display: flex;
  align-items: center;
  position: relative;

  .PokemonTypeBadge__badge {
    flex-shrink: 0;
    flex-grow: 1;
    width: $size;
    height: $size;
    border-radius: 40em;
  }

  .PokemonTypeBadge__label {
    $background: lighten($brand-primary, 30%);
    position: absolute;
    left: 50%;
    bottom: 1.4rem;
    transform: translateX(-50%) translateY(3px);
    padding: 0.3rem 0.4rem 0.4rem;
    border-radius: 3px;
    color: $brand-primary;
    opacity: 0;
    transition: all 0.4s;
    font-size: 0.7rem;
    font-weight: 600;
    text-align: center;
    line-height: 1;
    letter-spacing: 0.1em;
    background: $background;

    &:after {
      $height: 7px;
      content: "";
      position: absolute;
      left: 50%;
      display: block;
      width: 2px;
      height: $height;
      background: $background;
      transform: translateX(-50%);
      bottom: -$height;
    }
  }

  &:hover {
    .PokemonTypeBadge__label {
      opacity: 1;
      transform: translateX(-50%);
    }
  }
}
</style>
