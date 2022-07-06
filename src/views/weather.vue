<template>
  <div class="wrapper">
    <div class="weather-container">
      <SearchBlock/>
      <div class ="info-text-container">
        <span id="city-name">Oslo</span>
        <span class="basic-info-text">Last updated</span>
        <span class="basic-info-text">Tue 5 Jul, 13:16</span>
      </div>
      <MainWeatherBlock condition="windy" temperature="15" humidity="49" wind="1.31" airPressure="1008"/>
      <span class="basic-info-text forecast-text">Check the forecast for the upcoming hours</span>
      <div class="row">
        <WeatherInfoBlock time="17.00" temperature="15°C 12°C"/>
        <WeatherInfoBlock time="18.00" temperature="18°C 14°C"/>
        <WeatherInfoBlock time="19.00" temperature="25°C 22°C"/>
        <WeatherInfoBlock time="20.00" temperature="22°C 20°C"/>
        <WeatherInfoBlock time="21.00" temperature="20°C 17°C"/>
      </div>
    </div>      
  </div>
</template>

<script>
import MainWeatherBlock from '../components/MainWeatherBlock.vue'
import WeatherInfoBlock from '../components/WeatherInfoBlock.vue'
import SearchBlock from '../components/SearchBlock.vue'
  export default {
    name: 'Weather',
    components:{
      MainWeatherBlock,
      WeatherInfoBlock,
      SearchBlock
    }
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