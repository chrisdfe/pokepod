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

<style>
* {
  box-sizing: border-box;
}

body {
  /*font-family: "Cabin", Helvetica, Arial, sans-serif;*/
  font-family: "Roboto Mono", monospace;
  background-color: #f2fafc;
}

.container {
  max-width: 960px;
  padding: 0 1rem;
  margin: 0 auto;
}

h1 {
  font-weight: 600;
}
</style>
