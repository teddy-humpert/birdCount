<template>
   <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
      integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP"
      crossorigin="anonymous"
    />
  <div id="app">
     <BirdList />
    </div>
</template>

<script>
import BirdList from './components/BirdList.vue'

export default {
  name: 'App',
  components: {
    BirdList
  }
}
</script>

