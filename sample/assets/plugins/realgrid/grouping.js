var ds, gridContainer, grid;
var rows;

function createGrid(container) {
    ds = new RealGrid.LocalDataProvider();
    ds.setFields(fields_01);
    
    grid = new RealGrid.GridView(container);
    grid.setDataSource(ds);
    grid.setColumns(columns_01);
    ds.setRows(testJsonRows);

    grid.header.minHeight = 25;
    grid.footer.minHeight = 25;
    grid.displayOptions.rowHeight = 25;

    grid.setEditOptions({
        insertable: true,
        appendable : true
    });

    grid.groupingOptions.enabled = true;

    grid.columnByName("EmployeeID").styleCallback = function (column, cell) {
        if (cell.value > 5) return "rg-data-cell bold-cell";
    };
    grid.setRowStyleCallback(function(grid, item) {
        if (item.index % 2 == 0) return "alternate-row";
    })
    grid.setButtonClickCallback(function (grid, index) {
        alert("Cell Button: " + index.getValue());    
    });  
};

function setActions(actionContainer) {
    // createButton(actionContainer, 'scrollTest1', function(e) {
    //     var width = window.outerWidth;
    //     var height = window.outerHeight;
    //     window.resizeTo(800, 600);
    //     setTimeout(function () {
    //         var t = Date.now();
    //         for (var i = 0; i < 20 ; i++) {
    //             ++grid.topIndex;
    //             grid.container._render(0)
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
    //             grid.leftPos = (i % 2) * 500;
    //             grid.container._render(0)
    //         }
    //         t = Date.now() - t;
    //         window.resizeTo(width, height);
    //         alert(t);
    
    //     }, 1000)
    // });
    // createButton(actionContainer, "TEST", function (e) {
    //     grid.leftPos = 10000;
    // });
    // createButton(actionContainer, "TEST2", function (e) {
    //     console.log(grid.leftPos + " == " + grid['_hscrollBar']['_pos']);
    // });
    // createButton(actionContainer, "Group By", function (e) {
    //     grid.setRowGroup({mergeMode:false});
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
    // createButton(actionContainer, "Column Merge", function (e) {
    //     grid.columnByName("Country").mergeRule = "value";
    //     grid.columnByName("CompanyName").mergeRule = "value";
    //     grid.columnByName("OrderDate").mergeRule = "value";
    //     grid.columnByName("Country2").mergeRule = "value";
    // });
    // createButton(actionContainer, "Clear Column Merge", function (e) {
    //     grid.columnByName("Country").mergeRule = null;
    //     grid.columnByName("CompanyName").mergeRule = null;
    //     grid.columnByName("OrderDate").mergeRule = null;
    //     grid.columnByName("Country2").mergeRule = null;
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
    createCheckBox(actionContainer, "Empty Grid", function (e) {
        if (e.currentTarget.checked) {
            grid.getColumn(0).addFilters({ name: "f", criteria: "value = 'x'", active: true });
        } else {
            grid.getColumn(0).clearFilters();
        }
    });
    createCheckBox(actionContainer, "Fixed Columns", function (e) {
        grid.setFixedOptions({colCount: e.currentTarget.checked ? 2 : 0})
    });
    createCheckBox(actionContainer, "Fixed Rows", function (e) {
        grid.setFixedOptions({rowCount: e.currentTarget.checked ? 2 : 0})
    });
    createCheckBox(actionContainer, "Right Columns", function (e) {
        grid.setFixedOptions({rightCount: e.currentTarget.checked ? 2 : 0})
    });
    createCheckBox(actionContainer, "Grouping", function (e) {
        grid.setGroupingOptions({enabled: e.currentTarget.checked});
    }, true);
    createButton(actionContainer, "Ungroup By", function (e) {
        grid.groupBy(null);
    });
    createButton(actionContainer, "Group By", function (e) {
        grid.setRowGroup({mergeMode:false});
        grid.groupBy(["orderid"]);
    });
    createButton(actionContainer, "Column Merge", function (e) {
        grid.columnByName("OrderID").mergeRule = "value";
    });
    createButton(actionContainer, "Clear Merge", function (e) {
        grid.columnByName("OrderID").mergeRule = null;
    });
    createButton(actionContainer, "CheckBar First", function (e) {
        grid.setCheckBar({displayOrder:-1});
    });
    createCheckBox(actionContainer, "Create Footer Callback", function (e) {
        grid.rowGroup.createFooterCallback = !e.currentTarget.checked ? null : function (group, footerIndex) {
            return false;
        }
    });
    createCheckBox(actionContainer, "Fixed Movable", function (e) {
        grid.setFixedOptions({movable: e.currentTarget.checked});
    }, false);
}
