<template class="template">
  <nav class="box">
    <div class="menu"  @click="toggleNav">
      <i class="fa fa-bars"></i>
      <p>Menu</p>
    </div>
    <div class="dropBar" v-show="showNav">
      <a href="#">Home</a>
      <a href="#">Past Counts</a>
      <a href="#">User</a>
    </div>
    <div class="productsSearch-container">
      <form id="form" role="search" class="right">
        <input type="text" id="query" name="q" placeholder="Search..." />
      </form>
    </div>
    
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
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
