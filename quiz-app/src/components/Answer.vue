<template>
  <div v-if="selected" class="answer-container selected">
    <p>{{answerText}}</p>
  </div>
  <div v-else class="answer-container" v-on:click="select">
    <p>{{answerText}}</p>
  </div>
</template>

<script>
  export default {
    name:'Answer',
    props:[
      'id',
      'answerText',
      'selected'
    ],
    methods:{
      select:function(){
        this.$emit('selection',this.id);
      }
    }
  }
</script>

<style scoped>
  .answer-container{
    border: 0.5px solid rgb(178, 233, 181);
    background-color: azure;
    border-radius: 10px;
    margin: 10px;
    padding: 2px 15px;
  }
  .answer-container:hover{
    background-color: rgb(192, 219, 148);
    border: 1px solid rgb(178, 233, 181);
  }
  .selected{
    border: 1px solid rgb(178, 233, 181) !important;
    background-color: rgb(192, 219, 148) !important;
  }
</style>