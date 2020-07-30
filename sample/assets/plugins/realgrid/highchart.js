var ds, grid;
var rows;

var fields = [
    {
      fieldName: "Year",
      dataType: "text"
    }, {
      fieldName: "GDP",
      dataType: "number"
    }, {
      fieldName: "GNI",
      dataType: "number"
    }, {
      fieldName: "PGNI",
      dataType: "number"
    }, {
      fieldName: "DIncome",
      dataType: "number"
    }
];

var columns = [{
  name: "Year",
  fieldName: "Year",
  width: "80",
  header: {
      text: "연도"
  }
}, {
  name: "GDP",
  fieldName: "GDP",
  width: "160",
  header: {
      text: "임직원수"
  },
  styleName: "column-background1"
}, {
  name: "GNI",
  fieldName: "GNI",
  width: "160",
  header: {
      text: "국내선수"
  },
  styleName: "column-background2"
}, {
  name: "PGNI",
  fieldName: "PGNI",
  width: "160",
  header: {
      text: "외국인수"
  },
  styleName: "column-background3"
}, {
  name: "DIncome",
  fieldName: "DIncome",
  width: "160",
  header: {
      text: "감독수"
  },
  styleName: "column-background4"
}];

function loadData(filename, ds) {
    var reqUrl = "/assets/plugins/realgrid/data/" + filename; // for S3
    $.ajax({
        type: "GET",  
        url: reqUrl,
        success: function(response)  
        {
          ds.setRows(response);
          grid.checkRows([0,1,2,3,4,5,6,7]);   
        }   
    });
}

function createGrid(container) {    
    ds = new RealGrid.LocalDataProvider();
    ds.setFields(fields);

    grid = new RealGrid.GridView(container);
    grid.setDataSource(ds);
    grid.setColumns(columns);

    grid.filteringOptions.selector.showButtons = true;
    grid.displayOptions.refreshMode = "visibleOnly";
    grid.displayOptions.emptyMessage = "표시할 데이타가 없습니다.";
    grid.sortingOptions.showSortOrder = true;
    grid.sortingOptions.style = "reverse";
    grid.displayOptions.rowHoverType = "row";    
    grid.displayOptions.rowResizable = true;

    grid.setEditOptions({
        insertable: true,
        appendable : true
    });

    grid.setEditorOptions({
        viewGridInside: true
    })

    grid.onContextMenuPopup = function (grid, x, y, elementName) {
        console.log(arguments);
        // realgrid-utils.js 기본 팝업 메뉴 생성
        setContextMenu(grid);
        
      };
    // realgrid-utils.js 기본 팝업 메뉴 실행
    grid.onContextMenuItemClicked = onContextMenuClick;          

    ds.onRowCountChanged = function () {
      setHiChart(ds);
    };

    gridEvents(grid, ds);
    
    loadData("highchart.json", ds);    

    grid.setFocus();
    setTimeout(function(){grid.setCurrent({itemIndex:0})}, 500);                

};

function setHiChart(provider) {
  var categories = provider.getFieldValues("year");
  var diVal = provider.getFieldValues("DIncome");
  $.each(diVal, function (k, v) {
      if (v == undefined)
          diVal[k] = null;
  });

  $('#container').highcharts({
      title: {
          text: '종사자수 연도별 추이',
          x: -20
          //center
      },
      subtitle: {
          text: 'www.realgrid.com',
          x: -20
      },
      xAxis: {
          categories: categories,
          crosshair: true
      },
      yAxis: [{
          title: {
              text: '임직원수'
          },
          labels: {
              format: '{value}'
          }
      }],
      tooltip: {
          shared: true
          // 한 로우에 여러 컬럼의 값을 표시
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
      },
      series: [{
          type: 'spline',
          name: "소속선수",
          //              data : provider.getFieldValues("GDP"),
          tooltip: {
              valueSuffix: "$ ($100 million)"
          }
      }, {
          type: 'spline',
          name: "국내선수",
          //              data : provider.getFieldValues("GNI"),
          tooltip: {
              valueSuffix: "$ ($100 million)"
          }
      }, {
          type: 'spline',
          name: "외국인수",
          //              data : provider.getFieldValues("PGNI"),
          tooltip: {
              valueSuffix: "$"
          }
      }, {
          type: 'spline',
          name: "감독수",
          //              data : diVal,
          tooltip: {
              valueSuffix: "$"
          }
      }, {
          type: 'pie',
          name: 'Total consumption',
          data: [{
              name: '감독수',
              y: grid.getValue(grid.getCurrent().itemIndex, 1),
              color: Highcharts.getOptions().colors[0]
          }, {
              name: '외국인수',
              y: grid.getValue(grid.getCurrent().itemIndex, 2),
              color: Highcharts.getOptions().colors[1]
          }, {
              name: '국내선수',
              y: grid.getValue(grid.getCurrent().itemIndex, 3),
              color: Highcharts.getOptions().colors[3]
          }, {
              name: '소속선수',
              y: grid.getValue(grid.getCurrent().itemIndex, 4) == undefined ? null : grid.getValue(grid.getCurrent().itemIndex, 4),
              color: Highcharts.getOptions().colors[4]
          }],
          center: [100, 80],
          size: 100,
          showInLegend: false,
          dataLabels: {
              enabled: true
          }
      }],
      chart: {
          events: {
              load: function () {

              },
              click: function (e) {
                  //console.log(e);
              }
          }
      }
  });
}

function gridEvents(grid, provider) {
  grid.onCurrentChanged = function (grid, index) {
      var chart = $("#container").highcharts();
      if (!chart)
          return;
      setPie(chart);
  }

  provider.onRowCountChanged = function () {
      setHiChart(ds);
  }

  grid.onItemChecked = function (grid, itemIndex, checked) {
      var checkItems = grid.getCheckedItems();
      var values = [];
      $.each(checkItems, function () {
          values.push(grid.getValues(this));
      });
      setCheckValueToChart(values);
  }

  grid.onItemsChecked = function (grid, items, checked) {
    var checkItems = grid.getCheckedItems();
    var values = [];
    $.each(checkItems, function () {
        values.push(grid.getValues(this));
    });
    setCheckValueToChart(values);    
  }

  grid.onItemAllChecked = function (grid, checked) {
      if (checked) {
          setCheckValueToChart(ds.getJsonRows());
      } else {
          setCheckValueToChart([]);
      }
  }
}

function setPie(chart, index) {
  index = index ? index : grid.getCurrent();
  var rowValue = ds.getJsonRow(index.dataRow);
  var hcData = [];
  $.each(rowValue, function (k, v) {
      if (v == undefined)
          v = null;
      if (k == "Year")
          return true;
      hcData.push(v);
  });
  chart.series[4].setData(hcData);
}

function setCheckValueToChart(values) {
  var year = [], gdp = [], gni = [], pgni = [], dincome = [];

  $.each(values, function (k, v) {
      year.push(v.Year);
      gdp.push(v.GDP);
      gni.push(v.GNI);
      pgni.push(v.PGNI);
      dincome.push(v.DIncome ? v.DIncome : null);
  });

  var chart = $("#container").highcharts();
  if (!chart)
      return;
  chart.xAxis[0].setCategories(year);
  chart.series[0].setData(gdp);
  chart.series[1].setData(gni);
  chart.series[2].setData(pgni);
  chart.series[3].setData(dincome);

  setPie(chart, grid.getCurrent());
};