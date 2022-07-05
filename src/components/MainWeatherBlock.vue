<template>
  <div>
    <div class="current-weather row">
      <div class="left">
        <span>{{condition}}</span>
        <div class="row">
          <img src="../assets/icons/windy.png" alt="windy" class="weather-icon">
          <p id="main-text">{{temperature}}</p> <p>C</p>
        </div>
        
      </div>
      <div>
        <span class="basic-info-text">Humidity %{{humidity}}</span>
        <span class="basic-info-text">Wind {{wind}} m/s</span>
        <span class="basic-info-text">Air pressure {{airPressure}} hPa</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MainWeatherBlock",
        props:["condition",
          "temperature",
          "humidity",
          "wind",
          "airPressure"
        ]
    }
</script>

<style scoped>
  @import '../assets/style/basic.css';
  #main-text{
    font-size: 40px;
  }
  .current-weather{
    padding:10px;
    justify-content: left  !important;
  }
  .left{
    padding-right: 150px;
  }
</style>