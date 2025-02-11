import axios from 'axios';
import $ from 'jquery';
import Vue from 'vue';
import VueObserveVisibility from 'vue-observe-visibility';

import DFTable from './components/dftable.vue';
import ModalHandler from './components/modalhandler.vue';
import DynamicForms from './dynamicforms';
import Example from './examples/example.vue';

Vue.config.productionTip = false;
Vue.use(VueObserveVisibility);
Vue.component(DFTable.name, DFTable);
Vue.component(Example.name, Example);
Vue.component(ModalHandler.name, ModalHandler);

// const createTable = (elementId, configuration) => new Vue({
//   render: (h) => h(Table, {
//     props: {
//       configuration,
//     },
//   }),
// }).$mount(`#${elementId}`);

const createModal = (elementId) => new Vue({
  el: `#${elementId}`,
  components: { ModalHandler },
  template: '<ModalHandler></ModalHandler>',
});

const getComponentDef = (url, callback) => {
  axios
    .get(url, { headers: { 'x-viewmode': 'TABLE_ROW', 'x-pagination': 1, 'x-df-component-def': true } })
    .then((res) => { callback(res.data); })
    // eslint-disable-next-line no-alert
    .catch((err) => { alert(err.data); });
};

const createApp = (elementId, template, props, modalId = null) => {
  if (typeof window.dynamicforms === 'undefined') {
    window.dynamicforms = {};
  }
  if (!DynamicForms.dialog && modalId) {
    createModal(modalId);
  }
  return new Vue({
    el: `#${elementId}`,
    components: { DFTable, Example },
    data() {
      return props;
    },
    template,
  });
};

// This is exposed so that the base page template may use jQuery. Probably soon won't be needed
window.$ = $;
window.jQuery = window.$;

// Standard entry points to our Vue app. createApp initializes the Vue app and getComponentDef retrieves any definition
window.createApp = createApp;
window.getComponentDef = getComponentDef;

export { createModal, createApp };
