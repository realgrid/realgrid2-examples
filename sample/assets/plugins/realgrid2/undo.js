var ds, gridContainer, grid;
var rows;
var btnUndo, btnRedo;

function createGrid(container) {
    ds = new RealGrid.LocalDataProvider(true);
    ds.setFields(fields_01);
    
    grid = new RealGrid.GridView(container);
    grid.setDataSource(ds);
    grid.setColumns(columns_01);
    ds.setRows(testJsonRows);
    // loadData('sample.csv');
    // loadData('sample.json')
    ds.setOptions({
        undoable: true
    });

    grid.setOptions({
        undoable: true
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
    grid.setButtonClickCallback(function (grid, index) {
        alert("Cell Button: " + index.getValue());    
    });  

    grid.onCommandStackChanged = function (grid, undoable, redoable) {
        btnUndo.disabled = !undoable;
        btnRedo.disabled = !redoable;
    }
};

function setActions(actionContainer) {
    btnUndo = createButton(actionContainer, "Undo", function (e) {
        grid.undo();
    });
    btnRedo = createButton(actionContainer, "Redo", function (e) {
        grid.redo();
    });
    btnUndo.disabled = true;
    btnRedo.disabled = true;
    createButton(actionContainer, "Group By", function (e) {
        grid.setRowGroup({mergeMode:false});
        //grid.groupBy([0, 1]);
        grid.groupBy(["country", "companyName"]);
    });
    createButton(actionContainer, "Merged Group By", function (e) {
        grid.setRowGroup({
            mergeMode: true
        });

        grid.groupBy(["country", "companyName"]);
        //grid.groupByFieldNames(["country"]);
    });
    createButton(actionContainer, "Ungroup By", function (e) {
        grid.groupBy(null);
    });
    createButton(actionContainer, "Column Merge", function (e) {
        grid.columnByName("Country").mergeRule = "value";
        grid.columnByName("CompanyName").mergeRule = "value";
        grid.columnByName("OrderDate").mergeRule = "value";
        grid.columnByName("Country2").mergeRule = "value";
    });
    createButton(actionContainer, "Clear Column Merge", function (e) {
        grid.columnByName("Country").mergeRule = null;
        grid.columnByName("CompanyName").mergeRule = null;
        grid.columnByName("OrderDate").mergeRule = null;
        grid.columnByName("Country2").mergeRule = null;
    });
    createListBox(actionContainer, "Selection", ["block", "rows", "columns"], function (e) {
        grid.setDisplayOptions({
            selectionStyle: e.currentTarget.value
        })

    }, "block")
    createCheckBox(actionContainer, "softDeleting", function (e) {
        ds.softDeleting = e.currentTarget.checked;
    }, false);
    createButton(actionContainer, "Commit", function (e) {
        grid.commit();
    });
    createButton(actionContainer, "Insert", function (e) {
        var index = grid.getCurrent()
        if (index.itemIndex < 0) {
            alert('행을 추가할 위치를 먼저 선택하세요.')
        } else {
            grid.beginInsertRow();
            grid.setFocus();
        }
    });
    createButton(actionContainer, "Append", function (e) {
        grid.beginAppendRow();
        grid.setFocus();
    });
    createButton(actionContainer, "Set Value", function (e) {
        var index = grid.getCurrent();
        if (index.dataRow >= 0) {
            ds.setValue(index.dataRow, index.fieldName, "XXX");
        }
    });
    createButton(actionContainer, "Remove", function (e) {
        var index = grid.getCurrent();
        if (index.dataRow < 0) {
            alert('삭제할 위치를 먼저 선택하세요.')
        } else {
            ds.removeRow(index.dataRow);
        }
    });
    createButton(actionContainer, "Set Updated", function (e) {
        var index = grid.getCurrent();
        if (index.dataRow < 0) {
            alert('상태를 변경할 위치를 먼저 선택하세요.')
        } else {
            ds.setRowState(index.dataRow, RealGrid.RowState.UPDATED);
        }
    });
    createButton(actionContainer, "Clear States", function (e) {
        ds.clearRowStates();
    });
    createButton(actionContainer, "Update Rows", function (e) {
        var index = grid.getCurrent();
        if (index.dataRow < 0) {
            alert("수정할 행들을 먼저 선택하세요.");
        } else {
            var vals = [
                { Country: "xxx" },
                { Country: "zzz" }
            ]
            ds.updateRows(index.dataRow, vals, 0, 2);
        }
    });
    createButton(actionContainer, "Remove Rows", function (e) {
        var index = grid.getCurrent();
        if (index.dataRow < 0) {
            alert("삭제할 행들을 먼저 선택하세요.");
        } else {
            var rows = grid.getSelectedRows();
            ds.removeRows(rows);
        }
    });
    createButton(actionContainer, "Insert Rows", function (e) {
        var index = grid.getCurrent();
        if (index.dataRow < 0) {
            alert("추가할 위치를 먼저 선택하세요.");
        } else {
            var rows = [
                { Country: "XXX" },
                { Country: "ZZZ" }
            ]
            ds.insertRows(index.dataRow, rows);
        }
    });
}
