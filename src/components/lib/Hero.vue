<template>
  <div class="Hero">
    <div class="container">
      <div class="Hero__content-wrapper">
        <div class="Hero__content">
          <slot />
        </div>
        <div class="Hero__brand-image-wrapper">
          <img
            class="Hero__brand-image"
            :class="{ 'Hero__brand-image--has-loaded': brandImageHasLoaded }"
            src="../../assets/metapod.png"
            alt="Illustration by @samshawdraws"
            @load="onBrandImageLoad"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brandImageHasLoaded: false
    };
  },
  methods: {
    onBrandImageLoad() {
      this.brandImageHasLoaded = true;
    }
  }
};
</script>

<style lang="scss">
@import "../../styles/variables.scss";

.Hero {
  $text-color: darken($brand-primary, 10%);
  padding: 7rem 0;
  background-color: lighten($brand-primary, 30%);

  h1 {
    padding-bottom: 2rem;
    border-bottom: 2px solid rgba($text-color, 0.6);
    margin-bottom: 2.5rem;
    color: $text-color;
    letter-spacing: 0.05em;
    font-size: 3.4rem;
    font-weight: 700;
    font-weight: 700;
  }

  h3 {
    color: rgba($text-color, 0.6);
  }

  .Hero__brand-image-wrapper {
    padding-right: 2rem;
  }

  .Hero__brand-image {
    width: 200px;
    opacity: 0;
    transition: opacity 1s;

    &.Hero__brand-image--has-loaded {
      opacity: 1;
    }
  }

  .Hero__content-wrapper {
    display: flex;
  }

  .Hero__content {
    flex-grow: 1;
  }
}
</style>
