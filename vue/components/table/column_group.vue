<template>
  <div>
    <div v-for="(row, row_index) in column.rows" :key="row_index" class="sub-row">
      <GenericColumn
        v-for="field in row.fields"
        :key="field.name"
        :column="field"
        :row-data="rowData"
        :thead="thead"
        :actions="actions"
      />
    </div>
  </div>
</template>

<script>
import FilteredActions from '../actions/filtered_actions';

import TableColumn from './definitions/column';
import RenderMeasured from './render_measure';

export default {
  name: 'ColumnGroup',
  mixins: [RenderMeasured],
  props: {
    thead: { type: Boolean, default: false }, // is this row rendered in thead section
    column: { type: TableColumn, required: true },
    rowData: { type: Object, required: true },
    actions: { type: FilteredActions, default: null },
  },
  methods: {
    onMeasure(refName, maxWidth) {
      if (refName === 'column') {
        this.column.setMaxWidth(maxWidth);
      }
    },
  },
};
</script>
