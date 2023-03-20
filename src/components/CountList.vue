// treat as count list

<template >
  <div class="template">
    <!-- will only be populating with birds added to counted list which means computed value to determine if they get added or not, based on > 0  -->
    <!-- <div v-for="bird in birdLibrary" :key="bird.id" class="bird-container"> -->
    <div class="countHeader">
      <h1 id="countHeader">Count</h1>
    </div>

    <div v-for="bird in birdLibrary" :key="bird.id" class="bird-container">
      <div class="container-collapsed">
        <p>
          <strong>{{ bird.name }}</strong>
          <!-- <strong>{{ bird.isCounted }}</strong> -->
        </p>
        <!-- <i
          class="fa fa-angle-double-down"
          @click="bird.expanded = !bird.expanded"
          v-if="!bird.expanded"
        ></i>
        <p id="expandText" v-if="!bird.expanded">Expand</p>
        <i
          class="fa fa-angle-double-up"
          @click="bird.expanded = !bird.expanded"
          v-if="bird.expanded"
        ></i> -->
        <p id="collapseText" v-if="bird.expanded">Collapse</p>
        
        <div class="right">
          <p id="currentCount" class="right">
          <strong>Count: </strong>  {{ bird.count }}
        </p>
          <i class="fa fa-plus" id="plus" @click="incrementCount(bird)"></i>
          <i class="fa fa-minus" id="minus" @click="decrementCount(bird)"></i>
        </div>
      </div>
      <div class="container-expanded" v-if="bird.expanded">
        <div class="female-image">
          <img :src="bird.femaleImgSrc" id="female-image" />
          <p class="image-ident">Female</p>
        </div>
        <div class="male-image">
          <img :src="bird.maleImgSrc" id="male-image" />
          <p class="image-ident">Male</p>
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
import BirdListVue from "./BirdList.vue";
export default {
  name: "count-list",
  // props: ["myBirds"],
  data() {
    return {
      birdList: [],
      displayCount: false,
      selectedBirdIDs: [],
      birdLibrary: [],
      birdsInCount: [],
      filter: {
        name: "",
        description: "",
        habitatBehavior: "",
      },
      newBird: {
        id: null,
        expanded: false,
        isCounted: false,
        count: 0,
        name: "",
        femaleImgSrc: "",
        maleImgSrc: "",
        description: "",
        habitatBehavior: "",
      },
    };
  },
  mounted() {
    this.birdLibrary = BirdListVue.data().birds;
  },
  methods: {
    incrementCount(bird) {
      bird.count++;
    },

    decrementCount(bird) {
      if (bird.count > 0) {
        bird.count--;
      }
    },
    // toggleCounted(index) {
    //   this.$emit("toggle-counted", index); // emit an event to the parent component
    // },
  },
  computed: {
    countedBirds() {
      return this.birdLibrary.filter((bird) => bird.isCounted === true);
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

#countHeader {
  display: flex;
  justify-content: flex-start;
  margin: -5px 0px -5px 0px;
  padding: 5px 0px 5px 0px;
  font-size: 18px;
  border-top: 3px solid lightgray;
  border-bottom: 1px solid lightgray;
}

.bird-container {
  border-bottom: 1px solid lightgray;
}

.bird-container > .container-collapsed {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.bird-container > .container-collapsed > i {
  margin-left: 20px;
  position: fixed;
  margin-left: 40%;
}

.right {
  margin-right: 5px;
  /*align-self:flex-end;*/
  margin-left: auto;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
}

#currentCount {
  /*align-self:flex-end;*/
  color: black;
  margin-bottom: 5px;
  /*align-self:flex-end;*/
}

.bird-container > .container-collapsed > .right > i {
  margin-left: 5px;
  padding: 10px 15px 10px 15px;
  border-radius: 5px;
}

.bird-container > .container-expanded {
  display: grid;
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
  margin-left: 42%;
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

#plus {
  background-color: rgb(14, 112, 14);
}

.female-image {
  grid-area: female-image;
  margin-left: 50px;
}

.male-image {
  grid-area: male-image;
  margin-right: 50px;
  margin-left: auto;
}

#female-image,
#male-image {
  height: 140px;
  border-radius: 5px;
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