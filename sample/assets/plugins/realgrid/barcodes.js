var ds, gridContainer, grid;
var rows;

function createGrid(container) {
    ds = new RealGrid.LocalDataProvider();
    ds.setFields(fields_01);
    
    grid = new RealGrid.GridView(container);

    grid.setDataSource(ds);
    
    
    grid.setColumns(columns_01);
    ds.setRows(testJsonRows);
    // loadData('sample.csv');
    // loadData('sample.json')

    grid.displayOptions.rowHeight = 50;

    grid.setEditOptions({
        insertable: true,
        appendable : true
    });



    grid.columnByName("EmployeeID").styleCallback = function (column, cell) {
        if (cell.value > 5) return "rg-data-cell bold-cell";
    };

    grid.setRowStyleCallback = function(grid, item) {
        if (item.index % 2 == 0) return "alternate-row";
    }



    grid.linkCellClickedCallback = function (grid, index) {
        alert("Link clicked: " + index.value);
    }
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
    createButton(actionContainer, "Insert", function (e) {
        if (grid.focusedRow < 0) {
            alert('행을 추가할 위치를 먼저 선택하세요.')
        } else {
            grid.beginInsertRow();
            grid.setFocus();
        }
    });
    createButton(actionContainer, "Append", function (e) {
        grid.beginAppendRow()
        grid.setFocus();
    });
}
