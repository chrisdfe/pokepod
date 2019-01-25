<template>
  <div class="LoadingOverlayWrapper">
    <div
      class="LoadingOverlay"
      :class="{ 'LoadingOverlay--is-visible': isLoading }"
      v-show="isLoading"
    >
      <div class="PokeballWrapper">
        <div class="Pokeball">
          <img src="../../assets/icons/pokeball.png" alt="" />
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss">
@import "../../styles/variables";

@keyframes spinning-pokeball {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.LoadingOverlayWrapper {
  position: relative;
}

.LoadingOverlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba($cool-grey, 0.7);
  opacity: 0;
  transition: opacity 0.2;

  .PokeballWrapper {
    position: sticky;
    top: 50%;
    margin-top: 5rem;
    text-align: center;
  }

  .Pokeball {
    $size: 32px;
    display: inline-block;
    width: $size;
    height: $size;
    animation: spinning-pokeball 1s linear infinite;

    img {
      max-width: 100%;
    }
  }
}

.LoadingOverlay.LoadingOverlay--is-visible {
  opacity: 1;
}
</style>
