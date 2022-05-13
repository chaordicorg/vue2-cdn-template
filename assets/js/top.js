/*
 * top.js
 */
var app = new Vue({
	el: '#app',

	/* ==== data ==== */
	// -- リアクティブなデータを登録
	data(){
		return{
			pagetitle: "CDN版Vue2の雛形",
			win_width: 0,
		};
	},

	/* == mounted == DOMが作成された直後 */
	mounted(){

		// -- Windowのサイズ変化を監視
		const _this = this;
		const resizeObserver = new ResizeObserver(entries => {
			for (let entry of entries) {
				_this.win_width = entry.contentRect.width;
			}
		});
		resizeObserver.observe(document.querySelector('body'));
	},

	/* == watch == 監視 */
	watch: {

		// -- this.win_widthの値が変化したら
		win_width(){
			//alert('リサイズしました幅：' + this.win_width);
		},
	},

	/* ==== components ==== */
	// -- 単一ファイルコンポーネントの登録
	components: {
		'my-header': httpVueLoader('./common/components/my-header.vue'),
		'my-footer': httpVueLoader('./common/components/my-footer.vue'),
		'my-slick':  httpVueLoader('./assets/components/my-slick.vue'),
		'my-movies': httpVueLoader('./assets/components/my-movies.vue'),
	},

});