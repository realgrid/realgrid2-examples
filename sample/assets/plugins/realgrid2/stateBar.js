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
        appendable : true,
        deletable: true
    });

    grid.columnByName("EmployeeID").styleCallback = function (column, cell) {
        if (cell.value > 5) return "rg-data-cell bold-cell";
    };
    grid.setRowStyleCallback(function(grid, item) {
        if (item.index % 2 == 0) return "alternate-row";
    })
};

function setActions(container) {
    createCheckBox(container, "Soft Deleting", function (e) {
        ds.setOptions({
            softDeleting: e.currentTarget.checked
        })
        // ds.softDeleting = e.currentTarget.checked;
    }, false);
    createButton(container, "Insert", function (e) {
        grid.setFocus();
        grid.beginInsertRow();
    });
    createButton(container, "Delete", function (e) {
        var itemIndecies = grid.getSelectedItems();
        if (itemIndecies.length > 0) {
            grid.deleteSelection();
        }
    });
    createCheckBox(container, "StateBar", function (e) {
        grid.setStateBar({
            visible: e.currentTarget.checked
        })

    }, true);
    createListBox(container, "State Mark", ["default", "text", "none", "image"], function (e) {
        grid.setStateBar({
            mark: e.currentTarget.value
        })
    }, "default");
}
