import Vue from 'vue';

import DemoApp from './demo_app';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: { DemoApp },
  render: (r) => r(DemoApp),
}).$mount('body');
