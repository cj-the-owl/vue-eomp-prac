<template>
    <tr>
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td><img :src="product.image" :alt="product.name" id="admin-img"></td>
        <td>{{ product.price }}</td>
        <td>{{ product.quantity }}</td>
        <td>{{ product.category }}</td>
        <td><a class="btn">Delete</a> <a class="btn">Edit</a></td>
    </tr>
</template>

<script>
    export default {
        props: ["product"]
    }
</script>

<style scoped>
* {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Indie Flower', cursive;
}

    #admin-img {
        width: 70px;
        height: 70px;
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