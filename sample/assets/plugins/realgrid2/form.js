var ds, gridContainer, grid, form;
var rows;

function createGrid(container) {
    ds = new RealGrid.LocalDataProvider();
    ds.setFields(fields_01);
    
    grid = new RealGrid.GridView(container);
    grid.setDataSource(ds);
    grid.setColumns(columns_01);//(columns_02);
    ds.setRows(testJsonRows);

    grid.setRowIndicator({
        popupMenu: "menu1"
    });
    grid.addPopupMenu("menu1", [
        {
            label: "Form",
            menuItemClick: function () {
                form.visible = true;
            }
        }
    ]);
    
    grid.addPopupMenu("menuForm", [
        {
            label: "Grid",
            callback: function () {
                form.visible = false;
            }
        }, {
            label: "Delete Row",
            callback: function () {
                form.deleteRow();
            }
        }, {
            label: "Add Row",
            callback: function () {
                form.appendRow();
            }
        }
    ]);

    form = grid._view.container.formView;
    form.visible = true;
    form.options.modal = true;
    form.options.modalPadding = "10% 8%";
    form.options.autoClose = true;
    form.options.saveLabel = "저장";
    form.options.cancelLabel = "취소";
    form.model.header.height = 40;
    form.model.footer.height = 40;


    form.model.load(getColumnsToFormModel(grid));
    form.focusedIndex = 0;

    grid.setFocus();

    grid.displayOptions.rowHoverType = "row";

    grid.setEditOptions({
        insertable: true,
        appendable : true
    });

    grid.setHeader({
        showTooltip: true
    })
    // grid.header.showTooltip = true;

    grid.columnByName("EmployeeID").styleCallback = function (column, cell) {
        if (cell.value > 5) {
            return "rg-data-cell bold-cell";
        }
        // if (cell.value > 5) return {
        //     style: "",
        //     renderer: "",
        //     editable: false,
        //     readonly: false
        // }
    };
    grid.setRowStyleCallback(function (grid, item) {
        if (item.index % 2 == 0) {
            return "alternate-row";
        }
    });

    // grid.setButtonClickCallback(function (grid, index) {
    //     alert("Cell Button: " + index.getValue());    
    // });

    grid.onShowTooltip = function(grid, index, value) {
        return value;
    };
    grid.onShowHeaderTooltip = function (grid, column, value) {
        return value;
    };

    grid.setGroupingOptions({
        enabled:true,
        toast: {
            visible : true
        }
    });

    // grid.groupingOptions.toast.visible = true;

    grid._view.setFocusedItem(0);
};

function setActions(actionContainer) {
    createButton(actionContainer, "Form", function (e) {
        form.visible = true;
    });
    createButton(actionContainer, "Home", function (e) {
        form.currentRow = grid._view.getItem(0);
    });
    createButton(actionContainer, "Prev", function (e) {
        var item = form.currentRow;
        if (item && item.index > 0) {
            form.current

            item = grid._view.getItem(item.index - 1);
            form.currentRow = item;
        }
    });
    createButton(actionContainer, "Next", function (e) {
        var item = form.currentRow;
        if (item && item.index < grid._view.itemCount - 1) {
            item = grid._view.getItem(item.index + 1);
            form.currentRow = item;
        }
    });
    createButton(actionContainer, "End", function (e) {
        form.currentRow = grid._view.getItem(grid._view.itemCount - 1);
    });
}
