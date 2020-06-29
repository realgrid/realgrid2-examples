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

var columns_01 = [
    {
        name:"test",
        fieldName:"Country",
        "editor":{
            type:"text"
        },
        validations:[{
            criteria:"value <> 'aa'",
            errorLevel:"error",
            message:"value를 잘못 입력.!!"
        }],
        header: "test"
    },
    {
    "name": "Country",
    "fieldName": "Country",
    "type": "data",
    "width": "100",
    "button": "action",
    "editor": {
        "type": "checklist",
        "showAllCheck": true,
        "allCheckText": "전체선택",
        "dropDownCount": 4,
        "acceptText": "확인",
        "cancelText": "취소",
        "showButtons": true
    },
    editButtonVisibility:"rowfocused",
    lookupDisplay:true,
    valueSeparator:",",
    "values": ['France', 'Germany', 'Brazil', 'Belgium'],
    "labels": ['프랑스', '독일', '브라질', '벨기에'], 
    "header": {
        "text": "Country"
    }
}, {
    "name": "Country2",
    "fieldName": "Country",
    "type": "data",
    "width": "300",
    "values": ['France', 'Germany', 'Brazil', 'Belgium'],
    "labels": ['프랑스', '독일', '브라질', '벨기에'], 
    renderer:{
        type:"html",
        callback: function(grid, cell, w, h) {
            // console.log(cell);
            var str = "";
            var data = (cell.value && cell.value.split(",")) || [];
            var labels = cell.dataColumn.labels;
            var values = cell.dataColumn.values;
            for (var i = 0; i < labels.length; i++) {
                var checked = data.indexOf(values[i]) >= 0 ? "checked": "";
                str = str + "<input type='checkbox' value = '"+values[i]+"'" + checked  + " onclick='javascript:valuecheck("+cell.index.dataRow+", event)' >"+labels[i];
            }

            return str;
        }
    },
    "header": {
        "text": "Country HTML",
        "template":'<div style="font-size:12px;line-height:1.5em;display:inline-block">'+
            '<span class="span-button" onmouseup="javascript:alert(\'버튼을 클릭했습니다\');event.preventDefault();event.stopPropagation()">클릭하세요'+
            '</span><br/>'+
            'CountryHtml</div>'
    }
}, {
    "name": "Country3",
    "fieldName": "Country",
    "editor": {
        "type": "search"
    },
    header: "Search"
},
{
    "name": "CompanyName",
    "fieldName": "CompanyName",
    "type": "data",
    "width": "120",
    "styleName": "blue-column",
    "header": {
        "text": "Company Name"
    },
    editor:{
        type:"text"
    },
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
    "header": {
        "text": "UnitPrice2"
    },
    "footer": {
        "expression": "sum"
    }
}, {
    "name": "OrderID",
    "fieldName": "OrderID",
    "type": "data",
    "width": "80",
    "header": {
        "text": "Order ID"
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
    "editor": "list",
    "values": [
        "VINET", "TOMSP", "VICTE"
    ],
    "header": {
        "text": "Customer ID"
    }
}, {
    "name": "EmployeeID",
    "fieldName": "EmployeeID",
    "type": "data",
    "width": "90",
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
    "width": "130",
    "editor": {
        "type": "date"
    },
    "header": {
        "text": "Order Date"
    }
}, {
    "name": "OrderDate2",
    "fieldName": "OrderDate",
    "width": "130",
    "editor": {
        "type": "btdate"
    },
    "header": {
        "text": "Order Date2"
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
    "header": {
        "text": "Phone"
    }
}, {
    "name": "ProductName",
    "fieldName": "ProductName",
    "type": "data",
    "width": "200",
    "header": {
        "text": "Product Name"
    }
}, {
    "name": "QuantityPerUnit",
    "fieldName": "QuantityPerUnit",
    "type": "data",
    "width": "100",
    "header": {
        "text": "Quantity / Unit"
    }
}, {
    "name": "Quantity",
    "fieldName": "Quantity",
    "type": "data",
    "width": "100",
    "header": {
        "text": "Quantity"
    },
    editor:{
        type:"number",
        textAlignment:"far",
        editFormat:"#,##0"
    },
    numberFormat:"#,##0.00",
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
    "header": {
        "text": "Unit Price"
    },
    "footer": {
        "expression": "avg",
        "groupExpression": "max"
    }
}, {
    "name": "Country2",
    "fieldName": "Country",
    "type": "data",
    "width": "100",
    "header": {
        "text": "Country2"
    }
}];

var columns_02 = [{
    "name": "Country",
    "fieldName": "Country",
    "type": "data",
    "width": "100",
    "styles": {
        "textAlignment": "center"
    },
    "header": {
        "text": "Country"
    }
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
        "text": "Company Name"
    }
}];

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
