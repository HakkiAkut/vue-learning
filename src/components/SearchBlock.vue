<template>
  <div>
    <div class="search-row row">
      <input type="text" v-model="city1" placeholder="Type in the city..." @keyup.enter="newCity">
      <button v-on:click="newCity"> Search </button>
      <button> <img src="../assets/icons/location.png" :alt="city"> </button>
    </div>
  </div>
</template>

<script>
  export default {
    props:['city'],
    data: () => ( {
      city1: ''
    }),
    name: "SearchBlock",
    methods:{
      newCity:function(){
        this.$emit('changeCity',this.city1);
        this.city1='';
      }
    }
  }
</script>

<style scoped>
  @import '../assets/style/basic.css';
  .search-row{
    margin: 0px 10px;
  }
  img {
    height: 17px;
    width: 10px;
  }
  button {
    font-family: 'Quicksand', sans-serif !important;
    min-height: 29px;
    padding: 2px 30px 3px 30px;
    margin: 0 6px;
    background-color: #d682bbef;
    border: 0;
    color: rgb(230, 214, 214);
    border-radius: 3px;
    font-size: 11px;
    font-weight: 300;
  }
  input[type=text]{
    width: 450px;
    height:26px;
    border-radius: 3px;
    border: 0;
    padding-left: 8px;
    margin-right: 7px;
  }
</style>