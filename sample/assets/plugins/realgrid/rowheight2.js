var ds, gridContainer, grid;
var rows;

function createGrid(container) {
    var fields = [
        { fieldName:"image" }, 
        { fieldName:"notice" },
        { fieldName:"title" },
        { fieldName:"link" },
        { fieldName:"author" },
        { fieldName:"publisher" },
        { fieldName:"subject" }
    ]
    ds = new RealGrid.LocalDataProvider();
    ds.setFields(fields);
    
    grid = new RealGrid.GridView(container);
    grid.setDataSource(ds);

    var columns = [
        { name:"image", fieldName:"image", renderer:{type:"image", imageField:"image", imageHeight:80} }, 
        { name:"notice", fieldName:"notice" },
        { name:"title", fieldName:"title" },
        { name:"link", fieldName:"link", renderer:{type:"link", linkField:"link"}},
        { name:"author", fieldName:"author" },
        { name:"publisher", fieldName:"publisher" },
        { name:"subject", fieldName:"subject", styleName:"multi-line", width:350 }
    ]

    grid.setColumns(columns);//(columns_02);
    ds.setRows(bookInfoData);
    // loadData('sample.csv');
    // loadData('sample.json')

    grid.setGroupingOptions({enabled:true});

    grid.setDisplayOptions({
        rowHoverType:"row",
        rowResizable: true,
        rowHeight : 30
    })

    grid.setEditOptions({
        insertable: true,
        appendable : true
    });

    grid.setHeader({
        showTooltip: true
    })

    // grid.columnByName("EmployeeID").styleCallback = function (column, cell) {
    //     if (cell.value > 5) {
    //         return "rg-data-cell bold-cell";
    //     }
    //     // if (cell.value > 5) return {
    //     //     style: "",
    //     //     renderer: "",
    //     //     editable: false,
    //     //     readonly: false
    //     // }
    // };

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
    }

    grid.onShowHeaderTooltip = function (grid, column, value) {
            return value;
    }

    grid.setGroupingOptions({toast:{visible:true}});
};

function setActions(actionContainer) {

    createButton(actionContainer, 'getVersion', function(e) {
        alert(RealGrid.getVersion());
    });
    createButton(actionContainer, "TEST", function (e) {
        grid.setLeftPos(10000);
    });

    createButton(actionContainer, "Inc Height", function (e) {
        var index = grid.getCurrent();
        if (index && index.dataRow >= 0) {
            var h = grid.getRowHeight(index.itemIndex);
            // if (isNaN(h)) h = grid.layoutManager.getItemHeight(item);
            h += 4;
            grid.setRowHeight(index.itemIndex, h);
            grid.refresh();
        }
    });
    createButton(actionContainer, "Dec Height", function (e) {
        var index = grid.getCurrent();
        if (index && index.dataRow >= 0) {
            var h = grid.getRowHeight(index.itemIndex);
            // if (isNaN(h)) h = grid.layoutManager.getItemHeight(item);
            h -= 4;
            grid.setRowHeight(index.itemIndex, h);
            grid.refresh();
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
