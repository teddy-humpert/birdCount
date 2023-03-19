<template>
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
    integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP"
    crossorigin="anonymous"
  />
  <div id="app">
    <Nav />
    <BirdList />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import BirdList from "./components/BirdList.vue";

export default {
  name: "App",
  components: {
    Nav,
    BirdList,
    
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav > a {
  font-weight: bold;
  color: #2c3e50;
}
</style>