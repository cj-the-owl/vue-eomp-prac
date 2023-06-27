<template>
    <router-link :to="{name: 'product', params:{id: product.id}}">
        <img :src="product.image" :alt="product.name">
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
    
</style>