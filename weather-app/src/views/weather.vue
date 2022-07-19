<template>
  <div class="wrapper">
    <div class="weather-container">
      <SearchBlock :city="city" v-on:changeCity="updateCity($event)"/>
      <div class ="info-text-container">
        <span id="city-name">{{getCity}}</span>
        <span class="basic-info-text">Last updated</span>
        <span class="basic-info-text">{{getDate()}}</span>
      </div>
      <MainWeatherBlock :currentWeather="getCurrentWeather"/>
      <span class="basic-info-text forecast-text">Check the forecast for the upcoming hours</span>
      <div class="row">
        <div v-for="item in getForecastWeather">
          <WeatherInfoBlock :forecast="item"/>
        </div>
      </div>
    </div>      
  </div>
</template>

<script>
import MainWeatherBlock from '../components/MainWeatherBlock.vue'
import WeatherInfoBlock from '../components/WeatherInfoBlock.vue'
import SearchBlock from '../components/SearchBlock.vue'
import { mapActions, mapGetters, mapMutations } from "vuex";
  export default {
    name: 'Weather',
    components:{
      MainWeatherBlock,
      WeatherInfoBlock,
      SearchBlock
    },
    data: () => ( {
      city: 'Oslo',
    }),
    methods:{
      ...mapActions(["fetchWeather"]),
      ...mapMutations(["setCity"]),
      getDate:function(){
        var date = new Date().toLocaleString();
        return date;
      },
      updateCity:function(value){
        this.setCity(value);
        this.fetchWeather();
      },
    },
    created(){
      this.fetchWeather();
    },
    computed: {
    ...mapGetters(["getCurrentWeather","getForecastWeather", "getCity"]),
    },
  }
</script>

<style>
  @import '../assets/style/basic.css';
  @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
  body {
    height: 100%;
    background-image: url('../assets/images/background.jpg');
    background-repeat: no-repeat;
    background-size: contain;
  }
  #city-name{
    padding-top: 10px;
    font-size: 30px !important;
    font-weight: 100;
    color: rgb(231, 112, 90);
  }
  .wrapper{
    height: 1000px;
    display: flex;
    justify-content: center;
  }
  .weather-container{
    width: 500px;
    height: 450px;
    padding: 20px 10px;
    border-radius: 15px;
    color: white;
    background-image: linear-gradient(#81416d,#663185,#2041a3);
    opacity: .96;
	  box-shadow: 18px 18px 18px -6px #00000063;
  }

  .info-text-container{
    padding:10px;
    text-align: left;
  }

</style>