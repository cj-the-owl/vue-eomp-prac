<template>
    <router-link :to="{name: 'product', params:{id: product.id}}" style="text-decoration: none;">
        <img :src="product.image" :alt="product.name" id="product-img">
        <h3>
            {{ product.name }}
        </h3>
        <p>Price: R {{ product.price }}</p>
    </router-link>
</template>

<script>
    export default {
        props: ["product"]
    }
</script>

<style>
    * {
    /* padding: 0; */
    margin: 0;
    box-sizing: border-box;
    font-family: 'Indie Flower', cursive;
}

    #product-img {
    width: 200px;
    height: 200px;
}

h3, p {
    color:black; 
}

h3:hover {
    color: #A129C9;
}

</style>