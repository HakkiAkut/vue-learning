<template>
  <div class="info-column">
    <img :src="item.image" :alt="item.name" />
    <router-link :to="'/'" class="link item-name">{{ item.name }}</router-link>

    <div class="bottom">
      <router-link :to="'/'" class="link item-price"
        >{{ item.price }} TL</router-link
      >

      <button class="btn">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingItem",
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.info-column {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  background-color: #ecccb2;
  border-radius: 5px;
  height: 350px;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
img {
  height: 70%;
  width: 80%;
  transition: transform 0.3s;
}
img:hover {
  z-index: 1;
  transform: scale(1.1);
}
.bottom {
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  flex-direction: row;
  width: 80%;
}
.link {
  text-decoration: none;
}
.item-name {
  font-size: 16px;
}
.item-name:visited {
  text-decoration: none;
}
.item-name:hover {
  color: #ac7088;
}
.item-price {
  font-size: 21px;
}
.item-price:hover {
  color: inherit;
}
.item-price:visited {
  text-decoration: none;
}
.btn {
  width: 50%;
  background-color: #deb6ab;
  border: 1px solid #ac7088;
  border-radius: 10px;
}
.btn:hover {
  background-color: #ac7088;
  color: white;
  opacity: 0.8;
}
</style>
