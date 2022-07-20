<template>
  <div class="currency-container">
    <p>{{data.CurrencyName}}</p>
    <div class="left">
      <p> Buy: {{data.ForexBuying}} TRY</p>
      <p> Sell: {{data.ForexSelling}} TRY</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CurrencyContainer",
    props:["data"]      
  }
</script>

<style scoped>
  @import '../assets/style/basic.css';
  .currency-container{
    border: 1px solid black;
    margin: 10px;
    padding: 5px;
    max-width: 100;
    border-radius: 10px;
    box-shadow: 18px 18px 18px -6px #00000063;
  }
  .left{
    text-align: left;
  }
</style>