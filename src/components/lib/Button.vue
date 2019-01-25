<template>
  <button
    :class="classNames"
    :disabled="isDisabled"
    @click="$event => $emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: ""
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classNames() {
      const classNames = ["Button"];

      if (this.variant) {
        classNames.push(`Button--${variant}`);
      }

      if (this.isDisabled) {
        classNames.push("Button--disabled");
      }

      return classNames;
    }
  }
};
</script>

<style>
.Button {
  display: inline-block;
  padding: 0.6rem 1.4rem;
  background: #444;
  border: 1px solid #444;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
}

.Button:active {
  background: #222;
  border-color: #222;
}
</style>
