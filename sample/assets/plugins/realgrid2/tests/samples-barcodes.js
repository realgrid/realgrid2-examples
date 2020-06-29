var fields_01 = [{
    "fieldName": "OrderID",
    "dataType": "text"
},
{
    "fieldName": "CustomerID",
    "dataType": "text"
},
{
    "fieldName": "EmployeeID",
    "dataType": "text"
},
{
    "fieldName": "OrderDate",
    "dataType": "datetime",
    "datetimeFormat": "yyyy-MM-dd",
    "amText": "오전",
    "pmText": "오후"
},
{
    "fieldName": "CompanyName",
    "dataType": "text"
},
{
    "fieldName": "Country",
    "dataType": "text"
},
{
    "fieldName": "Phone",
    "dataType": "text"
},
{
    "fieldName": "ProductName",
    "dataType": "text"
},
{
    "fieldName": "QuantityPerUnit",
    "dataType": "text"
},
{
    "fieldName": "Quantity",
    "dataType": "number"
},
{
    "fieldName": "UnitPrice",
    "dataType": "number"
}];

var columns_01 = [{
    "name": "Country",
    "fieldName": "Country",
    "type": "data",
    "width": "100",
    "header": {
        "text": "Country"
    }
}, {
    "name": "CompanyName",
    "fieldName": "CompanyName",
    "type": "data",
    "width": "120",
    "styleName": "blue-column",
    "header": {
        "text": "Company Name"
    }
}, {
    "name": "UnitPrice2",
    "fieldName": "UnitPrice",
    "type": "data",
    "width": "100",
    "renderer": {
        "type": "bar",
        "origin": "left",
        "barWidth": "80%"
    },
    "suffix": " $",
    "header": {
        "text": "Bar"
    },
    "footer": {
        "expression": "sum"
    }
}, {
    "name": "CustomerID",
    "fieldName": "CustomerID",
    "type": "data",
    "width": "70",
    "header": {
        "text": "CustomerID"
    },
}, {
    "name": "CustomerID",
    "fieldName": "CustomerID",
    "type": "data",
    "width": "150",
    "renderer": {
        "type": "code39"
    },
    "header": {
        "text": "Code 39"
    },
    "footer": {
        "expression": "max",
        "groupExpression": "max"
    }
}, {
    "name": "CustomerID",
    "fieldName": "CustomerID",
    "type": "data",
    "width": "200",
    "renderer": {
        "type": "code128"
    },
    "header": {
        "text": "Code 128"
    },
}, {
    "name": "EmployeeID",
    "fieldName": "EmployeeID",
    "type": "data",
    "width": "90",
    "styles": {
        "textAlignment": "center"
    },
    "header": {
        "text": "Employee ID"
    },
    "footer": {
        "expression": "min",
        "groupExpression": "min"
    }
}, {
    "name": "OrderDate",
    "fieldName": "OrderDate",
    "type": "data",
    "width": "130",
    "styles": {
        "textAlignment": "center"
    },
    "header": {
        "text": "Order Date"
    }
}, {
    "name": "Phone",
    "fieldName": "Phone",
    "type": "data",
    "width": "100",
    "styles": {
        "textAlignment": "near"
    },
    "header": {
        "text": "Phone"
    }
}, {
    "name": "ProductName",
    "fieldName": "ProductName",
    "type": "data",
    "width": "200",
    "styles": {
        "textAlignment": "near"
    },
    "header": {
        "text": "Product Name"
    }
}, {
    "name": "QuantityPerUnit",
    "fieldName": "QuantityPerUnit",
    "type": "data",
    "width": "100",
    "styles": {
        "textAlignment": "near"
    },
    "header": {
        "text": "Quantity / Unit"
    }
}, {
    "name": "Quantity",
    "fieldName": "Quantity",
    "type": "data",
    "width": "100",
    "styles": {
        "textAlignment": "far"
    },
    "header": {
        "text": "Quantity"
    },
    "footer": {
        "expression": "sum",
        "styles": {
            "textAlignment": "far",
            "numberFormat": "#,000"
        }
    }
}, {
    "name": "UnitPrice",
    "fieldName": "UnitPrice",
    "type": "data",
    "width": "100",
    "styles": {
        "textAlignment": "far"
    },
    "header": {
        "text": "Unit Price"
    },
    "footer": {
        "expression": "avg",
        "groupExpression": "max",
        "styles": {
            "textAlignment": "far",
            "numberFormat": "0.00",
            "prefix": "AVG = "
        }
    }
}
// , {
//     "name": "Country2",
//     "fieldName": "Country",
//     "type": "data",
//     "width": "100",
//     "styles": {
//         "textAlignment": "center"
//     },
//     "header": {
//         "text": "Country2"
//     }
// }
];

var fields_tree = [
    {fieldName:"area1code",dataType:"text",/* comparer:userSort.bind(tpMain) */},
    {fieldName:"area1name",dataType:"text"},
    {fieldName:"area2code",dataType:"text"},
    {fieldName:"area2name",dataType:"text"},
    {fieldName:"area3code",dataType:"text"},
    {fieldName:"area3name",dataType:"text"},
    {fieldName:"treeId",dataType:"text"},
    {fieldName:"treeName",dataType:"text"},
    {fieldName:"iconField", dataType:"number"}
];

var columns_tree = [
    {fieldName:"treeName", name:"treeName", width: 150, header:{text:"지역명"}},
    {fieldName:"treeId", name:"treeId", header:{text:"TreeID"}},
    {fieldName:"area1code", name:"area1code", header:{text:"시도코드"}},
    {fieldName:"area1name", name:"area1name", header:{text:"시도명"}},
    {fieldName:"area2code", name:"area2code", header:{showTooltip:true,text:"시군구코드"}},
    {fieldName:"area2name", name:"area2name", header:{text:"시군구명"}},
    {fieldName:"area3code", name:"area3code", header:{text:"읍면동코드"}},
    {fieldName:"area3name", name:"area3name", header:{text:"읍면동명"}},
    {fieldName:"iconField", name:"iconField"}
];
