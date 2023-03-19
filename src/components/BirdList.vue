<template >
  <div class="template">
    <div v-for="bird in birds" :key="bird.id" class="bird-container">
      <div class="container-collapsed">
        <p>
          <strong>{{ bird.name }}</strong>
        </p>
        <i
          class="fa fa-angle-double-down"
          @click="bird.expanded = !bird.expanded"
          v-if="!bird.expanded"
        ></i>
        <p id="expandText" v-if="!bird.expanded">Expand</p>
        <i
          class="fa fa-angle-double-up"
          @click="bird.expanded = !bird.expanded"
          v-if="bird.expanded"
        ></i>
        <p id="collapseText" v-if="bird.expanded">Collapse</p>
        <p id="currentCount" class="right">
          <strong>Count: </strong>{{ bird.count }}
        </p>
        <div class="right">
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
export default {
  name: "bird-list",

  data() {
    return {
      birds: [
        {
          id: 1,
          expanded: false,
          count: 0,
          name: "American Goldfinch",
          femaleImgSrc: "imgs/goldfinch-female.jpg",
          maleImgSrc: "imgs/goldfinch-male.jpg",
          description:
            "The summer male goldfinch (Carduelis tristis) is another of the brilliantly colored birds - a bright canary yellow, with a black cap, wings, and tail, and white rump. The female is a pale yellow with black wings and white wing bars. Winter birds are a tan to olive shade, but retain the black wings and white wing bars. The flight pattern is another good identification aid - undulating like the woodpeckers.",
          habitatBehavior:
            "The goldfinch is a fairly common permanent resident of weedy fields, fencerows, and seed-bearing trees. They usually flock together, except during the nesting season. They are great seed-eaters; many times they are seen sitting atop a dandelion or thistle flower pulling out the ripening seeds. Their song is a variable and complex mix of warbles and trills, but has a distinctive tone. Goldfinches often call while in flight. They typically feed on various kinds of seeds.",
        },
        {
          id: 2,
          expanded: false,
          count: 0,
          name: "American Robin",
          femaleImgSrc: "imgs/robin-female.jpg",
          maleImgSrc: "imgs/robin-male.jpg",
          description:
            "The head, back, wings, and tail are a very dark gray to black in male robins and a slightly duller/lighter shade in females. The well-known breast is a light brown to brick red for adult males and a duller shade of red in females. The tail is tipped in white. Robins also have a slight white ring around their eyes. Legs and feet are a beige-gray.",
          habitatBehavior:
            "Robins prefer mowed habitat in urban, suburban, and rural areas for most of their activities. Some will use open woodland areas with sparse understory or ground cover. They are social birds that, when not breeding, will roost communally with other robins and occasionally with starlings and blackbirds. There are some winter roosts of robins, but they are typically a seasonal resident. Peak migration to the south is in October. The majority of feeding takes place in the morning and evening, although young likely feed all day. Typical foods are earthworms, insects, and fruits.",
        },
        {
          id: 3,
          expanded: false,
          count: 0,
          name: "Black-capped Chickadee",
          femaleImgSrc: "imgs/chickadee-female.jpg",
          maleImgSrc: "imgs/chickadee-male.jpg",
          description:
            "Chickadees are small gray birds with distinct black caps and throats, and white cheeks. The black-capped chickadee is nearly identical to the Carolina chickadee except the black 'bib' on the throat is more sharply defined on the black-capped and it has a conspicuous white area in the wing created by white feather edges. Also, their songs are notably different.",
          habitatBehavior:
            "The habitat of this bird is deciduous woods or residential areas, where they nest in hollow stumps or snags, old woodpecker dens, or in nesting boxes. They eat mostly insects and spiders.",
        },
        {
          id: 4,
          expanded: false,
          count: 0,
          name: "Blue Jay",
          femaleImgSrc: "imgs/bluejay-female.jpg",
          maleImgSrc: "imgs/bluejay-male.jpg",
          description:
            "The blue jay is bright blue on top and white underneath. The wings and tail are heavily streaked with black; the tail has white outer feathers; and the face has prominent black markings. It is also conspicuously crested.",
          habitatBehavior:
            "This handsome bird is a common winter resident, although they can be highly migratory, and we may get many more in the spring and fall. At one time their habitat was primarily oak woods, but they are now common in city parks and wooded suburban areas. Sometimes they are seen chasing smaller birds away from feeders. Blue jays are omnivorous and typically eat nuts, seeds, insects, mice, and frogs. They will also rob other nests for small songbirds and bird eggs. They migrate during the day - one of the few songbirds that do so - in small flocks. The loud screams of the jay act as an effective alarm system, alerting all of the other animals within earshot of the presence of intruders. They can be skilled mimics, often imitating the call of the red-shouldered hawk, in particular. Blue jays are omnivorous, and feed on nuts, seeds, insects, mice, frogs, and songbirds and bird eggs robbed from other nests.",
        },
        {
          id: 5,
          expanded: false,
          count: 0,
          name: "Carolina Wren",
          femaleImgSrc: "imgs/carolinawren-female.jpg",
          maleImgSrc: "imgs/carolinawren-male.jpg",
          description:
            "The largest of our wrens, the Carolina (Thryothorus ludovicianus) has a rufous-brown back with buffy underparts. The broad, white eye-stripe is a good field mark.",
          habitatBehavior:
            "The habitat for this wren, which is our only nonmigratory species, is thick underbrush and shrubbery in thickets, ravines, swamps, and residential areas. Typical foods include insects and spiders. The song is a loud, whistled tea-kettle, tea-kettle, tea-kettle, tea.",
        },
      ],
    };
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
  },
};
</script>

<style scoped>
.template {
  font-family: sans-serif;
  width: 100%;
  font-size: 18px;
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
  padding: 15px 20px 15px 20px;
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
  background-color: rgb(207, 25, 25);
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