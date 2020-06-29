var ds, gridContainer, grid;
var rows;

function createGrid(container) {
    ds = new RealGrid.LocalDataProvider();
    ds.setFields(fields_01);
    ds.restoreMode = "explict";
    
    grid = new RealGrid.GridView(container);
    grid.setDataSource(ds);

    grid.setColumns(columns_01);
    ds.setRows(testJsonRows);

    grid.setFooters([
        //{},
        {
            styleName: "footer-green"
        }
    ]);

    grid.setHeaderSummaries({
        visible:true,
        items:[
//            {},
            {
                styleName: "summary-blue"
            }
    ]});
    // grid.headerSummaries.visible = true;

    var layout = [
        "OrderID",
        {
            name: "companyGroup",
            //direction: "vertical",
            items: [    
                "Country",
                50,
                50,
                {
                    column: "CompanyName",
                    cellSpan: 2
                },
                50,
                50
            ],
            header: {
                text: "Company Group",
                visible: true
            }
        }, 
        // "CustomerID",
        // "EmployeeID",
        // "OrderDate",
        // "Phone"
    ];
    var layout2 = [
        "OrderID",
        {
            name: "companyGroup",
            direction: "vertical",
            items: [
                {
                    items: [
                        "Country",
                        30,
                        30,
                        "CompanyName",
                        30,
                        30
                    ],
                    header: false
                },
                {
                    items: [
                        "CustomerID",
                        "EmployeeID"
                    ],
                    header: false
                }
            ],
            header: {
                text: "Company Group",
                visible: false
            }
        }
    ];
    var layout3 = [
         "EmployeeID",
        {
            name: "companyGroup",
            direction: "vertical",
            items: [
                {
                    items: [
                        {
                            column: "Country",
                            cellSpan: 3,
                            width: 50
                        },
                        50,50,
                        {
                            column: "CompanyName",
                            cellSpan: 3,
                            width: 50
                        },
                        50,50,
                    ],
                    header: false
                },
                {
                    items: [
                        {
                            column: "CustomerID",
                            cellSpan: 2,
                            width: 50
                        },
                        50,
                        {
                            column: "OrderDate", 
                            cellSpan: 2,
                            width: 50
                        },
                        50,
                        {
                            column: "OrderID", 
                            cellSpan: 2,
                            width: 50
                        },
                        50,
                    ],
                    header: false
                }
            ],
            header: {
                text: "Company Group",
                visible: false
            }
        },
        "Phone"
    ];
    var layout4 = [
        {
            name: "companyGroup",
            items: [
                {
                    column: "Country",
                    cellSpan: 3
                },
                20,20,
                {
                    column: "CompanyName",
                    cellSpan: 3
                },
                20,20,
            ],
            header: true
        }
    ];
    var layout5 = [
        {
            items: [
                {
                    direction: "vertical",
                    items: [
                        {
                            column: "Country",
                        },
                        {
                            column: "CompanyName",
                        },
                    ],
                    header: "Group1"
                },
                {
                    direction: "vertical",
                    items: [
                        {
                            column: "CustomerID",
                        },
                        // {
                        //     column: "OrderDate", 
                        // },
                    ],
                    header: "Group2"
                }
            ],
            header: {
                text: "Company Group",
                visible: true
            }
        },
            // "OrderID",
        // "CustomerID",
        // "EmployeeID",
        // "OrderDate",
        // "Phone"
    ];
    var layout6 = [
        "EmployeeID",
       {
           name: "companyGroup",
           direction: "horizontal",
           items: [
               {
                    direction: "vertical",
                    items: [
                       {
                           column: "Country",
                           cellSpan: 3,
                           width: 50
                       },
                       50,50,
                       {
                           column: "CompanyName",
                           cellSpan: 3,
                           width: 50
                       },
                       50,50,
                   ],
                   header: false
               },
               {
                    direction: "vertical",
                    items: [
                       {
                           column: "CustomerID",
                           cellSpan: 2,
                           width: 50
                       },
                       50,
                       {
                           column: "OrderDate", 
                           cellSpan: 2,
                           width: 50
                       },
                       50,
                       {
                           column: "OrderID", 
                           cellSpan: 2,
                           width: 50
                       },
                       50,
                   ],
                   header: false
               }
           ],
           header: {
               text: "Company Group",
               visible: false
           }
       },
       "Phone"
    ];
    var layout7 = [
        // "EmployeeID",
        {
            name: "companyGroup",
            direction: "horizontal",
            items: [
                {
                        direction: "vertical",
                        items: [
                        {
                            column: "Country",
                            cellSpan: 3
                        },
                        0, 0,
                        {
                            column: "CompanyName",
                            cellSpan: 3
                        },
                        0,0,
                    ],
                    header: false
                },
                {
                        direction: "vertical",
                        items: [
                        {
                            column: "CustomerID",
                            cellSpan: 2
                        },
                        0,
                        {
                            column: "OrderDate", 
                            cellSpan: 2
                        },
                        0,
                        {
                            column: "OrderID", 
                            cellSpan: 2
                        },
                        0,
                    ],
                    header: false
                }
            ],
            header: {
                text: "Company Group",
                visible: false
            }
        },
        // "Phone"
    ];
    var layout8 = [
        "EmployeeID",
        {
            direction: "vertical",
            items: [
                {
                    column: "Country",
                    cellSpan: 3
                },
                "OrderDate", 
                0
            ],
            header: false
        },
        "Phone"
    ];
    
    // grid.setColumnLayout(layout);
    grid.setColumnLayout(layout4);

    grid.setOptions({
        header:{
            //minHeight:46
        },
        footer:{
            //minHeight: 46
        },
        displayOptions: {
            rowHeight : 46
        },
        editOptions : {
            insertable: true,
            appendable: true
        }
    })

    grid.columnByName("EmployeeID").setHeaderSummaries([
        "'Summary'",
        "count / 2"
    ]);
    grid.columnByName("EmployeeID").styleCallback = function (column, cell) {
        if (cell.value > 5) return "rg-data-cell bold-cell";
    };
    grid.columnByName("EmployeeID").suffix = " %";
    grid.setRowStyleCallback(function(grid, item) {
        if (item.index % 2 == 0) return "alternate-row";
    })
    grid.setButtonClickCallback(function (grid, index) {
        alert("Cell Button: " + index.getValue());    
    });  
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
    createButton(actionContainer, "Layout 1", function (e) {
        var layout = [
            {
                items: [
                    {
                        direction: "vertical",
                        items: [
                            {
                                column: "Country",
                            },
                            {
                                column: "CompanyName",
                            },
                        ],
                        header: "Group1"
                    },
                    {
                        direction: "vertical",
                        items: [
                            {
                                column: "CustomerID",
                            },
                            // {
                            //     column: "OrderDate", 
                            // },
                        ],
                        header: "Group2"
                    }
                ],
                header: {
                    text: "Company Group",
                    visible: false
                }
            },
                // "OrderID",
            // "CustomerID",
            // "EmployeeID",
            // "OrderDate",
            // "Phone"
        ];

        grid.setColumnLayout(layout);
        // grid.cellLayout = layout;
        //grid.setHeader({minHeight:46});
        //grid.setFooter({minHeight:46});
        grid.setDisplayOptions({rowHeight: 46});
        // grid.header.minHeight = 46;
        // grid.footer.minHeight = 46;
        // grid.displayOptions.rowHeight = 46;
    });
    createButton(actionContainer, "Layout 2", function (e) {
        var layout = [
            "OrderID",
            {
                column: "CustomerID",
                width: 200
            },
            {
                name: "companyGroup",
                direction: "horizontal",
                items: [
                    "Country",
                    "CompanyName"
                ],
                header: {
                    text: "Company"
                }
            }, 
            {
                column: "EmployeeID"
            },
            "OrderDate",
            "Phone"
        ];
        grid.setColumnLayout(layout);
        //grid.setHeader({minHeight:46});
        //grid.setFooter({minHeight:46});
        grid.setDisplayOptions({rowHeight: 46});

        // grid.cellLayout = layout;
        // grid.header.minHeight = 46;
        // grid.footer.minHeight = 46;
        // grid.displayOptions.rowHeight = 46;
    });
    createButton(actionContainer, "Layout 3", function (e) {
        var layout = [
            "OrderID",
            "CustomerID",
            {
                name: "companyGroup",
                direction: "vertical",
                width: 250,
                items: [
                    "Country",
                    "CompanyName"
                ],
                header: {
                    text: "Company Group",
                    visible: false
                }
            }, 
            "EmployeeID",
            "OrderDate",
            "Phone"
        ];
        grid.setColumnLayout(layout);
        //grid.setHeader({minHeight:46});
        //grid.setFooter({minHeight:46});
        grid.setDisplayOptions({rowHeight: 46});

        // grid.cellLayout = layout;
        // grid.header.minHeight = 72;
        // grid.footer.minHeight = 46;
        // grid.displayOptions.rowHeight = 46;
    });
    createButton(actionContainer, "Layout 4", function (e) {
        var layout = [
            "OrderID",
            "CustomerID",
            {
                name: "companyGroup",
                direction: "vertical",
                width: 250,
                items: [
                    {
                        name: "countryGroup",
                        direction: "horizontal",
                        items: [
                            "Country",
                            "Phone"
                        ],
                        header: {
                            text: "Country Group"
                        }
                    },
                    "CompanyName"
                ],
                header: {
                    text: "Company Group"
                }
            }, 
            "EmployeeID",
            "OrderDate",
            "Phone2"
        ];

        grid.setColumnLayout(layout);
        //grid.setHeader({minHeight:72});
        // grid.setHeader({height: 200});
        //grid.setFooter({minHeight:46});
        grid.setDisplayOptions({rowHeight: 46});

        // grid.cellLayout = layout;
        // grid.header.minHeight = 72;
        // grid.footer.minHeight = 46;
        // grid.displayOptions.rowHeight = 46;
    });
    createButton(actionContainer, "Clear Layout", function (e) {

        grid.setColumnLayout(null);
        //grid.setHeader({minHeight:23});
        //grid.setFooter({minHeight:23});
        grid.setDisplayOptions({rowHeight: 23});

        // grid.cellLayout = null;
        // grid.header.minHeight = 23;
        // grid.footer.minHeight = 23;
        // grid.displayOptions.rowHeight = 23;
    });
    createCheckBox(actionContainer, "Fixed Columns", function (e) {
        // grid.setFixedOptions({colCount: e.currentTarget.checked ? 2 : 0})
        grid.setFixedOptions({colCount: e.currentTarget.checked ? 2 : 0})
    });
    createCheckBox(actionContainer, "Fixed Rows", function (e) {
        grid.setFixedOptions({rowCount: e.currentTarget.checked ? 2 : 0})
    });
    createCheckBox(actionContainer, "Right Columns", function (e) {
        grid.setFixedOptions({rightCount: e.currentTarget.checked ? 2 : 0})
    });
    createButton(actionContainer, "Ungroup By", function (e) {
        grid.groupBy(null);
    });
    createButton(actionContainer, "Group By", function (e) {
        grid.setRowGroup({mergeMode: false});
        // grid.setRowGroup({mergeMode:false});
        grid.groupBy(["orderid"]);
    });
    createButton(actionContainer, "Column Merge", function (e) {
        grid.layoutByColumn("OrderID").mergeRule = "value";
    });
    createButton(actionContainer, "Clear Merge", function (e) {
        grid.layoutByColumn("OrderID").mergeRule = null;
    });
    createButton(actionContainer, "CheckBar First", function (e) {
        grid.setCheckBar({displayOrder:-1});
    });
    createButton(actionContainer, "Footers", function (e) {
        grid.setFooters([{}, {}]);
    });
    createCheckBox(actionContainer, "Fixed Resizable", function (e) {
        grid.setFixedOptions({ resizable: e.currentTarget.checked })
    });
    createCheckBox(actionContainer, "Grouping", function (e) {
        grid.setGroupingOptions({ enabled: e.currentTarget.checked })
    });
}
