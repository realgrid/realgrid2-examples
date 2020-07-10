<template>
  <div class="real">
    <div id="realgrid" style="width: 100%; height: 400px"></div>
    <button @click="loadData">load data~~!!</button>
  </div>
</template>


<script>
import { GridView, LocalDataProvider } from 'realgrid';
import { columns, fields, rows } from './realgrid-data';

let gridView = GridView; 
let dataProvider = LocalDataProvider;

export default {
  name: 'RealGrid',
  data: function () {
      return {
          
      }
  },
  methods: {
      loadData: function() {
          dataProvider.setRows(rows);
      }
  },
  mounted() {
    dataProvider = new LocalDataProvider(false);
    gridView = new GridView("realgrid");
    gridView.setDataSource(dataProvider);

    dataProvider.setFields(fields);
    gridView.setColumns(columns);
  }
}
</script>
