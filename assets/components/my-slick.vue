<!-- **************************************
	template
*************************************** -->
<template>
	<div class="autoplay">
		<div><img src="./assets/img/img01.jpg"></div>
		<div><img src="./assets/img/img02.jpg"></div>
		<div><img src="./assets/img/img03.jpg"></div>
		<div><img src="./assets/img/img04.jpg"></div>
		<div><img src="./assets/img/img05.jpg"></div>
	</div>
</template>



<!-- **************************************
	script
*************************************** -->
<script>
	module.exports = {
		/* ==== mounted ==== */
		// DOMが作成された直後
		mounted(){
			// -- jqueryのコードを実行
			$('.autoplay').slick({
				slidesToShow: 3,
				slidesToScroll:1,
				autoplay: true,
				autoplaySpeed: 3000,
				dots:true,
			});
		},
	}
</script>


<!-- **************************************
	style
*************************************** -->
<style>
	.autoplay{
		margin-top: 100px;
	}

	.autoplay img{
		margin:10px;
		width:95%;
		border:0.5px solid #eee;
	}
</style>