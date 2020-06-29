var ds, gridContainer, grid;
var rows;

function createGrid(container) {
    ds = new RealGrid.LocalDataProvider();
    ds.setFields(fields_01);
    
    grid = new RealGrid.GridView(container);
    grid.setDataSource(ds);
    grid.setColumns(columns_01);
    ds.setRows(testJsonRows);

    grid.setFooters(
        {   visible: true,
            items: [{},
                    {   styleName: "footer-green" }
            ]
        });

    grid.setHeaderSummaries({
        visible: true, 
        items:[ {},
                { styleName: "summary-blue" }
        ]
    });
    // grid.headerSummaries.visible = true;

    grid.rowGroup.setFooters([
        {},
        {}
    ])

    grid.setEditOptions({
        insertable: true,
        appendable : true
    });

    grid.setRowGroup({
        collapsedAdornments : "both"
    })
    // grid.rowGroup.collapsedAdornments = "both";
    grid.setGroupingOptions({
        enabled: true
    })
    // grid.groupingOptions.enabled = true;


    grid.columnByName("EmployeeID").styleCallback = function (column, cell) {
        if (cell.value > 5) return "rg-data-cell bold-cell";
    };
    grid.setRowStyleCallback(function(grid, item) {
        if (item.index % 2 == 0) return "alternate-row";
    })
    grid.setButtonClickCallback(function (grid, index) {
        alert("Cell Button: " + index.getValue());    
    });    

    grid.columnByName("UnitPrice2").headerSummaries.get(0).valueCallback = function (summary, value) {
        return 0;
    }

    var col = grid.columnByName("EmployeeID");
    col.footer.expression = "max";
    col.footer.template = "<span style='color:red'>${value}</span><span style='color:blue;font-weight:bold;'>%</span>";
    col.headerSummary.expression = "min";
    col.headerSummary.template = "<span style='color:green'>${value}</span><span style='color:red;font-weight:bold;'>%</span>";
    col.values = {
        sub: "Good"
    };
    col.header.text = "Emp";
    col.header.template = "<span>${value}</span>&nbsp;<span style='color:red'>${sub}</span>";
};

