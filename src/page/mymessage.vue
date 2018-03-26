<template>
	<div>
		  <!--  这里碰到一个组件递归调用的问题，因为bottomNav.vue不小心import了message.vue, -->
		  <bottomNav></bottomNav>
	</div>
</template>
<script>
	import bottomNav from '../components/bottomNav.vue'
	export default{
		components:{bottomNav}
	}
</script>