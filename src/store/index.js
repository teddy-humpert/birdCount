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
      {
        id: 6,
        expanded: false,
        count: 0,
        isCounted: false,

        name: "Downy Woodpecker",
        femaleImgSrc: "imgs/carolinawren-female.jpg",
        maleImgSrc: "imgs/carolinawren-male.jpg",
        description:
          "About the size of a sparrow, this species is the smallest, most abundant, and tamest of our woodpeckers. The downy (Picoides pubescens) is black and white and males have a bright red spot on the back of the head. The small downy is marked exactly like the larger, and much rarer, hairy woodpecker. The hairy, however, has a much larger bill as compared to the stubby bill of the downy.",
        habitatBehavior:
          "The downy's habitat may be anywhere a number of trees are found. This fairly common permanent resident is attracted to suet feeders in the winter. The song is a descending rattle. The call note, a sharp pik, is heard more frequently. Downy woodpeckers usually feed on insects and other arthropods, fruits, seeds, sap, and some cambium tissue.",
      },
      {
        id: 7,
        expanded: false,
        count: 0,
        isCounted: false,

        name: "Eastern Phoebe",
        femaleImgSrc: "imgs/carolinawren-female.jpg",
        maleImgSrc: "imgs/carolinawren-male.jpg",
        description:
          "This sparrow-sized bird varies from grayish to brownish color with a light breast. There are no wing bars or eye-rings, although some immature phoebes do have wing bars. An excellent field trait for the phoebe is its tail-wagging habit.",
        habitatBehavior:
          "The Eastern phoebe is usually the first flycatcher to arrive in the spring and the last to leave in the fall. It is a fairly common summer resident. They are often seen near iron or stone bridges and farm buildings. Their preferred habitat is open woodland near water, where they feed on insects. Phoebes are named for their song a clear fee-bee, repeated many times. They primarily feed on insects.",
      },
      {
        id: 8,
        expanded: false,
        count: 0,
        isCounted: false,

        name: "Hairy Woodpecker",
        femaleImgSrc: "imgs/carolinawren-female.jpg",
        maleImgSrc: "imgs/carolinawren-male.jpg",
        description:
          "Resembling a jumbo downy woodpecker, the hairy (Picoides villosus) is best told by its larger size, proportionately much bigger bill, and unspotted outer tail feathers.",
        habitatBehavior:
          "This species is much less tolerant of forest fragmentation than the downy woodpecker, and is generally confined to larger, older woodlands. The hairy woodpecker also has a much louder, more explosive call. When diving, it releases a drawn out rattling cry somewhat reminiscent of a belted kingfisher. Typical foods include insects and spiders.",
      },
      {
        id: 9,
        expanded: false,
        count: 0,
        isCounted: false,

        name: "Northern Cardinal",
        femaleImgSrc: "imgs/carolinawren-female.jpg",
        maleImgSrc: "imgs/carolinawren-male.jpg",
        description:
          "The male cardinal is an unmistakable brilliant red with black facial markings and a crested head. Females also have a head crest, but overall are duller in coloration. Female cardinals are a grayish, brown-red with true red only on their wings, tail, and crest. The red bill is also a distinguishing characteristic. As with many other species of birds, the muted appearance makes the female cardinal less conspicuous to predators when nesting.",
        habitatBehavior:
          "Cardinals prefer a mixed habitat of woodlands, brush, and forest edges. They eat a variety of seeds that their thick, cone-shaped beak is well adapted to handling, as well as some insects. Cardinals do not migrate, but individuals may wander over a widespread area. As with most wildlife species, cardinals have a very short life span. Most cardinals live only one year or less; a two- or three-year-old bird is rare. The mulitple broods of young in a year help offset the loss of older birds in the population.",
      },
      {
        id: 10,
        expanded: false,
        count: 0,
        isCounted: false,

        name: "Red-Bellied Woodpecker",
        femaleImgSrc: "imgs/carolinawren-female.jpg",
        maleImgSrc: "imgs/carolinawren-male.jpg",
        description:
          "The red-bellied woodpecker (Melanerpes carolinus) has a patch of red on the lower abdomen that is relatively small and very difficult to see at any distance. This robin-sized bird has a pale buffy-gray breast and black-and-white striped wings and back. On the male, the entire top of the head and neck is red, while the female is only red on the nape of the neck or back of the head.",
        habitatBehavior:
          "Found in forests, woodlots, and parks, the red-bellied is an uncommon permanent resident. This woodpecker, like the others, is beneficial because of the tremendous number of insects and larvae it consumes. It also eats nuts and berries. The call is a churr or a chaww.",
      },
      {
        id: 11,
        expanded: false,
        count: 0,
        isCounted: false,

        name: "Red-Winged Blackbird",
        femaleImgSrc: "imgs/carolinawren-female.jpg",
        maleImgSrc: "imgs/carolinawren-male.jpg",
        description:
          "Females resemble sparrows, but have noticeable differences in size, habits, and bill shape. The male is black with bright red shoulder patches.",
        habitatBehavior:
          "This species inhabits all types of open habitats, roadsides, wet meadows, and cattail marshes. An abundant bird, red-winged blackbirds are one of the more obvious species along our roadsides. The males deliver their raucous conk-a-ree-onk songs while perching on fences, wires, and the tops of shrubs. Frequently they accompany their singing by flashing their brilliant red epaulets, which they display by folding their wings out and forward. These birds are most abundant in wetlands, where they eat seeds and insects.",
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
