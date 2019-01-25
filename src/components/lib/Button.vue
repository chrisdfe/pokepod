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
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classNames() {
      const classNames = ["Button"];

      if (this.isDisabled) {
        classNames.push("Button--disabled");
      }

      return classNames;
    }
  }
};
</script>

<style lang="scss">
@import "../../styles/variables.scss";
$button-color: lighten($brand-primary, 20%);
$button-color-hover: lighten($brand-primary, 36%);
$button-color-active: lighten($brand-primary, 30%);
$button-color-focus: lighten($brand-primary, 30%);

.Button {
  display: inline-block;
  padding: 0.4rem 1rem 0.5rem;
  background: transparent;
  border: 2px solid $button-color;
  border-radius: 3px;
  color: $brand-primary;
  font-weight: 300;
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not([disabled]) {
    background: $button-color-hover;
    border-color: $button-color-hover;
  }

  &:focus,
  &:active {
    outline: 0 none;
    border: 2px solid $brand-primary;
  }

  &:focus {
    background: $button-color-focus;
    border-color: $button-color-focus;
  }

  &:active {
    background: $button-color-active;
    border-color: $button-color-active;
  }

  &.Button--is-disabled,
  &[disabled] {
    opacity: 0.5;
    cursor: default;
  }
}
</style>
