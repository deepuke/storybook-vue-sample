import { configure } from '@storybook/vue';

import Vue from 'vue';
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// Import your global components.
import HelloWorld from '../src/components/HelloWorld.vue';

// Register global components.
Vue.component('hello-world', HelloWorld);

configure(require.context('../src', true, /\.stories\.js$/), module);