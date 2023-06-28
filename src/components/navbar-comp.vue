<template>
    <nav class="navbar navbar-expand-lg lg-black" id="navBar">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <!-- <li class="nav-item">
                        <router-link class="nav-link" to="/products">Products</router-link>
                    </li> -->
                    <li class="nav-item dropdown list-unstyled">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Menu</a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/admin">Admin</router-link></li>
                            <li><router-link class="dropdown-item" to="/products">Products</router-link></li>
                            <li><router-link class="dropdown-item" to="/cart">Cart</router-link></li>
                        </ul> 
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {

    }
</script>

<style scoped>
#navBar, .dropdown-menu {
    background-color: #e89be8;
}

.nav-link:hover {
    background-color: #E658D4;
    color: #A129C9;
    border-radius: 5px;
}

.dropdown-item:hover {
    background-color: #E658D4;
    color: #A129C9;
    border-radius: 5px;
}
</style>