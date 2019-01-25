<template>
  <div class="PokemonTypeBadgeList">
    <PokemonTypeBadge :type-name="type.type.name" v-for="type in types" />
  </div>
</template>

<script>
import PokemonTypeBadge from "@/components/app/pokemon/PokemonTypeBadge";

export default {
  props: {
    types: {
      type: Array,
      required: true
    }
  },
  components: {
    PokemonTypeBadge
  }
};
</script>

<style>
.PokemonTypeBadgeList {
  display: flex;
}

.PokemonTypeBadgeList .PokemonTypeBadge {
  margin-right: 0.5rem;
}

.PokemonTypeBadgeList .PokemonTypeBadge:last-child {
  margin-right: 0;
}
</style>
