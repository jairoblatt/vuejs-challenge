import Vue from 'vue';
import router from './router';
import App from './App.vue';
import VueMeta from 'vue-meta';
import store from './store'
import vmodal from 'vue-js-modal'


// Global components
import './components';
Vue.config.productionTip = false;

// Icons by material desing
import '@mdi/font/css/materialdesignicons.min.css';

// Plugins
Vue.use(VueMeta)
Vue.use(vmodal)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')