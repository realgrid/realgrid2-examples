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
    ds.setOptions({
        restoreMode: "explict"
    });

    grid.setEditOptions({
        insertable: true,
        appendable : true
    });

    grid.columnByName("EmployeeID").styleCallback = function (column, cell) {
        if (cell.value > 5) return "rg-data-cell bold-cell";
    };
    grid.setRowStyleCallback(function(grid, item) {
        if (item.index % 2 == 0) return "alternate-row";
    })
};

function setActions(actionContainer) {
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
    createButton(actionContainer, 'getEditCellValue', function(e) {
        console.log(grid.getEditValue());
    });
    createButton(actionContainer, 'setEditCellValue', function(e) {
        console.log(grid.setEditValue('ABC', true, true));
    });
    createButton(actionContainer, 'hideEditor', function(e) {
        console.log(grid.hideEditor());
    });
    createCheckBox(actionContainer, "FixedEditable", function (e) {
        grid.setFixedOptions({editable:e.currentTarget.checked});
    }, true);
    createCheckBox(actionContainer, "EditWhenClickFocused", function (e) {
        grid.setEditOptions({editWhenClickFocused:e.currentTarget.checked});
    });
    createCheckBox(actionContainer, "EditWhenFocused", function (e) {
        grid.setEditOptions({editWhenFocused:e.currentTarget.checked});
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
    createCheckBox(actionContainer, "CommitByCell", function (e) {
        grid.setEditOptions({
            commitByCell: e.currentTarget.checked
        });
    });
    createCheckBox(actionContainer, "CommitWhenLeave", function (e) {
        grid.setEditOptions({
            commitWhenLeave: e.currentTarget.checked
        });
    });
    createButton(actionContainer, 'Append', function(e) {
        grid.beginAppendRow();
    });
}
