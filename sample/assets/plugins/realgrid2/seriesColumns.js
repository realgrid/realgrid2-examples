var ds, gridContainer, grid;
var rows;

function createGrid(container) {
    ds = new RealGrid.LocalDataProvider();
    ds.setFields(fields_03);
    
    grid = new RealGrid.GridView(container);
    grid.setDataSource(ds);
    grid.setColumns(columns_03);
    ds.setRows(resJson);

    grid.displayOptions.rowHeight = 32;

    grid.setEditOptions({
        insertable: true,
        appendable : true
    });
};

function setActions(actionContainer) {
}
