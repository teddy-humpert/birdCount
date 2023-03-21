// treat as bird library 

<template >
  <div class="template">
    <div class="libraryHeader">
      <h1 id="libraryHeader">Library</h1>
      <form id="form" role="search" class="right">
      <input
        type="text"
        id="query"
        name="q"
        placeholder="Search..."
        @click="toggleSearch"
        autocomplete="off"
        v-bind="searchQuery"
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
    </div>
    
    <!-- <count-list :birds="birds" /> -->
    <div
      v-for="bird in $store.state.birds"
      :key="bird.id"
      class="bird-container"
    >
      <!-- <div v-for="(bird, index) in birds" :key="index" class="bird-container"> -->
      <div class="container-collapsed">
        <i
          class="fa fa-angle-double-right"
          @click="bird.expanded = !bird.expanded"
          v-if="!bird.expanded"
        ></i>
        <p id="expandText" v-if="!bird.expanded"></p>
        <i
          class="fa fa-angle-double-down"
          @click="bird.expanded = !bird.expanded"
          v-if="bird.expanded"
        ></i>
        <p id="collapseText" v-if="bird.expanded"></p>
        <p>
          <strong>{{ bird.name }}</strong>
          <!-- <strong>{{ bird.isCounted }}</strong> -->
        </p>

        <!-- <p id="currentCount" class="right">
          <strong>Count: </strong>{{ bird.count }}
        </p> -->
        <div class="right">
          <i id="addToCount" @click="toggleCounted(bird)">
            {{ bird.isCounted ? "Remove from Count" : "Add to Count" }}</i
          >
          <!-- <i class="fa fa-minus" id="minus" @click="decrementCount(index)"></i> -->
        </div>
      </div>
      <div class="container-expanded" v-if="bird.expanded">
        <div id="images">
          <div class="female-image">
            <img :src="bird.femaleImgSrc" id="female-image" />
            <p class="image-ident">Female</p>
          </div>
          <div class="male-image">
            <img :src="bird.maleImgSrc" id="male-image" />
            <p class="image-ident">Male</p>
          </div>
        </div>
        <p class="description">
          <strong>Description:</strong> {{ bird.description }}
        </p>
        <p class="habitatBehavior">
          <strong>Habitat & Behavior:</strong> {{ bird.habitatBehavior }}
        </p>
      </div>
    </div>
   
  </div>
</template>

<script>
// import CountList from "./CountList.vue";
// import { reactive } from "vue";
export default {
  // components: { CountList },
  name: "bird-list",
  
  data() {
    return {
      selectedBirdIndex: 0,
      showSearchResults: false,

      // 
    };
  },
  methods: {
    incrementCount(index) {
      this.birds[index].count++;
    },

    decrementCount(index) {
      if (this.birds[index].count > 0) {
        this.birds[index].count--;
      }
    },
    toggleCounted(bird) {
      bird.isCounted = !bird.isCounted;
    },
    toggleSearch() {
      this.showSearchResults = !this.showSearchResults;
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

#libraryHeader {
  font-size: 18px;
}

.libraryHeader {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center; */
  margin: -5px 0px -5px 0px;
  padding: 5px 0px 5px 0px;
  font-size: 14px;
  border-top: 3px solid lightgray;
  border-bottom: 1px solid lightgray;
}

#searchResults {
  /* right: 0; */
  position: absolute;
  top: 130px;
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

#query {
  border-radius: 40px;
  border: 1px solid lightgray;

  height: 30px;
  padding-left: 5px;
}

.bird-container {
  border-bottom: 1px solid lightgray;
  padding: 5px 0px 5px 0px;
}

.bird-container > .container-collapsed {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.bird-container > .container-collapsed > i {
  margin-right: 10px;
  /* position: fixed;
  margin-left: 30%; */
}

.right {
  margin-right: 5px;
  /*align-self:flex-end;*/
  margin-left: auto;
  color: white;
}

#currentCount {
  /*align-self:flex-end;*/
  margin-left: 50%;
  color: black;
  position: fixed;
  /*align-self:flex-end;*/
}

.bird-container > .container-collapsed > .right > i {
  margin-left: 5px;
  padding: 10px 15px 10px 15px;
  border-radius: 40px;
}

.bird-container > .container-expanded {
  /* display: grid; */
  grid-template-columns: 1fr 1fr;
  row-gap: 0px;
  column-gap: 0px;
  grid-template-areas:
    "female-image male-image"
    "description description"
    "habitatBehavior habitatBehavior";
}

#expand {
  margin-left: 50px;
}

#expandText {
  margin-left: 22%;
  font-size: 16px;
  position: fixed;
  color: white;
}

#collapse {
  margin-left: 10px;
}

#collapseText {
  margin-left: 8px;
  font-size: 16px;
  color: white;
}

#minus {
  background-color: rgb(187, 20, 20);
}

#addToCount {
  border: 1px solid rgb(85, 100, 85);
  font-style: normal;
  color: black;
}

#images {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.female-image {
  grid-area: female-image;
  margin-left: 0px;
}

.male-image {
  grid-area: male-image;
  margin-left: 20px;
}

#female-image,
#male-image {
  height: 140px;
  border-radius: 5px;
  border: 1px solid rgb(85, 100, 85);
}

.image-ident {
  font-size: 10px;
  color: darkgray;
  margin-top: -2px;
}

.description,
.habitatBehavior {
  font-size: 14px;
  text-align: justify;
  margin-right: 5px;
}

.description {
  grid-area: description;
}

.habitatBehavior {
  grid-area: habitatBehavior;
}

@media only screen and (max-width: 500px) {
  body {
    width: 100%;
    font-size: 16px;
  }

  .bird-container > .container-collapsed {
    width: 100%;
    align-items: stretch;
  }

  .bird-container > .container-collapsed > i {
    margin-left: 0;
    margin-bottom: 10px;
  }

  .right {
    margin-right: 0;
    margin-left: 0;
    text-align: center;
  }

  .bird-container > .container-collapsed > .right > i {
    margin-left: 0;
    margin-bottom: 10px;
  }

  .bird-container > .container-expanded {
    grid-template-columns: 1fr;
    grid-template-areas:
      "female-image"
      "male-image"
      "description"
      "habitatBehavior";
  }

  .female-image,
  .male-image {
    margin-left: auto;
    margin-right: auto;
  }

  .description,
  .habitatBehavior {
    font-size: 12px;
  }
}
</style>