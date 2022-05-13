<!-- **************************************
	template
*************************************** -->
<template>
	<section>
		<h2>my-slick.vue</h2>
		<ul class="autoplay">
			<li><img src="https://img.youtube.com/vi/bt3X8MJgJWo/default.jpg"></li>
			<li><img src="https://img.youtube.com/vi/3CghRBQB0J4/default.jpg"></li>
			<li><img src="https://img.youtube.com/vi/HyqiP-9BDRk/default.jpg"></li>
			<li><img src="https://img.youtube.com/vi/a7qRuUAyqCg/default.jpg"></li>
			<li><img src="https://img.youtube.com/vi/LIzB0atOzRg/default.jpg"></li>
			<li><img src="https://img.youtube.com/vi/Z3APDjieGtk/default.jpg"></li>
			<li><img src="https://img.youtube.com/vi/Vt_Gi5ocXVo/default.jpg"></li>
			<li><img src="https://img.youtube.com/vi/ezaBqCf0hv0/default.jpg"></li>
			<li><img src="https://img.youtube.com/vi/yjQ5v7iS4B8/default.jpg"></li>
			<li><img src="https://img.youtube.com/vi/OMRgRFwcs8U/default.jpg"></li>
			<li><img src="https://img.youtube.com/vi/oKrOgXl-pdA/default.jpg"></li>
			<li><img src="https://img.youtube.com/vi/A6LUPxuy7aA/default.jpg"></li>
			<li><img src="https://img.youtube.com/vi/ruaGD3UiXoE/default.jpg"></li>
		</ul>
	</section>
</template>

<!-- **************************************
	script
*************************************** -->
<script>
	module.exports = {

		/* == props == テンプレートタグの属性を登録 */
		props: ['win_width'],

		/* == mounted == DOMが作成された直後 */
		mounted(){

			// -- jqueryのコードを実行
			$('.autoplay').slick({
				slidesToShow: 5,
				slidesToScroll:1,
				autoplay: true,
				autoplaySpeed: 3000,
				dots:true,
				 responsive: [{
					breakpoint: 640,
					settings: {
						slidesToShow: 3,
					}
				}],
			});

		},

		/* == watch == 監視 */
		watch: {

			// -- this.win_widthの値が変化したら
			win_width(){
				console.log('リサイズしました幅：' + this.win_width);
			},
		},

	}
</script>

<!-- **************************************
	style
*************************************** -->
<style scoped>
	section{
		margin-top: 50px;
	}

	img{
		margin:5px;
		width: 95%;
		border:0.5px solid #eee;
	}
</style>