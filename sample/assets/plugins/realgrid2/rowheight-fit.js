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
    ds.setOptions({
        restoreMode: "explict"
    });

    grid.displayOptions.rowHoverType = "row";
    grid.displayOptions.rowResizable = true;

    grid.editOptions.insertable = true;
    grid.editOptions.appendable = true;

    grid.header.showTooltip = true;

    grid.columnByName("CompanyName").styleName = "blue-column multi-line";
    grid.columnByName("ShipName").styleName = "multi-line";

    grid.setColumnStyleCallback("EmployeeID", function (column, cell) {
        if (cell.value > 5) {
            return "rg-data-cell bold-cell";
        }
        // if (cell.value > 5) return {
        //     style: "",
        //     renderer: "",
        //     editable: false,
        //     readonly: false
        // }
    });
    // grid.body.rowStyleCallback = function (grid, item) {
    //     if (item.index % 2 == 0) {
    //         return "alternate-row";
    //     }
    // };
    grid.setRowStyleCallback(function (grid, item) {
        if (item.index % 2 == 0) {
            return "alternate-row";
        }
    });
    // grid.buttonCellClickedCallback = function (grid, cell) {
    //     alert(cell.value);
    // };
    grid.setButtonClickCallback(function (grid, cell) {
        alert(cell.value);
    });

    // grid.addListener({
    //     onGridBaseShowTooltip: function(grid, index, value) {
    //         return value;
    //     },
    //     onGridBaseShowHeaderTooltip: function (grid, column, value) {
    //         return value;
    //     }
    // })
    grid.onShowTooltip = function(grid, index, value) {
        return value;
    };
    grid.onShowHeaderTooltip = function (grid, column, value) {
        return value;
    }

    grid.groupingOptions.toast.visible = true;
};

function setActions(actionContainer) {
    createButton(actionContainer, 'getVersion', function(e) {
        alert(RealGrid.getVersion());
    });
    createButton(actionContainer, "TEST", function (e) {
        // grid.leftPos = 10000;
        grid.setLeftPos(10000);
    });
    createButton(actionContainer, "Inc Height", function (e) {
        const item = grid.focusedItem;
        if (item) {
            // var h = grid.getRowHeight(item.index);
            // if (isNaN(h)) h = grid.layoutManager.getItemHeight(item);
            // h += 4;
            // grid.setRowHeight(item.index, h);
            // grid.refreshView();
            var h = grid.getRowHeight(item.index);
            h += 4;
            grid.setRowHeight(item.index, h, true);
        }
    });
    createButton(actionContainer, "Dec Height", function (e) {
        const item = grid.focusedItem;
        if (item) {
            // var h = grid.getRowHeight(item.index);
            // if (isNaN(h)) h = grid.layoutManager.getItemHeight(item);
            // h -= 4;
            // grid.setRowHeight(item.index, h);
            // grid.refreshView();
            var h = grid.getRowHeight(item.index);
            h -= 4;
            grid.setRowHeight(item.index, h, true);
        }
    });
    createCheckBox(actionContainer, "RowResizable", function (e) {
        grid.displayOptions.rowResizable = e.currentTarget.checked;
    }, true);
    createCheckBox(actionContainer, "VariableRowHeight", function (e) {
        grid.displayOptions.indivisualRowHeight = e.currentTarget.checked;
    });
    createCheckBox(actionContainer, "FixedRowHeight", function (e) {
        grid.displayOptions.rowHeight = e.currentTarget.checked ? 30 : 0;
    }, true);
    createCheckBox(actionContainer, "AutoRowHeights", function (e) {
        grid.displayOptions.rowHeight = e.currentTarget.checked ? -1 : 0;
    });
    // createButton(actionContainer, "Group By", function (e) {
    //     grid.rowGroup.mergeMode = false;
    //     //grid.groupBy([0, 1]);
    //     grid.groupByFieldNames(["country", "companyName"]);
    // });
    // createButton(actionContainer, "Merged Group By", function (e) {
    //     grid.rowGroup.mergeMode = true;
    //     //grid.groupBy([0, 1]);
    //     grid.groupByFieldNames(["country", "companyName"]);
    //     //grid.groupByFieldNames(["country"]);
    // });
    // createButton(actionContainer, "Ungroup By", function (e) {
    //     grid.groupBy(null);
    // });
    createCheckBox(actionContainer, "Column Merge", function (e) {
        if (e.currentTarget.checked) {
            grid.columnByName("Country").mergeRule = "value";
            grid.columnByName("CompanyName").mergeRule = "value";
            grid.columnByName("ShipName").mergeRule = "value";
        } else {
            grid.columnByName("Country").mergeRule = null;
            grid.columnByName("CompanyName").mergeRule = null;
            grid.columnByName("ShipName").mergeRule = null;
        }
    });
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
    createCheckBox(actionContainer, "Fixed Columns", function (e) {
        grid.fixedOptions.colCount = e.currentTarget.checked ? 2 : 0;
    });
    createCheckBox(actionContainer, "Right Columns", function (e) {
        grid.fixedOptions.rightCount = e.currentTarget.checked ? 1 : 0;
    });
    createCheckBox(actionContainer, "Restore Mode", function (e) {
        ds.setOptions({
            restoreMode: e.currentTarget.checked ? "explict" : "none"
        });
    }, true);
    createCheckBox(actionContainer, "Change Marker", function (e) {
        grid.setDisplayOptions({
            showChangeMarker: e.currentTarget.checked
        });
    }, true);
    // createCheckBox(actionContainer, "Fixed Rows", function (e) {
    //     grid.fixedOptions.rowCount = e.currentTarget.checked ? 2 : 0;
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
