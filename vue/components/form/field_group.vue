<template>
  <div :class="cssClasses">
    <div class="card">
      <div class="card-header">
        {{ def.title }}
      </div>
      <div class="card-body">
        <FormLayout :uuid="def.uuid" :record="data" :rows="def.layout.rows"/>
      </div>
      <div v-if="def.footer" class="card-footer">
        {{ def.footer }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormFieldGroup',
  components: {
    FormLayout: () => import('./layout'),
    // DFWidgetInput,
    // DFWidgetPassword,
    // DFWidgetCKEditor,
    // DFWidgetSelect,
    // DFWidgetCheckbox,
    // DFWidgetFile,
    // DFWidgetPlaceholder,
    // DFWidgetDatetime,
  },
  props: {
    field: { type: Object, required: true },
    payload: { type: null, required: true },
    errors: { type: Object, required: true },
    showLabelOrHelpText: { type: Boolean, default: true },
    cssClasses: { type: String, default: 'col' },
  },
};
</script>

<style>
label {
  margin-inline-end: .5em;
}
</style>
