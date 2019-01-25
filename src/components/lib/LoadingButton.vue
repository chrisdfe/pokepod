<template>
  <Button :is-disabled="isDisabled" @click="$event => $emit('click', $event)">
    <span v-if="isLoading">Loading.</span>
    <slot v-if="!isLoading" />
  </Button>
</template>

<script>
import Button from "@/components/lib/Button";

export default {
  props: {
    variant: {
      type: String,
      default: ""
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {},
  components: {
    Button
  }
};
</script>
