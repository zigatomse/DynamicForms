<template>
  <div>
    <b-navbar toggleable="lg" variant="primary" type="dark">
      <b-navbar-brand href="#">DynamicForms{{ title ? ` - ${title}` : '' }}</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"/>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Examples">
            <b-dropdown-item v-for="example in examples" :key="example.name" :to="example.path">
              {{ example.title }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Theme" right>
            <b-dropdown-item
              v-for="theme in themes"
              :key="theme"
              href="#"
              class="text-capitalize"
              @click="$emit('theme-changed', theme)"
            >
              {{ theme }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <slot name="main-component"/>
  </div>
</template>
<script>
import { BootstrapVue } from 'bootstrap-vue';
import Vue from 'vue';

import * as BootstrapComponents from '../../components/bootstrap';

import BootstrapViewMode from './view_mode';

Vue.component(BootstrapViewMode.name, BootstrapViewMode);

Object.values(BootstrapComponents).map((component) => Vue.component(component.name, component));

Vue.use(BootstrapVue);
export default {
  name: 'BootstrapApp',
  props: {
    title: { type: String, required: true },
    themes: { type: Array, required: true },
    examples: { type: Array, required: true },
  },
  emits: ['theme-changed'],
};
</script>

<style scoped>
  @import '~bootstrap/dist/css/bootstrap.css';
  @import '~bootstrap-vue/dist/bootstrap-vue.css';
</style>
