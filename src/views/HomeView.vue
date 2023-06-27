<template>
  <div class="position-relative overflow-hidden text-center text-black" id="hero">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-4">Otaku Outfitters</h1>
      <p class="text-black">Quality clothes for quality weebs</p>
      <button class="btn btn-outline-secondary fw-medium" id="shop-btn">Shop Now!</button>
    </div>
  </div>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // name: 'HomeView',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style scoped>
  #hero {
    height: 100vh;
    background-image: url(https://i.postimg.cc/yYmfS4KB/streets-of-tokyo.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* border-radius: 10px; */
    /* position:relative; */
    background-attachment: fixed;
    
}

#hero::before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
}

#shop-btn {
    background-color: transparent;
}

#shop-btn:hover {
    background-color: #E658D4;
    color: #A129C9;
}
</style>