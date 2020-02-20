<template>
    <div class="flex">
        <div class="p-4 mb-4 purple-background w-full bg-purple-600 rounded">
            <div class="ml-2 text-left text-white font-semibold">VIDEO ANALYTICS</div>
            <apexchart
                type="radialBar"
                :options="options"
                :series="series"
                class="radial-chart"
            />
            <div class="mt-1 ml-2 text-sm text-left text-white">Most viewed videos last month :</div>
            <ListRowsIcons :rows="rows" />
            <div class="mt-4 mx-2 flex">
                <button class="w-full mx-1 button bg-gray-200 text-gray-700 text-white text-xs rounded-full text-center px-3 py-1">
                    SEE MORE
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import ListRowsIcons from '@/components/metrics/ListRowsIcons.vue';

export default {
  name: 'AccountAnalytics',
  props: ['label', 'percent', 'color'],
  components: {
    ListRowsIcons,
  },
  data() {
    return {
      series: [this.percent],
      options: {
        legend: {
          itemMargin: {
            left: 10,
            top: 40,
            right: 10,
            bottom: 0,
          },
        },
        chart: {
          type: 'radialBar',
        },
        colors: [this.color],
        plotOptions: {
          radialBar: {
            startAngle: -110,
            endAngle: 110,
            track: {
              margin: 15,
              background: '#fff',
              startAngle: -110,
              endAngle: 110,
            },
            dataLabels: {
              name: {
                fontSize: '12px',
                show: true,
                color: '#fff',
              },
              value: {
                fontSize: '25px',
                show: true,
                color: '#fff',
              },
            },
          },
        },
        labels: [this.label],
      },
      rows: [
        { icon: 'el-icon-caret-top', text: 'Cras et nulla et lorem euismod rhoncus', value: '12.1K' },
        { icon: 'el-icon-caret-bottom', text: 'Ut aliquam orci maximus pretium aliquet', value: '11.9K' },
        { icon: 'el-icon-caret-bottom', text: 'Proin gravida sem at lacinia lobortis', value: '8.8K' },
        { icon: 'el-icon-caret-top', text: 'In vestibulum diam ac maximus suscipit', value: '7.4K' },
      ],
    };
  },
};
</script>

<style scoped>
    .rounded {
        border-radius: 25px;
    }
    .purple-background {
        background-color: #6239eb;
    }
    .radial-chart {
        margin-top: -20px;
    }
    .button:hover {
        background-color: #28baa5;
        color: #fff;
    }
    .text-purple {
        color: #6239eb;
    }
    button.active.focus, button.active:focus,
    button.focus, button:active.focus,
    button:active:focus, button:focus {
        outline: none;
        box-shadow: none;
    }
</style>
