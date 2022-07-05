<template>
  <div>
    <div class="search-row row">
      <input type="text" name="city">
      <button> search </button>
      <button> location </button>
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
    margin: 0px 100px;
  }
</style>