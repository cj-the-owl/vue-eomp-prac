<template>
    <table v-if="products" class="table-responsive-md table table-borderd">
    <thead>
        <tr>
            <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Preview</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Category</th>
              <th scope="col">Edit/Delete Product</th>
        </tr>
    </thead>
    <tr>
            <td><input type="text" class="admin-input" id="Id"></td>
              <td><input type="text" class="admin-input" id="Name"></td>
              <td><input type="text" class="admin-input" id="Image"></td>
              <td><input type="text" class="admin-input" id="Price"></td>
              <td><input type="text" class="admin-input" id="Quantity"></td>
              <td><input type="text" class="admin-input" id="Category"></td>
              <td><button class="btn">Add Product</button></td>
          </tr>
          <tbody class="productInfo">
            <adminComp v-for="product of products" :key="product.id" :product="product"/>
          </tbody>
    </table>
    <div v-else>Loading...</div>
</template>

<script>
    import adminComp from '@/components/admin-comp.vue';

    export default {
        computed: {
            products() {
                return this.$store.state.products
            }
        },
        mounted() {
            this.$store.dispatch("getProducts")
        },

        components: {adminComp}

    }
</script>

<style scoped>
    .admin-input {
    background: transparent;
    height: 30px;
    width: 150px;
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
</style>