<template>
  <div id="realgrid" style="width: 100%; height: 400px"></div>
  <button @click="loadData">데이터 생성하기</button>
</template>

<script>
import { GridView, LocalDataProvider } from "realgrid";
import { columns, fields, rows } from "./realgrid-data";
let gridView = GridView;
let dataProvider = LocalDataProvider;
export default {
  name: "RealGrid",
  setup() {
    return {};
  },
  created: function () {
    // eslint-disable-next-line no-undef
    functionOutsideVue(this); // function outside Vue scope called
  },
  methods: {
    callbackFunctionInsideVueComponent(itemIndex) {
      var v = gridView.getValues(itemIndex);
      alert(v.KorName);
    },
    callbackFunctionInsideVueComponent2(itemIndex) {
      var v = gridView.getValues(itemIndex);
      alert(v.Gender);
    },
  },
  mounted() {
    dataProvider = new LocalDataProvider(false);
    gridView = new GridView("realgrid");
    gridView.setDataSource(dataProvider);
    dataProvider.setFields(fields);
    gridView.setColumns(columns);

    gridView.columnByName("Monetary").renderer = {
      type: "html",
      callback: function (grid, cell) {
        //
        var str = `
          <button onclick="globalFunction(${cell.index.itemIndex})">버튼1</button>
          &nbsp;
          <button onclick="globalFunction2(${cell.index.itemIndex})">버튼2</button>
        `;
        return str;
      },
    };
    dataProvider.setRows(rows);
  },
};
window.functionOutsideVue = function (vuecomponent) {
  window.vm2 = vuecomponent;
};
</script>
