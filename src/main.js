import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VTooltip from 'v-tooltip';

Vue.use(VTooltip);
import Popover from './components/Popover.vue';
Vue.component('popover', Popover);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
