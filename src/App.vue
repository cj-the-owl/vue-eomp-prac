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
  font-family: 'India Flower', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;
}

</style>
