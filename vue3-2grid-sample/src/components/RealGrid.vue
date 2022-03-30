<template>
  <div class="real">
    <div :id="gridName" style="width: 100%; height: 400px"></div>
    <button @click="loadData">load data~~!!</button>
  </div>
</template>


<script>
import { GridView, LocalDataProvider } from 'realgrid';
import { columns, fields, rows } from './realgrid-data';

export default {
  name: 'RealGrid',
  props: ["domName"],
  data: function () {
      return {
          gridName: this.domName,
          gv: null,
          dp: null,
      }
  },
  methods: {
      loadData: function() {
          this.dp.setRows(rows);
      }
  },
  mounted() {
    console.log(this.gridName);
    this.dp = new LocalDataProvider(false);
    this.gv = new GridView(this.gridName);
    
    this.gv.setDataSource(this.dp);

    this.dp.setFields(fields);
    this.gv.setColumns(columns);
  }
}
</script>