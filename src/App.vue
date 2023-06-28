<template>
  <navbar-comp/>
  <router-view/>
  <footer-comp/>
</template>

<script>
import FooterComp from './components/footer-comp.vue';
  import navbarComp from './components/navbar-comp.vue';

  export default {
    components: {navbarComp, FooterComp}
  }
</script>
<style>


#app {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'India Flower', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #F5B6E1;
}

nav {
  padding: 30px;
}

</style>
