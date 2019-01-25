<template>
  <form class="SearchBar" @submit.prevent="onSubmit">
    <!-- TODO - dynamic placeholder -->
    <input
      class="SearchBar__input"
      type="text"
      placeholder="e.g Probopass"
      v-model="searchInput"
    />

    <div class="SearchBar__search-icon">
      <MagnifyingGlassIcon />
    </div>
  </form>
</template>

<script>
import MagnifyingGlassIcon from "@/assets/icons/magnifying-glass.svg";

console.log("MagnifyingGlassIcon", MagnifyingGlassIcon);

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
  },

  components: {
    MagnifyingGlassIcon
  }
};
</script>

<style>
.SearchBar {
  position: relative;
  display: block;
}

.SearchBar__input {
  display: block;
  width: 100%;
  padding: 1rem 1rem 1rem 4rem;
  border: 1px solid #111;
  background-color: rgba(255, 255, 255, 0);
  font-size: 1.2rem;
  letter-spacing: 0.08rem;
  outline: 2px solid rgba(255, 255, 255, 0);
  transition: all 0.2s;
}

.SearchBar__input:focus {
  outline: 2px solid #111;
  background: #fff;
}

.SearchBar__search-icon {
  position: absolute;
  top: 50%;
  left: 1rem;
  width: 2rem;
  height: 2rem;
  transform: translateY(-50%);
}
</style>
