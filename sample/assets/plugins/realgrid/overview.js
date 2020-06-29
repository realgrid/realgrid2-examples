var ds, gridContainer, grid;
var rows;

var fields = [
    { fieldName: "KorName",             dataType: "text"   },
    { fieldName: "SexLabel",            dataType: "text"   },
    { fieldName: "Age",                 dataType: "number" },
    { fieldName: "Phone",               dataType: "text"   },
    { fieldName: "StartDate",           dataType: "datetime", datetimeFormat: "yyyy-MM-dd", amText: "오전", pmText: "오후" },
    { fieldName: "KorCountry",          dataType: "text"   },
    { fieldName: "Rating",              dataType: "number" },
    { fieldName: "BusinessProficiency", dataType: "number" },
    { fieldName: "Address",             dataType: "text"   },
    { fieldName: "SaveCost",            dataType: "number" },
    { fieldName: "Email",               dataType: "text"   },
    { fieldName: "InterestRate",        dataType: "number" },
    { fieldName: "Button",              dataType: "text"   }    
  ];
  
  var columns = [
    {
      name: "KorName",
      fieldName: "KorName",
      type: "data",
      width: "100",
      header: {
        text: "직원 명"
      },
      renderer: {
        type: "text"
      }
    },
    {
      name: "SexLabel",
      fieldName: "SexLabel",
      type: "data",
      width: "60",     
      header: {
        text: "성별"
      },
      renderer: {
        type: "image",
        imageMap: {
            "남": "/assets/plugins/realgrid/images/man.png",
            "여": "/assets/plugins/realgrid/images/woman.png"
        },
        titleField: "SexLabel",
        imageHeight: 24
      }
    },    
    {
      name: "Email",
      fieldName: "Email",
      width: "250",
      styleName: "left-column",
      header: {
        text: "이메일"
      },
      renderer: { 
        type: "link",
        urlCallback: function (grid, cell) {
            return "mailto:"+cell.value;
        },
        titleField: "Email"
      }
    },  
    {
      name: "Phone",
      fieldName: "Phone",
      type: "data",
      width: "150",
      header: {
        text: "전화번호"
      },
    },    
    {
      name: "StartDate",
      fieldName: "StartDate",
      type: "data",
      width: "100",
      header: {
        text: "입사일",
        showTooltip: true,
        tooltip: "회사 입사일"
      }
    },    
    { name: "SaveCost",
      fieldName: "SaveCost",
      type: "data",      
      width: "100",      
      prefix: "$",
      styleName: "right-column",
      footer: {
        prefix: "$",
        styleName: "right-column bold-column",
        expression: "sum",
        groupExpression: "sum"
      },
      header: {
        text: "계약 급여"
      }
    },    
    { 
      name: "InterestRate",
      fieldName: "InterestRate",
      width: "100",      
      styleName: "right-column",
      renderer:{
        type:"html",
        callback: function(grid, cell, w, h) {
            //console.log(cell);
            var v = grid.getValue(cell.index.itemIndex, "SaveCost");
            v = v / (100+100*cell.value) * 100;

            if(grid.getValue(cell.index.itemIndex, "SexLabel")=="남"){
              return v.toFixed(2)+"</br><font color=blue>(+)"+cell.value+"%</font>";              
            } else {              
              return v.toFixed(2)+"</br><font color=red>(-)"+cell.value+"%</font>";
            }
        }
      },
      header: {
        text: "증가 폭"
      }
    },
    {
      name: "Rating",
      fieldName: "Rating",
      type: "data",
      width: "100",
      renderer: {
        type: "signalbar",
        barCount: 5,
        startRate: 100,
        endRate: 100
      },
      header: {
        text: "고객 평가"
      }
    },
    { 
      name: "KorCountry",
      fieldName: "KorCountry",
      type: "data",
      width: "200",
      styleName: "left-column",      
      header: {
        text: "담당 국가"
      }
    },
    {
      name: "BusinessProficiency",
      fieldName: "BusinessProficiency",
      type: "data",
      width: "120",
      suffix:"%",
      numberFormat: "#,##0",
      renderer: {
        type: "bar",
        origin: "left",
        barWidth: "50%"
      },
      header: {
        text: "업무 숙련도"
      }
    },
    {
      name: "Address",
      fieldName: "Address",
      type: "data",
      width: "300",
      styleName: "left-column",
      renderer: {
        type: "icon",
        iconCallback: function (grid, cell) {
            return "/assets/plugins/realgrid/images/location.png";
        },
        iconHeight: 14
      },
      header: {
        text: "소재지"
      }
    },
    {
      name: "Button",
      fieldName: "Button",
      type: "data",
      width: "100",
      renderer: {
        type: "button"
      },
      header: {
        text: "데이타 관리"
      }
    }
  ];

 
function loadData(filename) {
	var reqUrl = "/assets/plugins/realgrid/data/" + filename;
    $.ajax({
        type: "GET",  
        url: reqUrl,
        success: function(response)  
        {
          ds.setRows(response);
        }   
    });
}

function createGrid(container) {
    ds = new RealGrid.LocalDataProvider();
    ds.setFields(fields);
    
    grid = new RealGrid.GridView(container);
    grid.displayOptions.emptyMessage = "표시할 데이타가 없습니다.";
    grid.header.height = 40;
    grid.displayOptions.rowHeight = 36;
    grid.footer.height = 40;
    grid.stateBar.width = 10;
    grid.displayOptions.rowHoverType = "row";
    grid.displayOptions.rowResizable = true;

    grid.setDataSource(ds);
    grid.setColumns(columns);
    loadData('simple_data.json');

    grid.setEditOptions({
        insertable: true,
        appendable : false
    });

    grid.setHeader({
        showTooltip: true
    })    
    // grid.header.showTooltip = true;

    grid.columnByName("BusinessProficiency").styleCallback = function (column, cell) {
        if (cell.value <= 60) {
            return "rg-data-cell proficiency-loss";
        }
    };

    grid.columnByName("SaveCost").styleCallback = function (column, cell) {
      if (cell.value >= 100000) {
          return "right-column red-column bold-column";
      }
    };

    grid.setRowStyleCallback(function (grid, item) {
        if (item.index % 2 == 0) {
            return "alternate-row";
        }
    });

    grid.onButtonClicked = function (grid, index) {
      if (index.column == "Address") {        
        window.open("https://map.kakao.com/link/search/" + grid.getValue(index.itemIndex, index.fieldName));
      }
    }

    grid.onShowTooltip = function(grid, index, value) {
        return value;
    };
    grid.onShowHeaderTooltip = function (grid, column, value) {
        return value;
    };

    grid.setGroupingOptions({
        enabled:false,
        toast: {
            visible : true
        }
    });
};

function setActions(actionContainer) {

}
