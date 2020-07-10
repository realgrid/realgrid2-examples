var ds, gridContainer, grid, form;
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
      name: "KorCountry",
      fieldName: "KorCountry",
      type: "data",
      width: "200",
      editor: "list",
      values: [
        "가이아나",
        "나미비아",
        "나우루",
        "노르웨이",
        "뉴질랜드",
        "대한민국",
        "도미니카",
        "독일",
        "모나코",
        "브라질",
        "사우스조지아 사우스샌드",
        "스리랑카",
        "스위스",
        "아랍에미리트",
        "오만",
        "이스라엘",
        "자메이카",
        "캐나다",
        "콩고 공화국",
        "터키",
        "페루",
        "포르투칼",
        "프랑스령 폴리네시아",
        "헝가리",
        "홍콩"
      ],      
      styleName: "left-column",            
      header: {
        text: "담당 국가"
      }
    },
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
      editor: {
        type: "text",
        mask: "(999)9999-9999"
      },
      textFormat:"([0-9]{3})([0-9]{4})([0-9]{4});($1)$2-$3",
      // 1.0 에서는 아래와 같이 지정했으나 2.0 에서는 textFormat으로 처리한다. 
      // displayRegExp: "([0-9]{3})([0-9]{4})([0-9]{4})",
      // displayReplace: "($1)$2-$3",
      header: {
        text: "전화번호"
      },
    },    
    {
      name: "StartDate",
      fieldName: "StartDate",
      type: "data",
      width: "100",
      editor: {
        type: "date"
      },
      footers: [
        {text: "합계", styleName: "center-column bold-column"},
        {text: "최대 값", styleName: "center-column bold-column"},
        {text: "평균 값", styleName: "center-column bold-column"},
      ],
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
      editor: {
        type: "number",        
        editFormat: "#,##0.##",
        multipleChar: "+"
      },
      footers: [{        
        prefix: "$",
        numberFormat: "#,##0",
        styleName: "right-column bold-column",
        expression: "sum"        
      }, {
        prefix: "$",
        numberFormat: "#,##0",
        styleName: "right-column bold-column",
        expression: "max"        
      }, {
        prefix: "$",
        numberFormat: "#,##0",
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
        text: "계약 급여"
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
      name: "Rating",
      fieldName: "Rating",
      type: "data",
      width: "100",
      renderer: {
        type: "signalbar",
        barCount: 5,
        startRate: 50,
        endRate: 50
      },
      header: {
        text: "고객 평가"
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
  var reqUrl = "/assets/plugins/realgrid/data/" + filename; // for S3
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
    //ds = new RealGrid.LocalDataProvider();
    // true 옵션을 주면 undo 할 수 있다.
    ds = new RealGrid.LocalDataProvider(true);
    ds.restoreMode = "explicit";
    ds.setFields(fields);

    // ds 커밋 이후에 undo 할 수 있다.
    ds.setOptions({
      undoable: true
    });
    
    grid = new RealGrid.GridView(container);
    grid.filteringOptions.selector.showButtons = true;
    grid.displayOptions.refreshMode = "visibleOnly";
    grid.displayOptions.emptyMessage = "표시할 데이타가 없습니다.";
    grid.header.height = 40;
    grid.displayOptions.rowHeight = 36;    
    grid.footer.height = 40;
    grid.stateBar.width = 20;        
    grid.sortingOptions.showSortOrder = true;
    grid.sortingOptions.style = "reverse";
    grid.displayOptions.rowHoverType = "row";    
    grid.displayOptions.rowResizable = true;
    // 셀 단위로 커밋한다.
    grid.commitByCell = true;    
    // 셀 수정 상태를 마커로 표시한다.
    grid.displayOptions.showChangeMarker = true;
    
    grid.setFooters([{height:30},{height:30},{height:30}]);
    grid.setDataSource(ds);
    grid.setColumns(columns);
    loadData('simple_data.json');

    // ds 커밋 전에 undo 할 수 있다.
    // ds undoable Option을 false로 하더라도 커밋 전까지는 뷰어가 데이터를 관리하므로
    // 커밋 전에 undo를 하려면 그리드 옵션의 undoable을 true로 해야 한다.
    grid.setOptions({
      undoable: true
    });

    grid.setEditOptions({
        insertable: true,
        appendable : false
    });

    grid.setGroupPanel({
      minHeight: 60,
      visible: true,
      toast: {
          visible : true
      }
    });

    grid.onContextMenuPopup = function (grid, x, y, elementName) {
      console.log(arguments);
      // realgrid-utils.js 기본 팝업 메뉴 생성
      setContextMenu(grid);
      
    };
      // realgrid-utils.js 기본 팝업 메뉴 실행
    grid.onContextMenuItemClicked = onContextMenuClick;

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
          //return "right-column red-column bold-column";
          return "right-column .{color : red}";
        }
    };

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

    //동적으로 footer callBack을 정의 할 때 아래와 같이 사용
    //grid.columnByName("number1").footers.getItem(0).valueCallback = function();
    
    grid.onSelectionChanged = function (grid) {
      $("#cellSummary").text(getSelectionSummary(grid).toLocaleString());

      grid.columnByName("InterestRate").footers.get(0).text = getSelectionSummary(grid).toLocaleString();
      grid.refresh();
    }  

    form = grid._view.container.formView;
    //form.visible = true;
    form.options.modal = true;
    form.options.modalPadding = "10% 8%";
    form.options.autoClose = true;

    form.model.load(getColumnsToFormModel(grid));
    form.focusedIndex = 0;

    grid.setFocus();    

};



// function footerCallBack(grid, column, footerIndex, model, value) {
//   if (column.name == "InterestRate") {
//     value = 1234;
//   }  
// };

function setActions(actionContainer) {
  createButton(actionContainer, "수정한 셀 가져오기", function (e) {    
    alert(JSON.stringify(ds.getUpdatedCells()));    
  });  
};

