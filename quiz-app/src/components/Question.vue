<template>
  <div id="question-container">
    <span class="question-text">{{index + 1}}. {{question.text}}</span>
    <Answer :answerText="question.answer_a" :selected="checkAnswer('answer_a')" v-on:selection="selection($event)" id='answer_a'/>
    <Answer :answerText="question.answer_b" :selected="checkAnswer('answer_b')" v-on:selection="selection($event)" id='answer_b'/>
    <Answer :answerText="question.answer_c" :selected="checkAnswer('answer_c')" v-on:selection="selection($event)" id='answer_c'/>
    <Answer :answerText="question.answer_d" :selected="checkAnswer('answer_d')" v-on:selection="selection($event)" id='answer_d'/>
  </div>
</template>

<script>
  import Answer from './Answer.vue'
  export default {
    name: "Question",
    props: [
      "question", 
      "index"
    ],
    components: { 
      Answer 
    },
    methods:{
      checkAnswer:function(value){
        if(this.question.selected_answer == value){
          return true;
        }
        return false;
      },
      selection:function(answer){
        this.$emit('answerSelection', [this.index, answer]);
      }
    }
}
</script>

<style scoped>
#question-container{
  margin: 15px 0;
  background-color: rgb(222, 241, 237);
  border-radius: 15px;
  width: 800px;
  text-align: left;
  padding: 10px 10px 10px 25px;
}
.question-text{
  font-size: 24px;
}
</style>