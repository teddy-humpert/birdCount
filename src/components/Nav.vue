<template class="template">
  <nav class="box">
    <div class="menu" @click="toggleNav">
      <i class="fa fa-bars"></i>
      <p>Menu</p>
    </div>
    <div class="dropBar" v-show="showNav">
      <a href="#">Home</a>
      <a href="#">Past Counts</a>
      <a href="#">User</a>
    </div>
    <form id="form" role="search" class="right">
      <input
        type="text"
        id="query"
        name="q"
        placeholder="Search..."
        @click="toggleSearch"
        autocomplete="off"
        v-bind="searchQuery" 
        v-model="query"
      />
    </form>
    <div id="searchResults" v-show="showSearchResults">
      <!-- this'll be where vfor filteredBirds goes  -->
      <!-- <div class="searchedBird" v-for="bird in filteredBirds" :key="bird"> -->
      <div class="searchedBird" v-for="bird in $store.state.birds" :key="bird">
        <p>{{ bird.name }}</p>
        <i id="addToCount" @click="toggleCounted(bird)">
          {{ bird.isCounted ? "Remove" : "Add" }}</i
        >
      </div>
    </div>

    <!-- drop down select  -->
    <!-- <div>
    <select v-model="selectedBird">
      <option disabled value="">Select a bird</option>
      <option v-for="bird in $store.state.birds" :value="bird" :key="bird.id">{{ bird.name }}</option>
    </select>
    <div v-if="selectedBird">
      <p><strong>{{ selectedBird.name }}</strong></p>
     </div>
  </div>  -->
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
      showSearchResults: false,
      searchQuery: "",
      query: "",
      // v-model 2way binding ...
      // allBirds: allBirds(),
    };
  },
  computed: {
    allBirds() {
      return this.$store.state.birds;
    },
    // filteredBirds() {
    //   if (this.query) {
    //     return allBirds.filter((bird)=> {
    //       return bird.name.startsWith(this.query);
    //     })
    //   } else {
    //     return this.allBirds;
    //   }
    // }
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },
    toggleSearch() {
      this.showSearchResults = !this.showSearchResults;
    },
    toggleCounted(bird) {
      bird.isCounted = !bird.isCounted;
    },
  },
};
</script>

<style scoped>
.template {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: 100%;
  font-size: 14px;
}

.box {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#query {
  border-radius: 40px;
  border: 1px solid lightgray;

  height: 30px;
  padding-left: 5px;
}

#form {
  /*align-self:flex-end;*/
  font-size: 16px;
}

.menu {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.menu > i {
  margin-right: 5px;
}

.dropBar {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background-color: #fff;
  border: 1px solid #ccc;
  display: flex;
  padding: 10px;
  flex-direction: column;
}

#searchResults {
  /* right: 0; */
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1;
  background-color: #fff;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  font-size: 12px;
}

.searchedBird {
  /* position: absolute; */
  padding: 5px;
}

.searchedBird > i {
  position: relative;
  z-index: 100;
  border: 2px solid red;
  font-style: normal;
  border: 1px solid rgb(85, 100, 85);
  padding: 5px 8px 5px 8px;
  border-radius: 40px;
}

.dropBar > a {
  text-decoration: none;
  color: black;
  text-align: left;
  padding: 5px 2px 5px 2px;
}

.show {
  display: block;
}
</style>
