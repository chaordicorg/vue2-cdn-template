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
		'my-header': httpVueLoader('./common/components/my-header.vue'),
		'my-footer': httpVueLoader('./common/components/my-footer.vue'),
		'my-slick':  httpVueLoader('./assets/components/my-slick.vue'),
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