<!-- **************************************
	template
*************************************** -->
<template>
	<section>
		<h2>my-movies.vue</h2>

		<ul>
			<li v-for="item in owls" @click="modal_open(item.id)">
				<p><img :src="item.id | thumbnailUrl"></p>
				<p>{{ item.title }}</p>
			</li>
		</ul>

		<!-- modal -->
		<div id="modal" v-bind:class="{ onmodal: modal_show, offmodal: !modal_show }" @click="modal_close()">
			<div class="modal-wrap"></div>
			<div class="modal-contents-wrap">
				<div class="modal-contents">
					<button id="cboxClose" v-on:click="modal_close()">close</button>
					<div class="modal-item" v-html="modal_embed"></div>
				</div>
			</div>
		</div>

	</section>
</template>

<!-- **************************************
	script
*************************************** -->
<script>
	module.exports = {

		/* == data == リアクティブ・データ登録 */
		data(){
			return {
				owls: [],
				modal_show: false,
				modal_embed: "",
			}
		},

		/* == created == DOMが作成される前 */
		created(){
			var _this = this;
			axios.get('./assets/dat/owls.json')
			.then(function(response){
				_this.owls = response.data;
			})
			.catch(function(error) {
				console.log(error);
			});
		},

		/* == filters == */
		filters: {
			thumbnailUrl(id){
				return 'https://img.youtube.com/vi/' + id + '/mqdefault.jpg';	
			},
		},

		/* == methods == 関数を登録 */
		methods: {
			modal_open(id){
				this.modal_embed = '<iframe width="768" height="432" src="https://www.youtube.com/embed/' + id + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
				this.modal_show = true;
			},

			modal_close(){
				this.modal_show = false;
				this.modal_embed = "";
			}
		}
	}
</script>

<!-- **************************************
	style
*************************************** -->
<style scoped>
	ul{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	li{
		width: 320px;
		box-sizing:border-box;
		padding:5px;
		cursor:pointer;
	}
	
	li img{
		width: 100%;
	}
</style>