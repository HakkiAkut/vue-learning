<template>
  <div class="category-btn" v-on:click="takeQuiz">
    <p>{{this.id}}</p>
  </div>
</template>

<script>
  export default {
    name:'CategoryButton',
    props:['id'],
    methods:{
      takeQuiz:function(){
        this.$router.push({name:'Quiz', params:{ category: this.id}});
      }
    }
  }
</script>

<style scoped>
  .category-btn{
    width: 200px;
  }
  .category-btn{
    width: 200px;
    margin-top:25px;
    margin-bottom: 20px;
    background-color: rgb(193, 241, 241);
    font-size: 20px;
    border-radius: 10px;
    padding: 20px;
    border: 0;
  }
  .category-btn:hover{
    background-color: rgb(192, 219, 148);
  }
</style>