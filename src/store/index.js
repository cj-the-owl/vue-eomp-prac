import { createStore } from 'vuex'

export default createStore({
  state: {
    product: null,
    products: null,
    asc: true,
  },
  
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    sortProductsByPrice: (state) => {
      state.products.sort((a, b) => {
        return a.price - b.price;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    }
  },
  actions: {
    getProducts: async (context) => {
      fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((products) => context.commit("setProducts", products));
    },
    getProduct: async (context, id) => {
      fetch("http://localhost:3000/products/" + id)
      .then((res) => res.json())
      .then((product) => context.commit("setProduct", product));
    }
  },
  
})
