var ds, gridContainer, grid;
var rows;

function createGrid(container) {
    ds = new RealGrid.LocalDataProvider();
    ds.setFields(fields_01);
    
    grid = new RealGrid.GridView(container);
    grid.setDataSource(ds);
    grid.setColumns(columns_01);//(columns_02);
    ds.setRows(testJsonRows);
    // loadData('sample.csv');
    // loadData('sample.json')

    grid.displayOptions.rowHoverType = "row";

    grid.setEditOptions({
        insertable: true,
        appendable : true
    });

    grid.setHeader({
        showTooltip: true
    })
    // grid.header.showTooltip = true;

    grid.columnByName("EmployeeID").styleCallback = function (column, cell) {
        if (cell.value > 5) {
            return "rg-data-cell bold-cell";
        }
        // if (cell.value > 5) return {
        //     style: "",
        //     renderer: "",
        //     editable: false,
        //     readonly: false
        // }
    };

    grid.columnByName("UnitPrice2").numberFormat = "#.00";

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

    // grid.groupingOptions.toast.visible = true;
};

function setActions(actionContainer) {
    // createButton(actionContainer, 'getVersion', function(e) {
    //     alert(RealGrid.getVersion());
    // });
    // createButton(actionContainer, 'scrollTest1', function(e) {
    //     var width = window.outerWidth;
    //     var height = window.outerHeight;
    //     window.resizeTo(800, 600);
    //     setTimeout(function () {
    //         var t = Date.now();
    //         for (var i = 0; i < 20 ; i++) {
    //             grid.setTopItem(grid.getTopItem()+1);
    //             // grid.container._render(0)
    //         }
    //         t = Date.now() - t;
    //         window.resizeTo(width, height);
    //         alert(t);
    //     }, 1000)
    // });
    // createButton(actionContainer, 'scrollTest2', function(e) {
    //     var width = window.outerWidth;
    //     var height = window.outerHeight;
    //     window.resizeTo(800, 600);
    //     setTimeout(function () {
    //         var t = Date.now();
    //         for (var i = 0; i < 10 ; i++) {
    //             grid.setLeftPos((i % 2) * 500);
    //             // grid.container._render(0)
    //         }
    //         t = Date.now() - t;
    //         window.resizeTo(width, height);
    //         alert(t);
    
    //     }, 1000)
    // });
    // createButton(actionContainer, "TEST", function (e) {
    //     grid.setLeftPos(10000);
    // });
    // createButton(actionContainer, "TEST2", function (e) {
    //     //console.log(grid.leftPos + " == " + grid.getLeftPos());
    // });
    // createButton(actionContainer, "Group By", function (e) {
    //     grid.setRowGroup({mergeMode:false});
    //     //grid.groupBy([0, 1]);
    //     grid.groupBy(["country", "companyName"]);
    // });
    // createButton(actionContainer, "Merged Group By", function (e) {
    //     grid.rowGroup.mergeMode = true;
    //     //grid.groupBy([0, 1]);
    //     grid.groupBy(["country", "companyName"]);
    //     //grid.groupByFieldNames(["country"]);
    // });
    // createButton(actionContainer, "Ungroup By", function (e) {
    //     grid.groupBy(null);
    // });
    // createButton(actionContainer, "Column Merge", function (e) {
    //     grid.columnByName("Country").mergeRule = "value";
    //     grid.columnByName("CompanyName").mergeRule = "value";
    //     // grid.columnByName("OrderDate").mergeRule = "value";
    //     // grid.columnByName("Country2").mergeRule = "value";
    // });
    // createButton(actionContainer, "Clear Column Merge", function (e) {
    //     grid.columnByName("Country").mergeRule = null;
    //     grid.columnByName("CompanyName").mergeRule = null;
    //     // grid.columnByName("OrderDate").mergeRule = null;
    //     // grid.columnByName("Country2").mergeRule = null;
    // });
    // createCheckBox(actionContainer, "expandWhenGrouping", function (e) {
    //     grid.groupingOptions.expandWhenGrouping = e.currentTarget.checked;
    // }, true);
    // createCheckBox(actionContainer, "RowIndicator", function (e) {
    //     grid.rowIndicator.visible = e.currentTarget.checked;
    // }, true);
    // createCheckBox(actionContainer, "StateBar", function (e) {
    //     grid.stateBar.visible = e.currentTarget.checked;
    // }, true);
    // createCheckBox(actionContainer, "CheckBar", function (e) {
    //     grid.checkBar.visible = e.currentTarget.checked;
    // }, true);
    // createCheckBox(actionContainer, "Fixed Columns", function (e) {
    //     grid.setFixedOptions({colCount: e.currentTarget.checked ? 2 : 0})
    // });
    // createCheckBox(actionContainer, "Right Columns", function (e) {
    //     grid.setFixedOptions({rightCount: e.currentTarget.checked ? 2 : 0})
    // });
    // createCheckBox(actionContainer, "Fixed Rows", function (e) {
    //     grid.setFixedOptions({rowCount: e.currentTarget.checked ? 2 : 0})
    // });
    // createCheckBox(actionContainer, "Right Fixed", function (e) {
    //     grid.fixedOptions.rightFixed = e.currentTarget.checked;
    // }, true);
    // createListBox(actionContainer, "Selection", ["block", "rows", "columns"], function (e) {
    //     grid.displayOptions.selectionStyle = e.currentTarget.value;
    // }, "block")
    // createListBox(actionContainer, "Row Hover", ["none", "row", "data", "fill", "cell"], function (e) {
    //     grid.displayOptions.rowHoverType = e.currentTarget.value;
    // }, "none")
    // createButton(actionContainer, "Insert", function (e) {
    //     if (grid.focusedRow < 0) {
    //         alert('행을 추가할 위치를 먼저 선택하세요.')
    //     } else {
    //         grid.insert();
    //         grid.setFocus();
    //     }
    // });
    // createButton(actionContainer, "Append", function (e) {
    //     grid.append();
    //     grid.setFocus();
    // });
}
