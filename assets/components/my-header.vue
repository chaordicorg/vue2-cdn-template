<!-- **************************************
	template
*************************************** -->
<template>
	<header>
		<div class="header">
			<h1>{{pagetitle}} - {{pageid}}</h1>
			<div class="btn-menu" @click="menu_open"><span class="material-icons">menu</span></div>
		</div>
		<menu v-if="isopen_menu">
			<ul>
				<li>menu-1</li>
				<li>menu-2</li>
				<li>menu-3</li>
				<li>menu-4</li>
				<li>menu-5</li>
			</ul>
		</menu>
	</header>
</template>



<!-- **************************************
	script
*************************************** -->
<script>
	module.exports = {
		data: function(){
			return {
				isopen_menu: false,
			}
		},

		/* ==== props ==== */
		// -- テンプレートタグの属性を登録
		props: ['pagetitle', 'pageid'],

		/* ==== methods ==== */
		methods: {
			menu_open(){
				if (this.isopen_menu){
					this.isopen_menu = false;
				}else{
					this.isopen_menu = true;
				}
			}
		}

	}
</script>



<!-- **************************************
	style
*************************************** -->
<style>
	header{
		position: fixed;
		top: 0; left: 0;
		width:100%;
		box-sizing:border-box;
		height: 100%;
	}

	header .header{
		position: relative;
		background: #000;
		color: #fff;
		padding:10px;
	}

	header .header h1{
		font-size: 24px;
		line-height:100%;
		padding-left:20px;
		text-align: center;
	}

	header .header .btn-menu{
		position: absolute;
		top: 0;
		left:0;
		padding: 10px;
	}

	header .header .btn-menu span{
		font-size: 32px;
		line-height:100%;
	}

	header menu{
		background: #000;
		color: #fff;
		font-size: 24px;
		line-height:200%;
		margin: 0;
		padding: 0;
		padding:10px;
	}

	header menu li{
		cursor:pointer;
	}

</style>