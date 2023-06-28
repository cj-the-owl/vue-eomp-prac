<template>
    <button class="btn" @click="sortPrice">Sort by Price</button>

    <input type="text" class="search-input" v-model="search" placeholder="Search...">

    <h1 class="display-4 text-center fw-bold p-5">Check out our products!</h1>

              <select v-model="category" id="prodcat" class="rounded-3">
                <option class="opt" value="All">All Products</option>
                <option class="opt" value="Jackets">Jackets</option>
                <option class="opt" value="Hoodies">Hoodies</option>
                <option class="opt" value="T-Shirts">T-Shirts</option>
              </select>

    <div v-if="products" class="flex-container" id="products">
        <cardComp v-for="product of products" :key="product.id" :product="product"/>
    </div>
    <div v-else>Loading...</div>
</template>

<script>
    import cardComp from '@/components/card-comp.vue';

    export default {
        data() {
            return {
                search: "",
                category: "All"
            }
        },

        methods: {
            sortPrice() {
                this.$store.commit("sortProductsByPrice")
            }
        },
        computed: {
            products() {
                return this.$store.state.products?.filter((product) => {
                    let isMatch = true;
                    if (!product.name.toLowerCase().includes(this.search.toLowerCase())) {
                        isMatch = false
                    }
                    if (this.category !== "All" && this.category !== product.category) {
                        isMatch = false
                    }
                    return isMatch
                })
            }
        },
        mounted() {
            this.$store.dispatch("getProducts")
        },

        components: {cardComp}
    }
</script>

<style>
    #products {
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    justify-content: center;
    grid-gap: 150px;
    }

    #prodcat, .search-input {
        background: transparent;
    }

    .btn {
    border: 1px solid black;
    background-color:#F5B6E1;
    color: black;
    }

    .btn:hover {
    background-color: #E658D4;
    color: #A129C9;
    border: 1px solid transparent;
}

.opt {
    background-color:#F5B6E1;
}


@media screen and (max-width: 900px) {
    #products {
        display: grid;
        grid-template-columns: auto auto auto ;
        align-items: center;
        justify-content: center;
        grid-gap: 50px;
    }
}

@media screen and (max-width: 600px) {
    #products {
        display: grid;
        grid-template-columns: auto auto ;
        align-items: center;
        justify-content: center;
        grid-gap: 50px;
    }
}

@media screen and (max-width: 400px) {
    #products {
        display: grid;
        grid-template-columns: auto ;
        align-items: center;
        justify-content: center;
        grid-gap: 150px;
    }
}    
</style>