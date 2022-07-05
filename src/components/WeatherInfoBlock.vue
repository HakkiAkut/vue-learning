<template>
  <div>
    <div class="column">
      <span>{{time}}</span>
      <img src="../assets/icons/windy.png" alt="windy" class="weather-icon">
      <span>{{temperature}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "WeatherInfoBlock",
        props:['time', 
          'temperature'
        ]
    }
</script>

<style scoped>
  @import '../assets/style/basic.css';

  span {
    display: block;
  }
</style>