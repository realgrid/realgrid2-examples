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

    grid.setEditOptions({
        insertable: true,
        appendable : true
    });

    grid.setFixedOptions({
        colCount:2,
        rightCount:1
    })

    grid.columnByName("EmployeeID").styleCallback = function (column, cell) {
        if (cell.value > 5) return "rg-data-cell bold-cell";
    };
    grid.setRowStyleCallback(function(grid, item) {
        if (item.index % 2 == 0) return "alternate-row";
    });
    grid.onShowTooltip = function(grid, column, value) {
        return value;
    }
};

function setActions(actionContainer) {
    createCheckBox(actionContainer, "headerTooltip", function (e) {
        grid.setHeader({
            showTooltip: e.currentTarget.checked
        });
        // grid.header.showTooltip = e.currentTarget.checked;
    }, false);
}
