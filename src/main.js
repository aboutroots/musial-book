import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VTooltip from 'v-tooltip';
import Paginate from 'vuejs-paginate';
import store from './store';

Vue.use(VTooltip);
import Popover from './components/Popover.vue';
Vue.component('popover', Popover);
Vue.component('paginate', Paginate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
