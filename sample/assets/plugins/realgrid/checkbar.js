var ds, gridContainer, grid;
var rows;

function createGrid(container) {
    ds = new RealGrid.LocalDataProvider();
    ds.setFields(fields_01);
    
    grid = new RealGrid.GridView(container);
    grid.setDataSource(ds);

    // gridContainer = new RealGrid.GridContainer(container);
    // grid = gridContainer.gridView;
    // grid.dataSource = ds;

    grid.setColumns(columns_01);
    ds.setRows(testJsonRows);
    // loadData('sample.csv');
    // loadData('sample.json')

    grid.setGroupingOptions({
        enabled: true
    });

    grid.setEditOptions({
        insertable: true,
        appendable : true
    });

    grid.columnByName("EmployeeID").styleCallback = function (column, cell) {
        if (cell.value > 5) return "rg-data-cell bold-cell";
    };

    grid.setRowStyleCallback(function (grid, item) {
        if (item.index % 2 == 0) return "alternate-row";
    })

    // grid.body.rowStyleCallback = function (grid, item) {
    //     if (item.index % 2 == 0) return "alternate-row";
    // };
};

function setActions(actionContainer) {
    createCheckBox(actionContainer, "showCheckAll", function (e) {
        grid.setCheckBar({showAll:e.currentTarget.checked})
        // grid.checkBar.showAll = e.currentTarget.checked;
    }, true);
    createCheckBox(actionContainer, "exclusiveCheck", function (e) {
        grid.setCheckBar({exclusive:e.currentTarget.checked});
        // grid.checkBar.exclusive = e.currentTarget.checked;
    });
    createCheckBox(actionContainer, "syncHeadCheck", function (e) {
        grid.setCheckBar({syncHeadCheck : e.currentTarget.checked});
        // grid.checkBar.syncHeadCheck = e.currentTarget.checked;
    }, false);
    createCheckBox(actionContainer, "checkableExpr", function (e) {
        if (e.currentTarget.checked) {
            grid.setCheckBar({checkableExpression : "row % 2 = 1"})
            // grid.checkBar.checkableExpression = "row % 2 = 1";
        } else {
            grid.setCheckBar({checkableExpression : null})
            // grid.checkBar.checkableExpression = null;
        }
        grid.applyCheckables();
    }, false);
    createCheckBox(actionContainer, "showGroup", function (e) {
        grid.setCheckBar({showGroup: e.currentTarget.checked});
    }, true);
    createButton(actionContainer, "Hide Rows", function (e) {
        ds.hideRows([0, 1, 2, 3, 4]);
    });
    createButton(actionContainer, "Show Rows", function (e) {
        // ds.showRows([0, 1, 2]);
        ds.showHiddenRows([0, 1, 2]);
    });
    createButton(actionContainer, "Clear Hiddens", function (e) {
        ds.resetHiddenRows();
        // ds.clearHiddenRows();
    });
}
