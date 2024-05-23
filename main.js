const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },
        removeFromCart(id) {
            const itemId = this.cart.id
            if (this.cart.id > -1)
                this.cart.splice(itemId)
        }
    }
})
