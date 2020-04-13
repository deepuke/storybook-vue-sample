<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>
<script>
export default {
  name: "YieldCurve",
  props: {
    chartData: {
      type: Array,
      default: () => {
        return [
          { y: 0.3, x: 1 },
          { y: 0.9, x: 2 }
        ];
      }
    }
  },

  data() {
    return {
      chartOptions: {
        chart: {
          height: 300
        },
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

<style lang="sass" scoped>

</style>