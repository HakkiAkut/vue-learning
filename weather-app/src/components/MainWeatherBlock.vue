<template>
  <div>
    <div class="current-weather row">
      <div class="left">
        <span id="condition-text">{{currentWeather.condition}}</span>
        <div class="temperature">
          <img :src="currentWeather.icon" :alt="currentWeather.condition" class="weather-icon">
          <p id="main-text">{{currentWeather.temperature}}</p> <p id="degree-text">°C</p>
        </div>
        
      </div>
      <div class="middle-text">
        <span class="basic-info-text">Humidity %{{currentWeather.humidity}}</span>
        <span class="basic-info-text">Wind {{currentWeather.wind}} m/s</span>
        <span class="basic-info-text">Air pressure {{currentWeather.airPressure}} hPa</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MainWeatherBlock",
    props:["currentWeather",
    ],
  }
</script>

<style scoped>
  @import '../assets/style/basic.css';
  #main-text{
    font-size: 55px;
    margin-top: 0 !important;
    font-weight: 100 !important;
  }
  #condition-text{
    color: rgb(230, 214, 214);
  }
  .current-weather{
    padding:10px;
    justify-content: left  !important;
  }
  .left{
    padding-right: 150px;
    text-align: left;
  }
  .temperature{
    display: flex;
  }
  #degree-text{
    margin-top: 10px !important;
    margin-left: 3px !important;
    font-weight: 700 !important;
  }
  .middle-text{
    margin-top: 30px;
    text-align: left !important;
  }
</style>