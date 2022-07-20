<template>
  <div>
    <div>update interval: {{ selected }}</div>
    <select v-model="selected">
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <div class="grid-container">
      <CurrencyContainer v-for="item in getCurrencies" :data="item"/>
    </div>
  </div>
</template>

<script>
  import CurrencyContainer from "@/components/CurrencyContainer.vue";
  import { mapActions, mapGetters, mapMutations } from "vuex";
  export default {
    name:"Home",
    data() {
      return {
        selected: 10,
        interval:'',
        options: [
          { text: '5 sec', value: 5 },
          { text: '10 sec', value: 10 },
          { text: '20 sec', value: 20 }
        ]
      }
    },
    components:{
      CurrencyContainer
    },
    methods:{
      ...mapActions(["fetchCurrency"]),
      ...mapMutations(["setConvert"]),
    },
    computed:{
      ...mapGetters(["getCurrencies", "getConvert"]),
    },
    created() {
      this.fetchCurrency();
      this.interval = setInterval(() => this.fetchCurrency(), 10000);
    },
    watch:{
      selected:function(val){
        this.selected=val;
        clearInterval(this.interval);
        this.interval = setInterval(() => this.fetchCurrency(), 1000*val);
      }
    }  
  }
</script>

<style scoped>
  @import '../assets/style/basic.css';
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
  }
</style>