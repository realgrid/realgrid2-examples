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
    "styles": {
        "textAlignment": "center"
    },
    "header": {
        "text": "Country",
        showTooltip:true,
        tooltip:"TEST",
    },
    renderer: {
        type:"text",
        showTooltip:true
    },
    validations:[{
        criteria:"value <> 'aa'",
        errorLevel:"error",
        message:"value를 잘못 입력.!!"
    }]
}, {
    "name": "CompanyName",
    "fieldName": "CompanyName",
    "type": "data",
    "width": "120",
    "styleName": "blue-column",
    "styles": {
        "textAlignment": "near"
    },
    "header": {
        "text": "Company Name",
        showTooltip: true,
        tooltip:"<span style='color:red'>회사명.</span>"
    }
}, {
    "name": "UnitPrice2",
    "fieldName": "UnitPrice",
    "type": "data",
    "width": "100",
    "renderer": {
        "type": "bar",
        "origin": "left",
        "barWidth": "80%",
        "showTooltip": true
    },
    "header": {
        "text": "UnitPrice2"
    },
    "footer": {
        "expression": "sum",
        "styles": {
            "textAlignment": "far",
            "numberFormat": "#,000"
        }
    }
}, {
    "name": "OrderID",
    "fieldName": "OrderID",
    "type": "data",
    "width": "80",
    "styles": {
        "textAlignment": "center"
    },
    "header": {
        "text": "Order ID",
        showTooltip: false,
    },
    "footer": {
        "expression": "max",
        "groupExpression": "max"
    }
}, {
    "name": "CustomerID",
    "fieldName": "CustomerID",
    "type": "data",
    "width": "90",
    "styles": {
        "textAlignment": "center"
    },
    "header": {
        "text": "Customer ID"
    }
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
    "renderer": {
        "type": "button"
    },
    "header": {
        "text": "Button"
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
}, {
    "name": "Country2",
    "fieldName": "Country",
    "type": "data",
    "width": "100",
    "styles": {
        "textAlignment": "center"
    },
    "header": {
        "text": "Country2"
    }
}];