function setActions(actionContainer) {
    // createButton(actionContainer, 'scrollTest1', function(e) {
    //     var width = window.outerWidth;
    //     var height = window.outerHeight;
    //     window.resizeTo(800, 600);
    //     setTimeout(function () {
    //         var t = Date.now();
    //         for (var i = 0; i < 20 ; i++) {
    //             ++grid.topIndex;
    //             grid.container._render(0)
    //         }
    //         t = Date.now() - t;
    //         window.resizeTo(width, height);
    //         alert(t);
    //     }, 1000)
    // });
    // createButton(actionContainer, 'scrollTest2', function(e) {
    //     var width = window.outerWidth;
    //     var height = window.outerHeight;
    //     window.resizeTo(800, 600);
    //     setTimeout(function () {
    //         var t = Date.now();
    //         for (var i = 0; i < 10 ; i++) {
    //             grid.leftPos = (i % 2) * 500;
    //             grid.container._render(0)
    //         }
    //         t = Date.now() - t;
    //         window.resizeTo(width, height);
    //         alert(t);
    
    //     }, 1000)
    // });
    // createButton(actionContainer, "TEST", function (e) {
    //     grid.leftPos = 10000;
    // });
    // createButton(actionContainer, "TEST2", function (e) {
    //     console.log(grid.leftPos + " == " + grid['_hscrollBar']['_pos']);
    // });
    // createButton(actionContainer, "Group By", function (e) {
    //     grid.setRowGroup({mergeMode:false});
    //     //grid.groupBy([0, 1]);
    //     grid.groupByFieldNames(["country", "companyName"]);
    // });
    // createButton(actionContainer, "Merged Group By", function (e) {
    //     grid.rowGroup.mergeMode = true;
    //     //grid.groupBy([0, 1]);
    //     grid.groupByFieldNames(["country", "companyName"]);
    //     //grid.groupByFieldNames(["country"]);
    // });
    // createButton(actionContainer, "Ungroup By", function (e) {
    //     grid.groupBy(null);
    // });
    // createButton(actionContainer, "Column Merge", function (e) {
    //     grid.columnByName("Country").mergeRule = "value";
    //     grid.columnByName("CompanyName").mergeRule = "value";
    //     grid.columnByName("OrderDate").mergeRule = "value";
    //     grid.columnByName("Country2").mergeRule = "value";
    // });
    // createButton(actionContainer, "Clear Column Merge", function (e) {
    //     grid.columnByName("Country").mergeRule = null;
    //     grid.columnByName("CompanyName").mergeRule = null;
    //     grid.columnByName("OrderDate").mergeRule = null;
    //     grid.columnByName("Country2").mergeRule = null;
    // });
    // createCheckBox(actionContainer, "expandWhenGrouping", function (e) {
    //     grid.groupingOptions.expandWhenGrouping = e.currentTarget.checked;
    // }, true);
    // createCheckBox(actionContainer, "RowIndicator", function (e) {
    //     grid.rowIndicator.visible = e.currentTarget.checked;
    // }, true);
    // createCheckBox(actionContainer, "StateBar", function (e) {
    //     grid.stateBar.visible = e.currentTarget.checked;
    // }, true);
    // createCheckBox(actionContainer, "CheckBar", function (e) {
    //     grid.checkBar.visible = e.currentTarget.checked;
    // }, true);
    // createCheckBox(actionContainer, "Fixed Rows", function (e) {
    //     grid.setFixedOptions({rowCount: e.currentTarget.checked ? 2 : 0})
    // });
    // createCheckBox(actionContainer, "Right Fixed", function (e) {
    //     grid.fixedOptions.rightFixed = e.currentTarget.checked;
    // }, true);
    // createListBox(actionContainer, "Selection", ["block", "rows", "columns"], function (e) {
    //     grid.displayOptions.selectionStyle = e.currentTarget.value;
    // }, "block")
    // createListBox(actionContainer, "Row Hover", ["none", "row", "data", "fill", "cell"], function (e) {
    //     grid.displayOptions.rowHoverType = e.currentTarget.value;
    // }, "none")
    // createButton(actionContainer, "Insert", function (e) {
    //     if (grid.focusedRow < 0) {
    //         alert('행을 추가할 위치를 먼저 선택하세요.')
    //     } else {
    //         grid.insert();
    //         grid.setFocus();
    //     }
    // });
    // createButton(actionContainer, "Append", function (e) {
    //     grid.append();
    //     grid.setFocus();
    // });
    // createButton(actionContainer, "Layout 1", function (e) {
    //     var layout = [
    //         {
    //             name: "companyGroup",
    //             direction: "horizontal",
    //             items: [
    //                 "Country",
    //                 "CompanyName"
    //             ],
    //             header: {
    //                 text: "Company"
    //             }
    //         }, 
    //         "OrderID",
    //         "CustomerID",
    //         "EmployeeID",
    //         "OrderDate",
    //         "Phone"
    //     ];
    //     grid.cellLayout = layout;
    //     grid.header.minHeight = 46;
    //     grid.footer.minHeight = 46;
    //     grid.displayOptions.rowHeight = 46;
    // });
    // createButton(actionContainer, "Layout 2", function (e) {
    //     var layout = [
    //         "OrderID",
    //         {
    //             column: "CustomerID",
    //             width: 200
    //         },
    //         {
    //             name: "companyGroup",
    //             direction: "horizontal",
    //             items: [
    //                 "Country",
    //                 "CompanyName"
    //             ],
    //             header: {
    //                 text: "Company"
    //             }
    //         }, 
    //         {
    //             column: "EmployeeID"
    //         },
    //         "OrderDate",
    //         "Phone"
    //     ];
    //     grid.cellLayout = layout;
    //     grid.header.minHeight = 46;
    //     grid.footer.minHeight = 46;
    //     grid.displayOptions.rowHeight = 46;
    // });
    // createButton(actionContainer, "Layout 3", function (e) {
    //     var layout = [
    //         "OrderID",
    //         "CustomerID",
    //         {
    //             name: "companyGroup",
    //             direction: "vertical",
    //             width: 250,
    //             items: [
    //                 "Country",
    //                 "CompanyName"
    //             ],
    //             header: {
    //                 text: "Company"
    //             }
    //         }, 
    //         "EmployeeID",
    //         "OrderDate",
    //         "Phone"
    //     ];
    //     grid.cellLayout = layout;
    //     grid.header.minHeight = 72;
    //     grid.footer.minHeight = 46;
    //     grid.displayOptions.rowHeight = 46;
    // });
    // createButton(actionContainer, "Layout 4", function (e) {
    //     var layout = [
    //         //"OrderID",
    //         //"CustomerID",
    //         {
    //             name: "companyGroup",
    //             direction: "vertical",
    //             width: 250,
    //             items: [
    //                 {
    //                     name: "countryGroup",
    //                     direction: "horizontal",
    //                     items: [
    //                         "Country",
    //                         "Phone"
    //                     ],
    //                     header: {
    //                         text: "Country Group"
    //                     }
    //                 },
    //                 "CompanyName"
    //             ],
    //             header: {
    //                 text: "Company Group"
    //             }
    //         }//, 
    //         //"EmployeeID",
    //         //"OrderDate",
    //         //"Phone"
    //     ];
    //     grid.cellLayout = layout;
    //     grid.header.minHeight = 72;
    //     grid.footer.minHeight = 46;
    //     grid.displayOptions.rowHeight = 46;
    // });
    // createButton(actionContainer, "Clear Layout", function (e) {
    //     grid.cellLayout = null;
    //     grid.header.minHeight = 23;
    //     grid.footer.minHeight = 23;
    //     grid.displayOptions.rowHeight = 23;
    // });
    createCheckBox(actionContainer, "Fixed Columns", function (e) {
        grid.setFixedOptions({colCount: e.currentTarget.checked ? 2 : 0})
    });
    createCheckBox(actionContainer, "Fixed Rows", function (e) {
        grid.setFixedOptions({rowCount: e.currentTarget.checked ? 2 : 0})
    });
    createCheckBox(actionContainer, "Right Columns", function (e) {
        grid.setFixedOptions({rightCount: e.currentTarget.checked ? 2 : 0})
    });
    createCheckBox(actionContainer, "Header Summary", function (e) {
        grid.headerSummaries.visible = e.currentTarget.checked;
    }, true);
    createCheckBox(actionContainer, "Row Grouping", function (e) {
        grid.setGroupingOptions({enabled: e.currentTarget.checked});
    }, true);
    // createButton(actionContainer, "Ungroup By", function (e) {
    //     grid.groupBy(null);
    // });
    // createButton(actionContainer, "Group By", function (e) {
    //     grid.setRowGroup({mergeMode:false});
    //     grid.groupByFieldNames(["country", "companyname"]);
    // });
    // createButton(actionContainer, "Column Merge", function (e) {
    //     grid.columnByName("OrderID").mergeRule = "value";
    // });
    // createButton(actionContainer, "Clear Merge", function (e) {
    //     grid.columnByName("OrderID").mergeRule = null;
    // });
    // createButton(actionContainer, "Inc Width", function (e) {
    //     var layout = grid.focusedLayout;
    //     if (layout) {
    //         layout.cellWidth += 5;
    //     } else {
    //         alert("너비를 변경할 컬럼을 먼저 선택하세요.")
    //     }
    // });
    // createButton(actionContainer, "Dec Widh", function (e) {
    //     var layout = grid.focusedLayout;
    //     if (layout) {
    //         layout.cellWidth -= 5;
    //     } else {
    //         alert("너비를 변경할 컬럼을 먼저 선택하세요.")
    //     }
    // });
    // createButton(actionContainer, "Inc Left Cell", function (e) {
    //     grid.leftCell += 1;
    // });
    // createButton(actionContainer, "Dec Left Cell", function (e) {
    //     grid.leftCell -= 1;
    // });
    // createCheckBox(actionContainer, "Grouping", function (e) {
    //     grid.setGroupingOptions({enabled: e.currentTarget.checked});
    // }, true);
}
