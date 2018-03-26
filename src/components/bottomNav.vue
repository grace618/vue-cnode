<template>
	<div class="nav-bottom">
	     <router-link to="/">首页</router-link>
       <router-link to="/message">信息</router-link>
       <router-link to="/login">我的</router-link>
       <router-link to="more">更多</router-link>
	</div>
</template>
<script>
   export default{
    name:'navBottom',
    data(){
      return {
      	msg:'HelloWorld'
      }
    },
   	created(){

   	},
     method:{

      }
   }
</script>
<style>
   *{
    padding: 0;
    bottom: 0;
   }
  .nav-bottom{
    width: 100%;
    border-top: 1px solid #ccc;
    position: fixed;
    bottom: 0;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    display: -webkit-flex;
    background: white;
  }
  /*要水平居中a标签里面的内容，a就变成了父容器*/
  .nav-bottom a{
    flex: 1;
    text-decoration: none;
     display: flex;
    justify-content: center;
  }
</style>