var ds, gridContainer, grid, form;
var rows;

function createGrid(container) {
    ds = new RealGrid.LocalDataProvider();
    ds.setFields(fields_01);
    
    grid = new RealGrid.GridView(container);
    grid.setDataSource(ds);
    grid.setColumns(columns_01);
    ds.setRows(testJsonRows);

    grid.setEditOptions({
        insertable: true,
        appendable : true
    });

    grid.setEditorOptions({
        viewGridInside: true
    })
    
    grid.columnByName("EmployeeID").styleCallback = function (column, cell) {
        if (cell.value > 5) return "rg-data-cell bold-cell";
    };
    grid.setRowStyleCallback(function(grid, item) {
        if (item.index % 2 == 0) return "alternate-row";
    })

    form = grid._view.container.formView;
    form.visible = true;
    form.options.modal = true;
    form.options.modalPadding = "10% 8%";
    form.options.autoClose = true;

    form.model.load(getColumnsToFormModel(grid));
    form.focusedIndex = 0;

    grid.setFocus();
    grid.displayOptions.rowHoverType = "row";
    
    grid.onEditSearch = function(grid, index, text) {
		var col = index.column;
		var values = [];
		var labels = [];
		for (var i = 1; i < 100; i++) {
			values.push(i.toString());
			labels.push("l"+i.toString());
		};
		grid.fillEditSearchItems(col, text, values, labels);
    }
    
    grid.onSearchCellButtonClick = function(grid, index, text) {
		var col = index.column;
		var values = [];
		var labels = [];
		for (var i = 1; i < 100; i++) {
			values.push(i.toString());
			labels.push("l"+i.toString());
        };
		return {
			values: values,
			labels: labels
		}        		
    }    
    
};

function valuecheck(dataRow, event) {
    var target = event.target;
    var value = target.value;
    var dataValue = ds.getValue(dataRow, "Country").split(",");
    var idx = dataValue.indexOf(value);
    if (target.checked) {
        if (idx < 0) {
            dataValue.push(value);
        }
    } else {
        if (idx >= 0)
        dataValue.splice(idx, 1);
    }
    ds.setValue(dataRow, "Country", dataValue.join(","));
}

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
