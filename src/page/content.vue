<template>
	<div>
		 <div class="tab">
         	<span value="all" @click='changetab("all")'>全部</span>
         	<span value="good" @click='changetab("good")'>精华</span>
         	<span value="weex" @click='changetab("weex")'>weex</span>
         	<span value='share' @click='changetab("share")'>分享</span>
         	<span value="ask" @click='changetab("ask")'>问答</span>
         	<span value="job" @click='changetab("job")'>招聘</span>
         </div>
	    	<div  class="item">
	    		<router-link v-for='i in site'  :to="'/topic/'+i.id" v-bind:key="i.id">
	    			<img :src="i.author.avatar_url" alt="" class="pic">
	    			<div class="s-right">
					    <p>{{i.title}}</p>
						<div>
							<i></i>
							<span>回复数{{ i.reply_count}}</span>
							<span>主题：{{i.tab}}</span>
						</div>
		    		</div>
	    		</router-link>
	    	</div>
	    	<div v-if='flag'>
			 下拉刷新
	    	</div>
	    	<div v-if="nomore">
      			<strong>暂无话题</strong>
   			</div>
	</div>
</template>
<script>
 import axios from 'axios';
	export default{
		data(){
			return {
				site:[],
				thisval:'',
				page:1,
				flag:false,
				nomore:false
			}
		},
		created(){
			this.getData()
			let _this=this
			window.onscroll=function(){
				_this.setpage()
			}
		},
		methods:{
			//tab切换
			changetab(val){
				this.thisval=val;
				axios.get('api/v1/topics?tab='+val+'&limit=10')
				.then(res=>{
						this.site=res.data.data;
						this.page=1;
				 })
			},
			getData(){
				axios.get('/api/v1/topics?tab=all&limit=10')
				.then( res=> {	this.site=res.data.data;}
				)
			},
			setpage(){
			let arr = []
			this.flag=true;
	 		if(document.body.scrollTop + window.innerHeight >= document.body.offsetHeight){
	 			axios.get('/api/v1/topics?tab='+this.thisval+'&page='+(++this.page)+'&limit=10')
			 		.then(
			 			res=>{
			 				if(res.data.data!=''){
			 						arr=res.data.data;
			 						 this.site=[...this.site,...arr]
			 						 arr = []
			 						 this.flag=false;
			 				}else{

			 				  this.nomore=true
			 				}
			 			}
			 		)
			 		.catch(err=>{
			 			console.log(err)
			 		})
			 }
	 	   }
		}
	}
</script>
<style lang="scss" scoped>
	.tab{
		display: flex;
		width: 100%;
		align-items: center;
		background: #474A4F;
		height: 40px;
		position: fixed;
		left:0;
		top:40px;
		width:100%;
		 span{
			flex: 1;
			display: flex;
			justify-content: center;
			color: white;
			cursor: pointer;
	   }
	}
	.pic{
		width:40px;
		height: 40px;
		float: left;
		margin-right: 10px;
	}
	.s-right{
		float: left;
	}
	.item{
		margin-top:80px;
	}
	.item>a{
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    border-bottom: 1px solid #ccc;
	    padding: 10px;
	     height: 86px;
        box-sizing: border-box;
        color: #666666;
	}
</style>