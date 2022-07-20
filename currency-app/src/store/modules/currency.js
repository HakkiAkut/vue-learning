import axios from "axios";
const state = {
  convert:'USD',
  currency:[]
};
const getters = {
  getCurrencies: (state) => state.currency,
  getConvert: (state) => state.convert,
};
const mutations = {
  setCurrency: (state, currency) =>{
    state.currency= currency.TCMB_AnlikKurBilgileri;
    console.log(state.currency)
  },
  setConvert : (state, convert) => {
    state.convert = convert;
    console.log("new base currency: " + state.currency)
  }
};
const actions = {
  fetchCurrency: async ({ commit }) => {
    const client = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
    });
    const response = await client.get();
    commit("setCurrency", response.data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};