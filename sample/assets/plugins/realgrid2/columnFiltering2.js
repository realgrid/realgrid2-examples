var ds, gridContainer, grid;
var rows;
var filters;
var column;

function createGrid(container) {
    ds = new RealGrid.LocalDataProvider();
    ds.setFields(fields_04);

    grid = new RealGrid.GridView(container);
    grid.setDataSource(ds);

    // gridContainer = new RealGrid.GridContainer(container);
    // grid = gridContainer.gridView;
    // grid.dataSource = ds;

    grid.setColumns(columns_04);
    ds.setRows(resJson2);
    grid.columnByField("날짜").autoFilter = true;
    
}