var ds, gridContainer, grid, form;
var rows;

function createGrid(container) {
    ds = new RealGrid.LocalDataProvider();
    ds.setFields(fields_01);
    
    grid = new RealGrid.GridView(container);
    grid.setDataSource(ds);
    grid.setColumns(columns_01);//(columns_02);
    ds.setRows(testJsonRows);

    grid.setRowIndicator({
        popupMenu: "menu1"
    });
    grid.addPopupMenu("menu1", [
        {
            label: "Form",
            callback: function () {
                form.visible = true;
            }
        }
    ]);

    grid.addPopupMenu("menuForm", [
        {
            label: "Grid",
            callback: function () {
                form.visible = false;
            }
        }, {
            label: "Delete Row",
            callback: function () {
                form.deleteRow();
            }
        }, {
            label: "Add Row",
            callback: function () {
                form.appendRow();
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
                header: "Address",
                template: "<span>Good!<br>121212</span>"
            },
            {
                header: "Salary",
                template: "<span>Bad!<br>2000</span>"
            },
            "Country",
            "CompanyName",
            "UnitPrice2",
            "Country",
            "CompanyName",
            "UnitPrice2",
            "Country",
            "CompanyName",
            "UnitPrice2",
            "Country",
            "CompanyName",
            "UnitPrice2",
            "Country",
            "CompanyName",
            "UnitPrice2",
            "Country",
            "CompanyName",
            "UnitPrice2",
            "Country",
            "CompanyName",
            "UnitPrice2",
            "OrderID"
        ]
    });
    form.focusedIndex = 0;
    grid.setFocus();

    grid.displayOptions.rowHoverType = "row";

    grid.setEditOptions({
        insertable: true,
        appendable : true,
        deletable: true
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

    grid._view.setFocusedItem(0);
};

function setActions(actionContainer) {
    /*
    createButton(actionContainer, 'getVersion', function(e) {
        alert(RealGrid.getVersion());
    });
    createButton(actionContainer, 'scrollTest1', function(e) {
        var width = window.outerWidth;
        var height = window.outerHeight;
        window.resizeTo(800, 600);
        setTimeout(function () {
            var t = Date.now();
            for (var i = 0; i < 20 ; i++) {
                grid.setTopItem(grid.getTopItem()+1);
                // grid.container._render(0)
            }
            t = Date.now() - t;
            window.resizeTo(width, height);
            alert(t);
        }, 1000)
    });
    createButton(actionContainer, 'scrollTest2', function(e) {
        var width = window.outerWidth;
        var height = window.outerHeight;
        window.resizeTo(800, 600);
        setTimeout(function () {
            var t = Date.now();
            for (var i = 0; i < 10 ; i++) {
                grid.setLeftPos((i % 2) * 500);
                // grid.container._render(0)
            }
            t = Date.now() - t;
            window.resizeTo(width, height);
            alert(t);
    
        }, 1000)
    });
    createButton(actionContainer, "TEST", function (e) {
        grid.setLeftPos(10000);
    });
    createButton(actionContainer, "TEST2", function (e) {
        //console.log(grid.leftPos + " == " + grid.getLeftPos());
    });
    createButton(actionContainer, "Group By", function (e) {
        grid.setRowGroup({mergeMode:false});
        //grid.groupBy([0, 1]);
        grid.groupBy(["country", "companyName"]);
    });
    createButton(actionContainer, "Merged Group By", function (e) {
        grid.rowGroup.mergeMode = true;
        //grid.groupBy([0, 1]);
        grid.groupBy(["country", "companyName"]);
        //grid.groupByFieldNames(["country"]);
    });
    createButton(actionContainer, "Ungroup By", function (e) {
        grid.groupBy(null);
    });
    createButton(actionContainer, "Column Merge", function (e) {
        grid.layoutByColumn("Country").mergeRule = "value";
        grid.columnByName("CompanyName").mergeRule = "value";
        // grid.layoutByColumn("OrderDate").mergeRule = "value";
        // grid.layoutByColumn("Country2").mergeRule = "value";
    });
    createButton(actionContainer, "Clear Column Merge", function (e) {
        grid.layoutByColumn("Country").mergeRule = null;
        grid.columnByName("CompanyName").mergeRule = null;
        // grid.layoutByColumn("OrderDate").mergeRule = null;
        // grid.layoutByColumn("Country2").mergeRule = null;
    });
    createCheckBox(actionContainer, "EqualBlank", function (e) {
        grid.layoutByColumn("Country").equalBlank = e.currentTarget.checked;;
    }, false);
    createCheckBox(actionContainer, "expandWhenGrouping", function (e) {
        grid.groupingOptions.expandWhenGrouping = e.currentTarget.checked;
    }, true);
    createCheckBox(actionContainer, "RowIndicator", function (e) {
        grid.rowIndicator.visible = e.currentTarget.checked;
    }, true);
    createCheckBox(actionContainer, "StateBar", function (e) {
        grid.stateBar.visible = e.currentTarget.checked;
    }, true);
    createCheckBox(actionContainer, "CheckBar", function (e) {
        grid.checkBar.visible = e.currentTarget.checked;
    }, true);
    createCheckBox(actionContainer, "Fixed Columns", function (e) {
        grid.setFixedOptions({colCount: e.currentTarget.checked ? 2 : 0})
    });
    createCheckBox(actionContainer, "Right Columns", function (e) {
        grid.setFixedOptions({rightCount: e.currentTarget.checked ? 2 : 0})
    });
    createCheckBox(actionContainer, "Fixed Rows", function (e) {
        grid.setFixedOptions({rowCount: e.currentTarget.checked ? 2 : 0})
    });
    createCheckBox(actionContainer, "Right Fixed", function (e) {
        grid.fixedOptions.rightFixed = e.currentTarget.checked;
    }, true);
    createCheckBox(actionContainer, "Grouping", function (e) {
        grid.setGroupingOptions({enabled: e.currentTarget.checked})
    }, true);
    createListBox(actionContainer, "Selection", ["block", "rows", "columns"], function (e) {
        grid.displayOptions.selectionStyle = e.currentTarget.value;
    }, "block")
    createListBox(actionContainer, "Row Hover", ["none", "row", "data", "fill", "cell"], function (e) {
        grid.displayOptions.rowHoverType = e.currentTarget.value;
    }, "none")
    createButton(actionContainer, "Insert", function (e) {
        if (grid.focusedRow < 0) {
            alert('행을 추가할 위치를 먼저 선택하세요.')
        } else {
            grid.insert();
            grid.setFocus();
        }
    });
    createButton(actionContainer, "Append", function (e) {
        grid.append();
        grid.setFocus();
    });
    */
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
    createButton(actionContainer, "Test", function (e) {
        alert('Hello?');
    });
    createButton(actionContainer, "Up", function (e) {
        form.topPos += 10;
    });
    createButton(actionContainer, "Down", function (e) {
        form.topPos -= 10;
    });
}
