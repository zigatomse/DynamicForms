<template>
  <div ref="df-thead" class="df-thead">
    <GenericTRow
      :rendered-columns="renderedColumns"
      :data-columns="[]"
      :row-data="rowData"
      :actions="actions"
      thead
    />
    <div class="df-separator"/>
  </div>
</template>
<script>
import FilteredActions from '../actions/filtered_actions';
import IndexedArray from '../classes/indexed_array';

import TableRow from './definitions/row';
import RenderMeasured from './render_measure';
import GenericTRow from './trow_generic';

export default {
  name: 'GenericTHead',
  components: { GenericTRow },
  mixins: [RenderMeasured],
  props: {
    renderedColumns: { type: IndexedArray, required: true },
    rowData: { type: TableRow, required: true },
    actions: { type: FilteredActions, default: null },
  },
  methods: {
    onMeasure(refName, maxWidth, maxHeight) {
      this.rowData.setMeasuredHeight(maxHeight);
    },
  },
};
</script>
