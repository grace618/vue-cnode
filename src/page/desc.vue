<template>
<section>
	<brand :articleTitle='mtitle' id="top"></brand>
    <section class="aticlecontent">
    	 <title class="ititle">{{item.title}}</title>
    	<div class="article-desc">
    		<a href="" class="avatar_url"><img :src="item.author.avatar_url" alt=""></a>
    		<div>
    			<span v-if="item.author.loginname!=null">{{item.author.loginname}}</span><span>{{item.create_at}}</span>
    		 </div>
    		<div>最后回复：<span>{{item.last_reply_at}}</span> 浏览量：<span>{{item.visit_count}}</span></div>
    	</div>
    	 <article v-html='item.content' class="a-content">
    	 </article>
		 <div class="num" id='replies'>
		 	<span>{{item.replies.length}}</span>条评论
		 </div>
		<div>
			<ul>
				<li v-for='i in item.replies' class="replies">
					<div>
						<a href="" class="avatar_url"><img :src="i.author.avatar_url" alt=""></a>
						<span v-if="item.author.loginname!=null">{{item.author.loginname}}</span>
					</div>
					<p v-html='i.content'></p>
				</li>
			</ul>
		</div>
    </section>
</section>
</template>
<script>
	import brand from '../components/brand.vue';
	import axios from 'axios';
	export default{
		components:{brand},
		data(){
			return {
				mtitle:'hello?world',
				id: this.$route.params.id,
				item:[]
			}
		},
		created(){
			this.getData();
		},
		methods:{
			getData(){
			axios.get('api/v1/topic/'+this.id)
			.then(res=>{
				this.item=res.data.data;
				this.mtitle=this.item.title
			})
	 	}
	  }
	}
</script>
<style>
@import '../style/base/_base.scss';
	.ititle{
		display: flex;
	    justify-content: center;
	    border-bottom: 1px solid #ccc;
	    height: 50px;
	    align-items: center;

	}
	.article-desc{
       height: 75px;
       border-bottom: 1px solid #ccc;
       box-sizing: border-box;
       padding:10px;
	}
	.avatar_url{
		float: left;
		width: 40px;
		height: 40px;
		display: block;
		margin-right: 10px;
	}
	.avatar_url img{
		width: 100%;
		height: 100%;
	}
	.a-content{
		padding:10px;
		border-bottom: 10px solid #EFF2F7;
	}
	.num{
		border-left: 6px solid #FA8072;
		margin-left: 20px;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #ccc;
	}
	.replies>div{
		clear: both;
        padding: 10px 0 0 10px;
        line-height: 40px;
        height: 40px;
	}
	.replies{
		border-bottom: 1px solid #ccc;
	}
	.aticlecontent{
		margin-top:40px;
	}
</style>