<template>
    <div v-if="product" class="product-details">
        <img :src="product.image" :alt="product.name">
        <div>
            <h2>{{ product.name }}</h2>
            <p>Price: R{{ product.price }}</p>

            <button class="btn add-btn mb-2">Add To Cart</button>
        </div>
        
    </div>
</template>

<script>
    export default {
        props: ["id"],
        computed: {
            product() {
                return this.$store.state.product;
            },
        },
        mounted() {
            this.$store.dispatch("getProduct", this.id);
        },
    };
</script>

<style scoped>
.add-btn {
    border: 1px solid black;
    background-color:#F5B6E1;
    color: black;
}

.add-btn:hover {
    background-color: #E658D4;
    color: #A129C9;
    border: 1px solid transparent;
}
</style>