<template>
  <form class="SearchBar" @submit.prevent="onSubmit">
    <input class="SearchBar__input" type="text" v-model="searchInput" />
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
  border: 1px solid #fff;
  background-color: #fff;
}

.SearchBar__input:focus {
  /*outline: 2px solid blue;*/
}
</style>
