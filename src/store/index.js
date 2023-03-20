import { createStore } from 'vuex'

export default createStore({
  state: {
    birds: [
      {
        id: 1,
        expanded: false,
        count: 0,
        isCounted: false,

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
        isCounted: false,

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
        isCounted: false,

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
        isCounted: false,

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
        isCounted: false,

        name: "Carolina Wren",
        femaleImgSrc: "imgs/carolinawren-female.jpg",
        maleImgSrc: "imgs/carolinawren-male.jpg",
        description:
          "The largest of our wrens, the Carolina (Thryothorus ludovicianus) has a rufous-brown back with buffy underparts. The broad, white eye-stripe is a good field mark.",
        habitatBehavior:
          "The habitat for this wren, which is our only nonmigratory species, is thick underbrush and shrubbery in thickets, ravines, swamps, and residential areas. Typical foods include insects and spiders. The song is a loud, whistled tea-kettle, tea-kettle, tea-kettle, tea.",
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
