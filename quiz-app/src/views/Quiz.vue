<template>
  <div class="wrapper column">
    <div  v-for="(question,index) in questions">
      <Question :question="question" :index="index" v-on:answerSelection='answerSelection($event)'/>
    </div>
    <button class="check-result-btn" v-on:click="checkResult">Finish Test</button>
  </div>
</template>

<script>
  import axios from 'axios';
  import Question from '../components/Question.vue'
  export default {
    name:'Quiz',
    components:{
      Question,
    },
    props:['category'],
    data: () => ( {
      api:'https://quizapi.io/api/v1/questions',
      key:'KCyv6VsI6MW2twyh1tTgnVtu5UiGReulZW4rnRlt',
      questions:[],
    }),
    methods:{
      answerSelection:function(param){
        this.questions[param[0]].selected_answer=param[1];
      },
      checkResult:function(){
        this.$router.push({name:'Result', params:{ data: this.questions}});
      }
    },
    mounted(){
      axios.get(this.api,{
        params:{
          apiKey:this.key,
          limit:10,
          category:this.category
        }
      }).then((response)=> {
       response.data.forEach(element => {
        var question={
          text:element.question,
          answer_a:element.answers.answer_a,
          answer_b:element.answers.answer_b,
          answer_c:element.answers.answer_c,
          answer_d:element.answers.answer_d,
          selected_answer:'',
          real_answer: element.correct_answer,
        }
        this.questions.push(question);
       });
      });
    }
  }
</script>

<style scoped>
  @import '../assets/styles/basic.css';
  .wrapper{
    align-items: center;
  }
  .check-result-btn{
    width: 200px;
    margin-top:25px;
    margin-bottom: 20px;
    background-color: rgb(193, 241, 241);
    font-size: 20px;
    border-radius: 10px;
    padding: 20px;
    border: 0;
  }
  .check-result-btn:hover{
    background-color: rgb(192, 219, 148);
  }

</style>