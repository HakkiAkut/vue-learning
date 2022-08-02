<template>
  <header class="header">
    <div class="header-container">
      <div class="icon">Shopping</div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ac7088;
  height: 80px;
}
.header-container {
  width: 1240px;
}
.icon {
  font-size: 50px;
  color: #f5e8c7;
  font-weight: 700;
}
</style>
