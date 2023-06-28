<template>
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
    .modal-header, .modal-footer {
    background-color:#e89be8 !important;
}

#cart-body {
    background-color: #F5B6E1 !important;
}

.btn {
    background: transparent;
    border: 1px solid black;
    margin-left: 30px !important;
}

.btn:hover {
    background-color: #E658D4;
    color: #A129C9;
    border: 1px solid transparent;
}

/* #quantity-input {
    background-color: transparent;
} */
</style>