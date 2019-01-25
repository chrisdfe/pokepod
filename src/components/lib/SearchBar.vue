<template>
  <form class="SearchBar" @submit.prevent="onSubmit">
    <!-- TODO - dynamic placeholder -->
    <input
      class="SearchBar__input"
      type="text"
      placeholder="e.g Probopass"
      v-model="searchInput"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchInput: ""
    };
  },

  methods: {
    onSubmit($event) {
      this.$emit("search:requested", { value: this.searchInput });
    }
  }
};
</script>

<style>
.SearchBar {
  display: block;
}

.SearchBar__input {
  display: block;
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #111;
  background-color: rgba(255, 255, 255, 0);
  font-size: 1.5rem;
  letter-spacing: 0.08rem;
  outline: 2px solid rgba(255, 255, 255, 0);
  transition: all 0.2s;
}

.SearchBar__input:focus {
  outline: 2px solid #111;
  background: #fff;
}
</style>
