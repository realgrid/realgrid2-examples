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
    name: "Address",
    fieldName: "Address",
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

function createGrid(container) {
    ds = new RealGrid.LocalDataProvider();
    ds.setFields(fields);
    
    grid = new RealGrid.GridView(container);
    grid.setDataSource(ds);
    grid.setColumns(columns);//(columns_02);
    grid.displayOptions.emptyMessage = "표시할 데이타가 없습니다.";
    grid.header.height = 40;
    grid.displayOptions.rowHeight = 36;
    grid.footer.height = 40;
    grid.stateBar.width = 8;
    grid.sortingOptions.showSortOrder = true;
    grid.displayOptions.rowHoverType = "row";    
    grid.displayOptions.rowResizable = true;

    ds.setRows(simpleData);

    grid.setRowIndicator({
        popupMenu: "menu1"
    });
    grid.addPopupMenu("menu1", [
        {
            label: "Form",
            menuItemClick: function () {
                grid._view.container.formView.visible = true;
            }
        }
    ]);

    form = grid._view.container.formView;
    form.visible = true;
    form.model.load({
      footer: {
            popupMenu: "menuForm"
        },
        items: [
            {
                header: "직원 명",
                column: "KorName"
            },            
            {
              header: "직원 성별",
              column: "SexLabel"
            },
            {
                header: "직원 휴대폰",
                column: "Phone"
            },
            {
                header: "입사일",
                column: "StartDate"
            },
            {
                header: "직원 이메일",
                column: "Email"
            },
            {
                header: "직원 주소",
                column: "Address"
            },
            {
                header: "직원 평가",
                column: "Rating"
            },
            {
                header: "계약 급여",
                column: "SaveCost"
            },            
            {
              header: "증가 폭",
              column: "InterestRate"
            },
            {
                header: "담당 국가",
                column: "KorCountry"
            },
            {
                header: "업무 숙련도",
                column: "BusinessProficiency"
            },
            {
                header: "관리",
                column: "Button"
            }
        ]
    });
    form.focusedIndex = 0;    
    form.model.header.height = 50;
    grid.setFocus();

    grid.displayOptions.rowHoverType = "row";

    grid.setEditOptions({
        insertable: true,
        appendable : true
    });

    grid.setHeader({
        showTooltip: true
    })
    // grid.header.showTooltip = true;

    grid.setRowStyleCallback(function (grid, item) {
        if (item.index % 2 == 0) {
            return "alternate-row";
        }
    });

    grid.setButtonClickCallback(function (grid, index) {
        alert("Cell Button: " + index.getValue());    
    });

    grid.onShowTooltip = function(grid, index, value) {
        return value;
    };
    grid.onShowHeaderTooltip = function (grid, column, value) {
        return value;
    };

    grid.setGroupingOptions({
        enabled:true,
        toast: {
            visible : true
        }
    });

    grid._view.setFocusedItem(0);
};

function setActions(actionContainer) {
    createButton(actionContainer, "Mode Change", function (e) {
        if (grid._view.container.formView.visible ) { // form -> grid
          grid.setCurrent({itemIndex: form.currentRow});
          //grid.currentRow = form.currentRow;
          grid._view.container.formView.visible = false;
        } else {
          form.currentRow = grid.currentRow;
          grid._view.container.formView.visible = true;
          
        };
    });

    createButton(actionContainer, "Home", function (e) {
        form.currentRow = grid._view.getItem(0);
    });
    createButton(actionContainer, "Prev", function (e) {
        var item = form.currentRow;
        if (item && item.index > 0) {
            form.current

            item = grid._view.getItem(item.index - 1);
            form.currentRow = item;
        }
    });
    createButton(actionContainer, "Next", function (e) {
        var item = form.currentRow;
        if (item && item.index < grid._view.itemCount - 1) {
            item = grid._view.getItem(item.index + 1);
            form.currentRow = item;
        }
    });
    createButton(actionContainer, "End", function (e) {
        form.currentRow = grid._view.getItem(grid._view.itemCount - 1);
    });
}
