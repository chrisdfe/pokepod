<template>
  <div id="app">
    <IndexPage />
  </div>
</template>

<script>
import IndexPage from "@/components/pages/IndexPage";

export default {
  name: "app",
  components: {
    IndexPage
  }
};
</script>

<style lang="scss">
@import "styles/variables";

* {
  box-sizing: border-box;
}

body {
  font-family: $body-font;

  background-color: $cool-grey;
  color: $dark-grey;
}

h1,
h2,
h3,
h4,
p {
  color: $dark-grey;
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: 600;
  letter-spacing: 0.05em;
  font-family: $heading-font;
}

.container {
  max-width: 960px;
  padding: 0 1rem;
  margin: 0 auto;
}
</style>
