<template>
  <div class="wrapper">
    <div class="item-list">
      <ShoppingItem v-for="item in items" :item="item" :key="item.name" />
    </div>
    <div class="paging-items">
      <div
        class="paging-item"
        :class="[chosen == 1 ? 'chosen-svg' : 'non-chosen']"
        v-on:click="changePage(chosen - 1)"
      >
        <svg
          id="svg1"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-left"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </div>
      <div
        class="paging-item"
        :class="[pageItem == chosen ? 'chosen' : 'non-chosen']"
        v-for="pageItem in paging"
        :key="pageItem"
        v-on:click="changePage(pageItem)"
      >
        <p>{{ pageItem }}</p>
      </div>
      <div
        class="paging-item non-chosen"
        :class="[
          chosen == paging[paging.length - 1] ? 'chosen-svg' : 'non-chosen',
        ]"
        v-on:click="changePage(chosen + 1)"
      >
        <svg
          id="svg2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-right"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingItem from "@/components/ShoppingItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "HomeView",
  components: { ShoppingItem },
  data: () => ({
    items: [],
    paging: [1, 2, 3, 4, 5],
    chosen: 1,
  }),
  created() {
    this.items = this.getItems;
  },
  computed: {
    ...mapGetters(["getItems"]),
  },
  methods: {
    changePage: function (value) {
      if (value != 0 && value != this.paging[this.paging.length - 1] + 1)
        this.chosen = value;
    },
  },
};
</script>

<style scoped>
´ .wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.item-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 20px;
}
.paging-items {
  display: flex;
  justify-content: center;
  border-radius: 10px;
  height: 50px;
  margin: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
}
.paging-item {
  border: 1px solid #deb6ab;
  height: 50px;
  text-align: center !important;
  justify-content: center;
  display: flex;
  align-items: center;
  aspect-ratio: 1;
}
.chosen {
  margin-top: -1px;
  border: 2px solid #ac7088;
}
.non-chosen:hover {
  background-color: #ecccb2;
}
.chosen-svg {
  stroke: #deb6ab !important;
}
#svg1,
#svg2 {
  stroke: #ac7088;
}
</style>
