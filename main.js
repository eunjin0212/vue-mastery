const app = Vue.createApp({
	data() {
		return {
			cart: [],
			// Emitting Events: Tells "parent" when event happens
			premium: false,
		};
	},
	methods: {
		updateCart(id) {
			this.cart.push(id);
		},
	},
});
