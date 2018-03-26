<template>
    <div class="brand">
    	<i class="brand-back" @click='goback'> <- </i>
    	<p class="brand-title">{{articleTitle}}</p>
    	<div class="brand-item"  @click='showtap'> =
    		<section v-if='ishow'>
				<a to="#top">顶部</a>
				<a href="#replies">评论区</a>
				<a href="#comment">写评论</a>
				<router-link to='/'>返回首页</router-link>
	    	</section>
    	</div>
    </div>
</template>
<script>
	export default{
		name:'brand',
		props:['articleTitle'],
		data(){
			return {
				ishow:false
			}
		},
		methods:{
			goback(){
				this.$router.go(-1)
			},
			showtap(){
				this.ishow=true
			}
		}
	}
</script>
<style>
@import '../style/base/_base.scss';
	.brand{
		height: 40px;
		background:#474A4F;
		display: flex;
		color: white;
		position: fixed;
		align-items: center;
		width: 100%;
		top: 0;
	}
	.brand-item,.brand-back{
		flex: 0 0 30px;
		cursor: pointer;
	}
	.brand-title{
		flex: 1;
		align-items: center;
	    justify-content: center;
	    display: flex;
	}
	.brand-item{
		position: relative;

	}
	.brand-item section{
		    position:fixed;
    right: 5px;
    top: 23px;
    width: 100px;
    text-align: center;
    background:white;
    height: 153px;
    border:1px solid #ccc;
	}
	.brand-item>section *{
		display: block;
		color: #666666;
		margin:14px auto 14px auto;
	}
</style>