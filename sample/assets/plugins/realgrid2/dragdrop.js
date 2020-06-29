var ds, grid;
var ds2, grid2;
var rows;

function createGrid(container, container2) {
    ds = new RealGrid.LocalDataProvider();
    ds.setFields(fields_01);

    ds2 = new RealGrid.LocalDataProvider();
    ds2.setFields(fields_01);

    grid = new RealGrid.GridView(container);
    grid.setDataSource(ds);
    grid.setColumns(columns_01);

    grid2 = new RealGrid.GridView(container2);
    grid2.setDataSource(ds2);
    grid2.setColumns(columns_01);

    ds.setRows(testJsonRows);
    ds2.setRows(testJsonRows);

    grid.setEditOptions({
        insertable: true,
        appendable : true
    });
    
    grid2.setEditOptions({
        insertable: true,
        appendable : true
    });

    grid.setEditOptions({movable: true});
    grid.setDisplayOptions({rowMovable: true});

    grid2.setEditOptions({movable: true});
    grid2.setDisplayOptions({rowMovable: true});

    // grid2._view.dataDropOptions.dropMode = "copy";
    // grid2._view.dataDropOptions.dropMode = "move";
    // grid2._view.dataDropOptions.callback = function (source, sourceItems, target, targetItem) {
    //     //alert('good from ' + sourceItems + ' to ' + targetItem);
    //     var r = source.getRowOfItem(sourceItems[0]);
    //     var row = source.dataSource.getRowObject(r)
    //     //alert(JSON.stringify(row));

    //     r = target.getRowOfItem(targetItem);
    //     target.dataSource.insertRow(r, row);
    // }
    //grid2._view.dataDropOptions.fieldMapCallback = functon (source, target) {
    //}
    //grid2._view.fieldMap = {
    //}
};

function setActions(actionContainer) {
    createCheckBox(actionContainer, "Movable", function (e) {
        grid.setEditOptions({movable: e.currentTarget.checked})
        grid2.setEditOptions({movable: e.currentTarget.checked})
    }, true);
    createCheckBox(actionContainer, "Row Movable", function (e) {
        grid.setDisplayOptions({rowMovable: e.currentTarget.checked})
        grid2.setDisplayOptions({rowMovable: e.currentTarget.checked})
    }, true);
    createListBox(actionContainer, "DropMode", ["copy", "move"], function (e) {
        grid._view.dataDropOptions.dropMode = e.currentTarget.value;
        grid2._view.dataDropOptions.dropMode = e.currentTarget.value;
    }, "copy");
    createCheckBox(actionContainer, "DropCallback", function (e) {
        if (e.currentTarget.checked) {
            grid2._view.dataDropOptions.callback = function (source, sourceItems, target, targetItem) {
                //alert('good from ' + sourceItems + ' to ' + targetItem);
                var r = source.getRowOfItem(sourceItems[0]);
                var row = source.dataSource.getRowObject(r)
                //alert(JSON.stringify(row));

                r = target.getRowOfItem(targetItem);
                target.dataSource.insertRow(r, row);
            }
        } else {
            grid2._view.dataDropOptions.callback = null;
        }
    }, false);
}
