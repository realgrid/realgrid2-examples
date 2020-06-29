var ds, gridContainer, grid;
var rows;

function createGrid(container) {
    ds = new RealGrid.LocalDataProvider();
    grid = new RealGrid.GridView(container);
    grid.setDataSource(ds);

    // rgutils.js 유틸 함수를 사용해 필드와 컬럼을 함께 생성할 수 있다.
    setFieldsNColumns(ds, grid,
        [
        {"name": "OrderID", "width": "80"}, 
        {"name": "EmployeeID", "width": "80"}, 
        {"name": "Country", "width": "100"}, 
        {"name": "CompanyName", "width": "200"}, 
        {"name": "CustomerID", "width": "100"},
        {"name": "OrderDate", "width": "100"},
        {"name": "Phone", "width": "150"}, 
        {"name": "ProductName","width": "200"},
        {"name": "Quantity", "width": "100"},
        {"name": "UnitPrice","width": "100"},
        {"name": "RequiredDate", "width": "100"},
        {"name": "ShippedDate", "width": "100"},
        {"name": "ShipVia", "width": "100"},
        {"name": "ShipName", "width": "200"},
        {"name": "ShipAddress", "width": "200"},
        {"name": "ShipCity", "width": "100"},
        {"name": "ShipPostalCode", "width": "100"},
        {"name": "ShipCountry", "width": "150"}
    ]
    );
    ds.setRows(testJsonRows);
    grid.sortingOptions.showSortOrder = true;
    grid.sortingOptions.style = "reverse";
    grid.header.height = 32;
    
    grid.onContextMenuPopup = function (grid, x, y, elementName) {
        // rgutils.js 기본 팝업 메뉴 생성
        setContextMenu(grid);
    };
        // rgutils.js 기본 팝업 메뉴 실행
    grid.onContextMenuItemClicked = onContextMenuClick;
    grid.onSelectionChanged = onSelectionChanged;
};

function onSelectionChanged(grid) {
    var selInfo = grid.getSelection();
    var datas = grid.getSelectionData();

    console.log(selInfo);
    console.log(datas);
}