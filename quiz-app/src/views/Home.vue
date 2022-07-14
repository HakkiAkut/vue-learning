<template>
  <div class="wrapper">
    <h1>Please choose a category</h1>
    <div class="wrapper column">
      <div v-for="category in categories">
        <CategoryButton :id="category"/>
      </div>
    </div>
  </div>
</template>

<script>
  import CategoryButton from '../components/CategoryButton.vue'
  export default {
    name:'Home',
    components:{
      CategoryButton
    },
    data: () => ( {
      categories:[
        'Linux',
        'DevOps',
        'Bash',
        'Docker',
      ]
    })
  }
</script>

<style scoped>
  @import '../assets/styles/basic.css';
  h1{
    padding-top: 30px;
  }
</style>