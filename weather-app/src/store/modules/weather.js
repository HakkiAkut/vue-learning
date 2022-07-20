import axios from "axios";
const state = {
  city:'Paris',
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
};
const getters = {
  getCurrentWeather: (state) => state.weather.current,
  getForecastWeather: (state) => state.weather.forecast,
  getCity: (state) => state.city,
};
const mutations = {
  setWeather: (state, data) => {
    var currentHour = parseInt(new Date().getHours());
    state.weather.current={
        condition: data.current.condition.text,
        icon:data.current.condition.icon,
        temperature:data.current.temp_c,
        humidity:data.current.humidity,
        wind:data.current.wind_kph,
        airPressure: data.current.pressure_mb,
    };
    state.weather.forecast=[]
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
        state.weather.forecast.push(add);
    }
    console.log(state.weather)
  },
  setCity : (state, city) => {
    state.city = city;
    console.log("new city: " + state.city)
  }
};
const actions = {
  fetchWeather: async ({ commit }) => {
    const client = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
      params:{
        key:process.env.VUE_APP_API_KEY,
        q:state.city,
        days:'1',
        aqi:'no',
        alerts:'no'
      }
    });
    const response = await client.get();
    commit("setWeather", response.data);
    console.log(response.data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
