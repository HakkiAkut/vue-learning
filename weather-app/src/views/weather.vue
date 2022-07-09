<template>
  <div class="wrapper">
    <div class="weather-container">
      <SearchBlock :city="city" v-on:changeCity="updateCity($event)"/>
      <div class ="info-text-container">
        <span id="city-name">{{city}}</span>
        <span class="basic-info-text">Last updated</span>
        <span class="basic-info-text">{{getDate()}}</span>
      </div>
      <MainWeatherBlock :currentWeather="weather.current"/>
      <span class="basic-info-text forecast-text">Check the forecast for the upcoming hours</span>
      <div class="row">
        <div v-for="item in weather.forecast">
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
  export default {
    name: 'Weather',
    components:{
      MainWeatherBlock,
      WeatherInfoBlock,
      SearchBlock
    },
    data: () => ( {
      api:'http://api.weatherapi.com/v1/forecast.json?',
      key:'6b6a60e358af44c98a090144220707',
      city: 'Oslo',
      weather:{
        current:{
          condition:'',
          temperature:'',
          humidity:'',
          wind:'',
          airPressure:'',
        },
        forecast:[]
      },
    }),
    methods:{
      getDate:function(){
        var date = new Date().toLocaleString();
        return date;
      },
      updateCity:function(value){
        this.city=value;
        this.getWeather();
      },
      getWeather: function(){
        var url= this.api +'key=' + this.key +'&q='+this.city+ '&days=1&aqi=no&alerts=no'
        fetch(url
          ).then(response => response.json())
          .then(data => {
            console.log(data);
            var currentHour = parseInt(new Date().getHours());
            this.weather.current={
              condition: data.current.condition.text,
              icon:data.current.condition.icon,
              temperature:data.current.temp_c,
              humidity:data.current.humidity,
              wind:data.current.wind_kph,
              airPressure: data.current.pressure_mb,
            };
            this.weather.forecast=[]
            for(var i=1; i<=5;i++){
              if(currentHour+i==24){
                break;
              }
              var forecast= data.forecast.forecastday[0].hour
              var add = {
                time: forecast[currentHour+i].time.split(" ")[1],
                temperature: forecast[currentHour+i].temp_c,
                condition: forecast[currentHour+i].condition.text,
                icon: forecast[currentHour+i].condition.icon
              }
              this.weather.forecast.push(add);
            }
            });
      }
    },
    beforeMount(){
      this.getWeather();
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