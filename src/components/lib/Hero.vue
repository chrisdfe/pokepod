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
  padding: 7rem 0;
  /*background: #ee7777;*/
  background: #ca3b47;
  color: #fff;
}

.Hero h1 {
  letter-spacing: 0.08em;
  font-size: 3rem;
  font-weight: 300;
  padding-bottom: 1rem;
  border-bottom: 1px solid #fff;
  margin-bottom: 1rem;
}

.Hero h3 {
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
}
</style>
