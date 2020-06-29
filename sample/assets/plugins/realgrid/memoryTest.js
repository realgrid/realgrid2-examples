
var ds, gridContainer, grid, gridListener;
var rows;

function createGrid(container) {
    ds = new RealGrid.LocalDataProvider(true);
    ds.setFields(fields_01);
    
    grid = new RealGrid.GridView(container);
    grid.setDataSource(ds);
    grid.setColumns(columns_01);
    ds.setRows(testJsonRows);
    // loadData('sample.csv');
    // loadData('sample.json')

    grid.setEditOptions({
        insertable: true,
        appendable : true
    });

    grid.setRowIndicator({
        popupMenu: "menu1"
    })

    grid.setCheckBar({
        popupMenu:"menu2"
    })
    // grid.rowIndicator.popupMenu = "menu1";

    // grid.checkBar.popupMenu = "menu2";

    // grid._waitingPane.message = "<span style='color:#174c6bde;font-size:30px;top:60%;transform:translate(0px, -50%);position:relative'> 잠시 기다려 주세요.!! </span>";

    grid.columnByName("EmployeeID").styleCallback = function (column, cell) {
        if (cell.value > 5) return "rg-data-cell bold-cell";
    };
    grid.setRowStyleCallback(function(grid, item) {
        if (item.index % 2 == 0) return "alternate-row";
    })

    // gridListener = {
    //     "onGridBaseContextMenuPopup": function(grid, x, y, eltName) {
    //         console.log(x, y, eltName);
    //     }
    // }

    // grid.addListener(gridListener); 

    grid.onContextMenuPopup = function (grid, x, y, eltName) {
        console.log(x, y, eltName);
    };

};

function disposeGrid() {
    grid = grid.destroy();
    // gridContainer = gridContainer.dispose();
    ds = ds.destroy();
    // gridListener = null;
}

function setActions(actionContainer) {
    createButton(actionContainer, "createGrid", function(e) {
        createGrid("realgrid");
    })

    createButton(actionContainer, "disposeGrid", function(e) {
        disposeGrid();
    })

    createButton(actionContainer, "contextMenu", function (e) {
        grid.setContextMenu([{
            label: "열고정",
            callback : function (menuItem, index) {
                var colName = index.column;
                if (!colName) {
                    return;
                };
                var col = this.columnByName(colName);
                while (col.parent) {
                    col = this.columnByName(col.parent);
                    if (!col) {
                        break;
                    }
                }
                this.fixedOptions.colCount =col.displayIndex+1;
            }.bind(grid) // callback내에서 grid를 this로 이용하기 위해서.
        }, {
            label: "열고정해제",
            callback : function (menuItem, index) {
                this.setFixedOptions({colCount:0});
            }.bind(grid) // callback내에서 grid를 this로 이용하기 위해서.
        }, {
            label: "Menu2"
        }, {
            label: "-" // menu separator를 삽입합니다.
        }, {
            label: "ExcelExport"
        }, {
            label:"testChild",
            children:[
                {label:"child1"},
                {label:"child2"},
                {label:"child3"},
                {label:"child4"}
            ]
        },{
            label:"check",
            type:"check"
        },{
            label:"radio11",
            type:"radio",
            group:"group1",
        },{
            label:"radio12",
            type:"radio",
            group:"group1",
        },{
            label:"radio13",
            type:"radio",
            group:"group1",
        },{
            label:"radio21",
            type:"radio",
            group:"group2",
        },{
            label:"radio22",
            type:"radio",
            group:"group2",
        },{
            label:"radio22",
            type:"radio",
            group:"group2",
        }]);	
    
    });

    createButton(actionContainer, "removeContext", function(e) {
        grid.setContextMenu(null);
    })
    createButton(actionContainer, "addPopupMenu", function (e) {
        grid.addPopupMenu("menu1", [
            {label:"test1"},
            {label:"test2"},
            {label:"test3"}
        ]);	
        grid.addPopupMenu("menu2", [
            {label:"Menu21"},
            {label:"Menu22"},
            {label:"Menu23"}
        ]);	
    });

    createButton(actionContainer, "removePopupMenu", function (e) {
        grid.removePopupMenu("menu1");
    })

    createButton(actionContainer, "showWaiting", function(e) {
        // grid._waitingPane.visible = true;
    });

    createButton(actionContainer, "hideWaiting", function(e) {
        // grid._waitingPane.visible = false;
    });
    
}
