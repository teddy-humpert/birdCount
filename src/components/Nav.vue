<template>
  <nav class="box">
    <i class="fa fa-bars" @click="toggleNav"></i>
    <div class="dropBar" v-show="showNav">
      <a href="#">Home</a>
      <a href="#">Counts</a>
      <a href="#" class="push">User</a>
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
.box {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#form {
  /*align-self:flex-end;*/
  font-size: 16px;
}

.dropBar {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  border: 1px solid #ccc;
  padding: 10px;
}

.show {
  display: block;
}
</style>
