import { configure } from '@storybook/vue';

import Vue from 'vue';
import VueI18n from 'vue-i18n'
import HighchartsVue from 'highcharts-vue'

Vue.use(VueI18n)
Vue.use(HighchartsVue)

// Import your global components.
import HelloWorld from '../src/components/HelloWorld.vue';
import YieldCurve from '../src/components/yieldCurve/YieldCurve.vue';

// Register global components.
Vue.component('hello-world', HelloWorld);
Vue.component('yield-curve', YieldCurve);

configure(require.context('../src', true, /\.stories\.js$/), module);