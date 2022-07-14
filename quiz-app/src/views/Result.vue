<template>
  <div class="wrapper column">
    <div class="result-container">
      <h1>RESULT </h1>
      <PercentChart :percentage="percentage" :text="result" color='red'/>
      <button class="home-btn" v-on:click="goHome">take another quiz</button>
    </div>
  </div>
</template>

<script>
  import PercentChart from '../components/PercentChart.vue';
  export default {
    name:'Result',
    data: () => ( {
      result:'',
      percentage:'80%',
    }),
    components:{
      PercentChart
    },
    methods:{
      goHome:function(){
        this.$router.push('/');
      }
    },
    created() {
      var questions = this.$route.params.data;
      var totalQuestion = 0;
      var trueAnswer =0;
      questions.forEach(element => {
        totalQuestion++;
        if(element.real_answer == element.selected_answer){
            trueAnswer++;
        }
      });
      
      var percent = trueAnswer/totalQuestion;
      this.percentage=percent*100+'%';
      this.result = trueAnswer + '/' + totalQuestion;
      
    },
  }
</script>

<style scoped>
  @import '../assets/styles/basic.css';
  .result-container{
    background-color: rgb(222, 241, 237);
    border-radius: 15px;
    margin: 15px 0;
    width: 450px;
    height: 320px;
  }
  .home-btn{
    width: 200px;
    margin-top:25px;
    margin-bottom: 20px;
    background-color: rgb(142, 235, 235);
    font-size: 20px;
    border-radius: 10px;
    padding: 20px;
    border: 0;
  }
  .home-btn:hover{
    background-color: rgb(192, 219, 148);
  }
</style>