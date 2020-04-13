<template>
  <div>
    <h3>Yield Curve Chart</h3>
    <highcharts :options="chartOptions" :callback="chartCallback"></highcharts>
  </div>
</template>
<script>
export default {
  name: "YieldCurve",
  props: {
    chartData: []
  },
  data() {
    return {
      chartOptions: {
        series: [
          {            
            data: this.chartData
          }
        ]
      }
    };
  },
  method: {
    chartCallback(params) {
      console.log(params);
    }
  }
};
</script>