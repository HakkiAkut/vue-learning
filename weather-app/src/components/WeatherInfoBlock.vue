<template>
  <div>
    <div class="column">
      <span>{{forecast.time}}</span>
      <img :src="forecast.icon" :alt="forecast.condition" class="weather-icon">
      <span>{{forecast.temperature}} °C</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "WeatherInfoBlock",
        props:['forecast', 
        ]
    }
</script>

<style scoped>
  @import '../assets/style/basic.css';

  span {
    display: block;
  }
</style>