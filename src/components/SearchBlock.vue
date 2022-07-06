<template>
  <div>
    <div class="search-row row">
      <input type="text" name="city" placeholder="Type in the city...">
      <button> Search </button>
      <button> <img src="../assets/icons/location.png" alt=""> </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SearchBlock"
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