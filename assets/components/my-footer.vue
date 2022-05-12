<!-- **************************************
	template
*************************************** -->
<template>
	<footer>
		<h1>©FOOTER 2022-</h1>
	</footer>
</template>



<!-- **************************************
	script
*************************************** -->
<script>
	module.exports = {
		data: function(){
			return {
				message: 'おやすみ'
			}
		}
	}
</script>



<!-- **************************************
	style
*************************************** -->
<style>
	footer{
        position: fixed;
        bottom: 0; left: 0;
        width: 100%;
		background: #000;
		color: #fff;
        padding: 10px;
	}
	footer h1{
		font-size: 24px;
		line-height:100%;
	}
</style>