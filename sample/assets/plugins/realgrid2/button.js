var ds, gridContainer, grid;
var rows;

function createGrid(container) {
    ds = new RealGrid.LocalDataProvider();
    ds.setFields(fields_01);
    
    // gridContainer = new RealGrid.GridContainer(container);
    // grid = gridContainer.gridView;
    // grid.dataSource = ds;

    grid = new RealGrid.GridView(container);
    grid.setDataSource(ds);

    grid.addPopupMenu("menu1", [
        {label:"넓이를 테스트 중"},
        {label:"test2"},
        {label:"test3"}
    ]);	
    grid.addPopupMenu("menu2", [
        {label:"Menu21"},
        {label:"Menu22"},
        {label:"Menu23"}
    ]);	
     
    grid.setColumns(columns_01);
    ds.setRows(testJsonRows);
    // loadData('sample.csv');
    // loadData('sample.json')

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

    grid.setButtonClickCallback(function (grid, index) {
        alert("Cell Button: " + index.getValue());    
    });

    grid.onCellButtonClicked = function( grid, index) {
        var value = grid.getValue(index.itemIndex, index.column);
        alert("Cell Button: " + value);
    }
    // grid.setCellButtonClicked(function(grid, index) {

    // });
    // grid.addListener({
    //     onGridBaseCellButtonClicked: function (grid, index) {
    //         alert("Cell Button: " + index.getValue());
    //     }
    // });
};

function setActions(actionContainer) {
    createCheckBox(actionContainer, "editWhenFocused", function (e) {
        grid.editOptions.editWhenFocused = e.currentTarget.checked;
    });
}
