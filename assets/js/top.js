/*
 * top.js
 */
var app = new Vue({
	el: '#app',

	/* ==== data ==== */
	data(){
		return{
			pagetitle: "CDN版Vue2の雛形",
			test: false,
		};
	},

	/* ==== components ==== */
	components: {
		'my-header': httpVueLoader('./assets/components/my-header.vue'),
		'my-footer': httpVueLoader('./assets/components/my-footer.vue'),
	},

	/* ==== created ==== */
	created(){
		
	},

	/* ==== mounted ==== */
	mounted(){
		
	},

	/* ==== filters ==== */
	filters: {

	},

	/* ==== computed ==== */
	computed: {

	},

	/* ==== watch ==== */
	watch: {

	},


	/* ==== methods ==== */
	methods: {

	}
});