<template>
  <div class="PokemonTypeBadgeList">
    <PokemonTypeBadge
      :type-name="type.type.name"
      v-for="(type, typeIndex) in types"
      :key="typeIndex"
    />
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

<style lang="scss">
.PokemonTypeBadgeList {
  text-align: right;
  padding: 0.4rem 0 0;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;

  .PokemonTypeBadge {
    margin-left: 0.3rem;
  }
}
</style>
