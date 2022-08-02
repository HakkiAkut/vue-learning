const state = {
  items: [
    {
      name: "Stardew Valley",
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/413150/capsule_616x353.jpg?t=1608624324",
      price: "19.20",
    },
    {
      name: "Red Dead Redemption",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/capsule_616x353.jpg?t=1656615305",
      price: "149.50",
    },
    {
      name: "Civilization IV",
      image:
        "https://cdn1.epicgames.com/cd14dcaa4f3443f19f7169a980559c62/offer/EGS_SidMeiersCivilizationVI_FiraxisGames_S1-2560x1440-2fcd1c150ac6d8cdc672ae042d2dd179.jpg",
      price: "219.00",
    },
    {
      name: "Subnautica",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/264710/capsule_616x353.jpg?t=1652393192",
      price: "25.00",
    },
    {
      name: "God of War",
      image:
        "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/LsaRVLF2IU2L1FNtu9d3MKLq.jpg",
      price: "329.00",
    },
    {
      name: "Shadow of War",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/356190/header.jpg?t=1575317164",
      price: "67.00",
    },
    {
      name: "Loop Hero",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1282730/capsule_616x353.jpg?t=1633530897",
      price: "30.00",
    },
    {
      name: "Grim Dawn",
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/219990/header.jpg?t=1639672339",
      price: "40.00",
    },
    {
      name: "Divinity Original Sin 2",
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/435150/header.jpg?t=1631177562",
      price: "75.00",
    },
  ],
};
const getters = {
  getItems: (state) => state.items,
};
const mutations = {};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
