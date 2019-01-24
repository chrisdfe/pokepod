<template>
  <div class="Hero">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.Hero {
  padding: 2rem 0;
  background: #ee7777;
  color: #fff;
}

.Hero h1 {
  letter-spacing: 0.02em;
  font-size: 3rem;
}
</style>
