var ds, gridContainer, grid, form;
var rows;

var fields = [
    { fieldName: "KorName",             dataType: "text"   },
    { fieldName: "SexLabel",            dataType: "text"   },
    { fieldName: "Age",                 dataType: "number" },
    { fieldName: "Phone",               dataType: "text"   },
    { fieldName: "CardNumber",          dataType: "text"   },    
    { fieldName: "Monetary",            dataType: "text"   },
    { fieldName: "StartDate",           dataType: "datetime", datetimeFormat: "yyyy-MM-dd", amText: "오전", pmText: "오후" },
    { fieldName: "KorCountry",          dataType: "text"   },
    { fieldName: "KorAddress",          dataType: "text"   },
    { fieldName: "SaveCost",            dataType: "number" },
    { fieldName: "Email",               dataType: "text"   },
    { fieldName: "InterestRate",        dataType: "number" },
    { fieldName: "ProductID",           dataType: "text"   },
    { fieldName: "Price",               dataType: "number" },
    { fieldName: "Quantity",            dataType: "number" }
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
            "남": "images/man.png",
            "여": "images/woman.png"
        },
        titleField: "SexLabel",
        imageHeight: 24
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
      name: "CardNumber",
      fieldName: "CardNumber",
      type: "data",
      width: "180",
      header: {
        text: "신용카드번호"
      },
    },    
    {
      name: "ProductID",
      fieldName: "ProductID",
      type: "data",
      width: "150",
      header: {
        text: "제품고유번호"
      },
    },        
    {
      name: "Price",
      fieldName: "Price",
      type: "data",
      prefix: "$",
      width: "100",
      header: {
        text: "소비자가"
      },
    },        
    {
      name: "Quantity",
      fieldName: "Quantity",
      type: "data",
      suffix: " EA",
      width: "100",
      header: {
        text: "수량"
      },
    },        
    {
      name: "Monetary",
      fieldName: "Monetary",
      type: "data",
      width: "100",
      header: {
        text: "화폐단위"
      },
    },        
    {
      name: "StartDate",
      fieldName: "StartDate",
      type: "data",
      width: "100",
      footers: [
        {text: "합계", styleName: "center-column bold-column"},
        {text: "최대 값", styleName: "center-column bold-column"},
        {text: "평균 값", styleName: "center-column bold-column"},
      ],
      header: {
        text: "판매일",
        showTooltip: true,
        tooltip: "제품 판매일"
      }
    },    
    { name: "SaveCost",
      fieldName: "SaveCost",
      type: "data",      
      width: "100",      
      prefix: "$",
      styleName: "right-column",
      footers: [{        
        prefix: "$",
        styleName: "right-column bold-column",
        expression: "sum"        
      }, {
        prefix: "$",
        styleName: "right-column bold-column",
        expression: "max"        
      }, {
        prefix: "$",
        styleName: "right-column bold-column",
        expression: "avg"        
      }],
      groupFooters: [
        {
          prefix: "$",
          expression: "sum",
          numberFormat: "#,##0",
          styleName: "right-column bold-column"
        }
      ],
      header: {
        text: "계약 금액"
      }
    },    
    { 
      name: "InterestRate",
      fieldName: "InterestRate",
      width: "100",      
      styleName: "right-column small-font-size",
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
      name: "KorAddress",
      fieldName: "KorAddress",
      type: "data",
      width: "300",
      styleName: "left-column",
      renderer: {
        type: "icon",
        iconCallback: function (grid, cell) {
            return "images/location.png";
        },
        iconHeight: 14
      },
      header: {
        text: "소재지"
      }
    }
  ];
 
function loadData(filename) {
	var reqUrl = "data/" + filename; 
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
    grid.sortingOptions.showSortOrder = true;
    grid.sortingOptions.style = "reverse";
    grid.displayOptions.rowHoverType = "row";    
    grid.displayOptions.rowResizable = true;
    

    grid.setFooters([{height:30},{height:30},{height:30}]);
    grid.setDataSource(ds);
    grid.setColumns(columns);
    loadData('largedata.json');

    grid.setEditOptions({
        insertable: true,
        appendable : false
    });

    grid.columnByField("KorCountry").autoFilter = true;
    grid.columnByField("StartDate").autoFilter = true;

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
      if (index.column == "KorAddress") {        
        window.open("https://map.kakao.com/link/search/" + grid.getValue(index.itemIndex, index.fieldName));
      }
    }

    grid.onShowTooltip = function(grid, index, value) {
        return value;
    };
    grid.onShowHeaderTooltip = function (grid, column, value) {
        return value;
    };
};

