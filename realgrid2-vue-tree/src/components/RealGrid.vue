<template>
  <div class="real">
    <div id="realgrid" style="width: 100%; height: 300px"></div>
  </div>
</template>

<script>
import { GridView, LocalDataProvider, TreeView, LocalTreeDataProvider } from 'realgrid';
import { columns, fields, rows} from './realgrid-data';

let treeView = GridView; 
let treeDataProvider = LocalDataProvider;

export default {
  name: 'RealGrid',
  data: function () {
      return {
          
      }
  },
  methods: {
      loadData: function() {
      }   
  },
  mounted() {
    treeDataProvider = new LocalTreeDataProvider(true);
    treeView = new TreeView("realgrid");
    treeView.setDataSource(treeDataProvider);

    treeDataProvider.setFields(fields);
    treeView.setColumns(columns);
  
    treeDataProvider.setRows(rows, "treeId", false, null, "iconField");
  }
}
</script>
