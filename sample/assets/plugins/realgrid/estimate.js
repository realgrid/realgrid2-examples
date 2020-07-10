var ds, gridContainer, grid;
var rows;

function createGrid(container) {
    ds = new RealGrid.LocalDataProvider();
    ds.setFields(fields_01);
    
    grid = new RealGrid.GridView(container);
    grid.setDataSource(ds);
    grid.setColumns(columns_01);
    ds.setRows(testJsonRows);

    grid.filteringOptions.selector.showButtons = true;
    grid.displayOptions.refreshMode = "visibleOnly";
    grid.displayOptions.emptyMessage = "표시할 데이타가 없습니다.";
    grid.sortingOptions.showSortOrder = true;
    grid.sortingOptions.style = "reverse";
    grid.displayOptions.rowHoverType = "row";    
    grid.displayOptions.rowResizable = true;


    grid.setEditOptions({
        insertable: true,
        appendable : true
    });

    grid.setEditorOptions({
        viewGridInside: true
    })

    grid.onContextMenuPopup = function (grid, x, y, elementName) {
        console.log(arguments);
        // realgrid-utils.js 기본 팝업 메뉴 생성
        setContextMenu(grid);
        
      };
    // realgrid-utils.js 기본 팝업 메뉴 실행
    grid.onContextMenuItemClicked = onContextMenuClick;
      
    grid.columnByName("EmployeeID").styleCallback = function (column, cell) {
        if (cell.value > 5) return "rg-data-cell bold-cell";
    };
    grid.setRowStyleCallback(function(grid, item) {
        if (item.index % 2 == 0) return "alternate-row";
    })
};

function setActions(actionContainer) {
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
}
