<template>
  <div id="app">
    <h3>current pokemon:</h3>
    <p>{{ currentPokemon }}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "app",
  components: {},

  computed: {
    ...mapState("pokemon", ["currentPokemon"])
  },

  methods: {
    ...mapActions("pokemon", ["fetchByName"])
  },

  created() {
    this.fetchByName({ name: "bulbasaur" }).then(response => {
      console.log("response", response);
    });
  }
};
</script>

<style></style>
