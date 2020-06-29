var ds, gridContainer, grid;
var rows;

var fields = [
    { fieldName: "EmployeeID",     dataType: "text"},
    { fieldName: "EmployeeName",   dataType: "text"},
    { fieldName: "9:00",           dataType: "text"},
    { fieldName: "9:30",           dataType: "text"},
    { fieldName: "10:00",          dataType: "text"},
    { fieldName: "10:30",          dataType: "text"},
    { fieldName: "11:00",          dataType: "text"},
    { fieldName: "11:30",          dataType: "text"},
    { fieldName: "12:00",          dataType: "text"},
    { fieldName: "12:30",          dataType: "text"},
    { fieldName: "1:00",           dataType: "text"},
    { fieldName: "1:30",           dataType: "text"},
    { fieldName: "2:00",           dataType: "text"},
    { fieldName: "2:30",           dataType: "text"},
    { fieldName: "3:00",           dataType: "text"},
    { fieldName: "3:30",           dataType: "text"},
    { fieldName: "4:00",           dataType: "text"},
    { fieldName: "4:30",           dataType: "text"},
    { fieldName: "5:00",           dataType: "text"}
  ];
  
  var columns = [
    {
      name: "EmployeeID",
      fieldName: "EmployeeID",
      type: "data",
      width: "100",
      header: {
        text: "사원 번호"
      },
      renderer: {
        type: "text"
      }
    },
    {
      name: "EmployeeName",
      fieldName: "EmployeeName",
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
      name: "9:00",
      fieldName: "9:00",
      width: "100",      
      header: {
        styleName: "red-bold-header",
        text: "9:00"
      },
      renderer: { 
        type: "text"
      }
    },  
    {
        name: "9:30",
        fieldName: "9:30",
        width: "100",
        header: {
            text: "9:30"
        },
        renderer: { 
            type: "text"
        }
      },  
      {
        name: "10:00",
        fieldName: "10:00",
        width: "100",
        header: {
          text: "10:00"
        },
        renderer: { 
          type: "text"
        }
      },  
      {
        name: "10:30",
        fieldName: "10:30",
        width: "100",
        header: {
          text: "10:30"
        },
        renderer: { 
          type: "text"
        }
      },  
      {
        name: "11:00",
        fieldName: "11:00",
        width: "100",
        header: {
          text: "11:00"
        },
        renderer: { 
          type: "text"
        }
      },  
      {
        name: "11:30",
        fieldName: "11:30",
        width: "100",
        header: {
          text: "11:30"
        },
        renderer: { 
          type: "text"
        }
      },  
      {
        name: "12:00",
        fieldName: "12:00",
        width: "100",
        header: {
          text: "12:00"
        },
        renderer: { 
          type: "text"
        }
      },  
      {
        name: "12:30",
        fieldName: "12:30",
        width: "100",
        header: {
          text: "12:30"
        },
        renderer: { 
          type: "text"
        }
      },  
      {
        name: "1:00",
        fieldName: "1:00",
        width: "100",
        header: {
          text: "1:00"
        },
        renderer: { 
          type: "text"
        }
      },  
      {
        name: "1:30",
        fieldName: "1:30",
        width: "100",
        header: {
          text: "1:30"
        },
        renderer: { 
          type: "text"
        }
      },  
      {
        name: "2:00",
        fieldName: "2:00",
        width: "100",
        header: {
          text: "2:00"
        },
        renderer: { 
          type: "text"
        }
      },  
      {
        name: "2:30",
        fieldName: "2:30",
        width: "100",
        header: {
          text: "2:30"
        },
        renderer: { 
          type: "text"
        }
      },  
      {
        name: "3:00",
        fieldName: "3:00",
        width: "100",
        header: {
          text: "3:00"
        },
        renderer: { 
          type: "text"
        }
      },  
      {
        name: "3:30",
        fieldName: "3:30",
        width: "100",
        header: {
          text: "3:30"
        },
        renderer: { 
          type: "text"
        }
      },  
      {
        name: "4:00",
        fieldName: "4:00",
        width: "100",
        header: {
          text: "4:00"
        },
        renderer: { 
          type: "text"
        }
      },  
      {
        name: "4:30",
        fieldName: "4:30",
        width: "100",
        header: {
          text: "4:30"
        },
        renderer: { 
          type: "text"
        }
      },  
      {
        name: "5:00",
        fieldName: "5:00",
        width: "100",
        header: {
          text: "5:00"
        },
        renderer: { 
          type: "text"
        }
      }                         
  ];

function createGrid(container) {
    ds = new RealGrid.LocalDataProvider();
    ds.setFields(fields);
    ds.setRows(employeeSchedule);
    
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
