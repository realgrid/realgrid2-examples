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

    grid.rowIndicator.displayValue = "row";

    grid.columnByName("EmployeeID").styleCallback = function (column, cell) {
        if (cell.value > 5) return "rg-data-cell bold-cell";
    };
    grid.setRowStyleCallback(function(grid, item) {
        if (item.index % 2 == 0) return "alternate-row";
    })
};

function setActions(actionContainer) {
    createCheckBox(actionContainer, "Paging", function (e) {
        grid.setPaging(e.currentTarget.checked);
    }, false);
    createButton(actionContainer, 'First', function(e) {
        grid.setPage(0);
        // grid.page = 0;
    });
    createButton(actionContainer, 'Prev', function(e) {
        grid.setPage(grid.getPage()-1);
        // grid.page--;
    });
    createButton(actionContainer, 'Next', function(e) {
        grid.setPage(grid.getPage()+1);
        // grid.page++;
    });
    createButton(actionContainer, 'Last', function(e) {
        grid.setPage(grid.getPageCount()-1)
        // grid.page = grid.pageCount;
    });
    createButton(actionContainer, 'Go', function(e) {
        grid.setPage(parseInt(txtPage.value));
    });
    var txtPage = createTextbox(actionContainer, '0', 50);
}
