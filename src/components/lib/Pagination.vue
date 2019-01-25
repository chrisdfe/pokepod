<template>
  <div class="Pagination">
    <Button
      :isDisabled="isDisabled || currentPage <= 1"
      @click.prevent="onPreviousClicked"
      >previous</Button
    >
    <span class="Pagination__label" v-if="currentPage && totalPages">
      page {{ currentPage }}<span class="Pagination__delimiter">/</span
      >{{ totalPages }}
    </span>
    <Button
      :isDisabled="isDisabled || currentPage >= totalPages - 1"
      @click.prevent="onNextClicked"
      >next</Button
    >
  </div>
</template>

<script>
import Button from "@/components/lib/Button";

export default {
  props: {
    currentOffset: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    totalItemCount: {
      type: Number,
      required: true
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    currentPage() {
      if (this.currentOffset === 0) {
        return 1;
      }

      return Math.floor(this.currentOffset / this.perPage) + 1;
    },

    totalPages() {
      return Math.floor(this.totalItemCount / this.perPage);
    }
  },

  methods: {
    onPreviousClicked() {
      this.$emit("prev-page:requested");
    },
    onNextClicked() {
      this.$emit("next-page:requested");
    }
  },

  components: {
    Button
  }
};
</script>

<style lang="scss">
@import "../../styles/variables";

.Pagination {
  padding: 1rem;
  text-align: center;
}

.Pagination__label {
  margin: 0 1rem;
  font-size: 0.9rem;
}

.Pagination__delimiter {
  display: inline-block;
  padding: 0.2rem;
}
</style>
