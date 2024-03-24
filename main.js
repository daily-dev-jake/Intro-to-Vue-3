const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' },
            ],
            sizes: [
                { id: 2444, type: 'S' },
                { id: 2445, type: 'M' },    
                { id: 2446, type: 'L' },    
                { id: 2447, type: 'XL' },    
            ],
        }
    }
})
