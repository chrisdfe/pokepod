<template>
  <div class="SearchBar">
    <div class="SearchBar__search-icon">
      <MagnifyingGlassIcon />
    </div>

    <form @submit.prevent="onSubmit">
      <input
        class="SearchBar__input"
        type="text"
        :placeholder="placeholder"
        v-model="searchInput"
        @input="onInput"
      />
    </form>

    <button
      v-if="searchInput.length > 0"
      class="SearchBar__close-icon"
      title="clear"
      @click.prevent="onSearchResultsClearRequested"
    >
      <CloseIcon />
    </button>
  </div>
</template>

<script>
import _ from "lodash";

import MagnifyingGlassIcon from "@/assets/icons/magnifying-glass.svg";
import CloseIcon from "@/assets/icons/close.svg";

export default {
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      searchInput: ""
    };
  },

  created() {
    this.debouncedRequestSearch = _.debounce(this.requestSearch, 500);
  },

  methods: {
    onSubmit($event) {
      this.requestSearch();
    },

    onSearchResultsClearRequested() {
      this.searchInput = "";
      this.$emit("clear:requested");
    },

    onInput($event) {
      this.debouncedRequestSearch();
    },

    requestSearch() {
      this.$emit("search:requested", { value: this.searchInput });
    }
  },

  watch: {
    value(value) {
      this.searchInput = value;
    }
  },

  components: {
    MagnifyingGlassIcon,
    CloseIcon
  }
};
</script>

<style lang="scss">
@import "../../styles/variables";

.SearchBar {
  position: relative;
  display: block;
}

.SearchBar__input {
  display: block;
  width: 100%;
  padding: 1.2rem 1.2rem 1.2rem 4.2rem;
  border: 2px solid #fff;
  border-radius: 40em;
  // background-color: rgba(255, 255, 255, 0);
  background: #fff;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.08rem;
  // outline: 2px solid rgba(255, 255, 255, 0);
  transition: all 0.2s;

  &:focus {
    outline: 0 none;
    border-color: lighten($brand-primary, 10%);
    background: #fff;
  }
}

.SearchBar__search-icon,
.SearchBar__close-icon {
  $size: 1.8rem;
  position: absolute;
  top: 51%;
  width: $size;
  height: $size;
  transform: translateY(-50%);
  fill: $brand-primary;
}

.SearchBar__search-icon {
  left: 1.2rem;
}

.SearchBar__close-icon {
  right: 1rem;
  padding: 0;
  background: transparent;
  border: 2px solid rgba($brand-primary, 0);
  border-radius: 40em;
  transition: all 0.2s;
  cursor: pointer;

  &:hover,
  &:focus {
    fill: $brand-primary;
  }

  &:hover {
    fill: $brand-primary;
    border-color: rgba($brand-primary, 0.2);
  }

  &:focus {
    outline: none;
    border-color: rgba($brand-primary, 0.5);
  }
}
</style>
