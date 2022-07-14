<template>
  <div>
      <div class="chart" :style="cssVars">
        <p>{{text}}</p>
      </div>
  </div>
</template>

<script>
  export default {
    name:'PercentChart',
    props:[
      'percentage',
      'text'
    ],
    computed: {
      cssVars () {
        return{
          '--percent': this.percentage,
        }
      }
    },       
  }
</script>

<style scoped>
  .chart {
    width: 100px;
    height: 100px;
    margin: 1em auto;
    border-radius: 50%;
    background-image: conic-gradient(lightseagreen var(--percent), lightgrey var(--percent));
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .chart::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    background: white;
    border-radius: inherit;
  }

  p {
    position: relative;
    z-index: 1;
    font-size: 2em;
  }
</style>