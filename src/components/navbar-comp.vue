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
                            <li><button type="button" data-bs-toggle="modal" data-bs-target="#cartModal" id="cart-btn" class="btn">Cart</button></li>
                        </ul> 
                    </li>
                </ul>
            </div>
        </div>
    </nav>
       <div class="modal" id="cartModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Your Cart</h4>
                        <button type="button" class="btn btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div id="cart-body">
                        <div id="results">
                            <h5>Total</h5>
                        </div>
                    </div>
                    <div class="modal-footer">
                      <a class="btn me-auto">Checkout Products</a>
                      <p>Total: <span id="total"></span></p>
                    </div>
                </div>
            </div>
        </div>

        <div id="cart-container">
            <div id="cart-body"></div>
        </div>
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

.dropdown-item:hover, .btn:hover {
    background-color: #E658D4;
    color: #A129C9;
    border-radius: 5px;
}

.modal-header, .modal-footer {
    background-color:#e89be8 !important;
}

#cart-body {
    background-color: #F5B6E1 !important;
}    
</style>