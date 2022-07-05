<template>
  <div class="wrapper">
    <div class="weather-container">
      <SearchBlock/>
      <div class ="info-text-container">
        <span id="cityName">Oslo</span>
        <span class="basic-info-text">last update</span>
        <span class="basic-info-text">Yesterday</span>
      </div>
      <MainWeatherBlock condition="windy" temperature="15" humidity="49" wind="1.31" airPressure="1008"/>
      <span class="basic-info-text">Check the forecast for the upcoming hours</span>
      <div class="row">
        <WeatherInfoBlock time="17.00" temperature="15C 12C"/>
        <WeatherInfoBlock time="18.00" temperature="18C 14C"/>
        <WeatherInfoBlock time="19.00" temperature="25C 22C"/>
        <WeatherInfoBlock time="20.00" temperature="22C 20C"/>
        <WeatherInfoBlock time="21.00" temperature="20C 17C"/>
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
  .wrapper{
    display: flex;
    justify-content: center;
  }
  .weather-container{
    padding:10px;
    width: 700px;
    height: 450px;
    padding: 20px 20px;
    border: 1px solid #333;
  }

  .info-text-container{
    padding:10px;
    text-align: left;
  }
  span {
    display: block;
  }
  .current-weather{
    padding:10px;
  }
</style>