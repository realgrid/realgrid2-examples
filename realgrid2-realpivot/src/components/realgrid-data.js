export const fields = [{
    fieldName: "OrderID"
}, {
    fieldName: "CustomerID"
}, {
    fieldName: "EmployeeID"
}, {
    fieldName: "OrderDate",
    dataType: "datetime",
    datetimeFormat: "yyyy-MM-dd a hh:mm:ss",
    amText: "오전",
    pmText: "오후"
}, {
    fieldName: "CompanyName"
}, {
    fieldName: "Country"
}, {
    fieldName: "Phone"
}, {
    fieldName: "ProductName"
}, {
    fieldName: "QuantityPerUnit"
}, {
    fieldName: "Quantity",
    dataType: "number"
}, {
    fieldName: "UnitPrice",
    dataType: "number"
}]

export const columns = [{
    name: "OrderID",
    fieldName: "OrderID",
    header: {text: "OrderID"} 
},{
    name: "CustomerID",
    fieldName: "CustomerID",
    header: {text: "CustomerID"} 
},{
    name: "EmployeeID",
    fieldName: "EmployeeID",
    header: {text: "EmployeeID"} 
},{
    name: "OrderDate",
    fieldName: "OrderDate",
    header: {text: "OrderDate"} 
},{
    name: "CompanyName",
    fieldName: "CompanyName",
    header: {text: "CompanyName"} 
},{
    name: "Country",
    fieldName: "Country",
    header: {text: "Country"} 
},{
    name: "Phone",
    fieldName: "Phone",
    header: {text: "Phone"} 
},{
    name: "ProductName",
    fieldName: "ProductName",
    header: {text: "ProductName"} 
},{
    name: "QuantityPerUnit",
    fieldName: "QuantityPerUnit",
    header: {text: "QuantityPerUnit"} 
},{
    name: "Quantity",
    fieldName: "Quantity",
    header: {text: "Quantity"} 
},{
    name: "UnitPrice",
    fieldName: "UnitPrice",
    header: {text: "UnitPrice"} 
}]


export const rows = [{
    "OrderID":"10248",
    "CustomerID":"VINET",
    "CustomerID2":"VINAC",
    "EmployeeID":"5",
    "OrderDate":"1996-07-04 오전 12:00:00",
    "RequiredDate":"1996-08-01 오전 12:00:00",
    "ShippedDate":"1996-07-16 오전 12:00:00",
    "ShipVia":"3",
    "Freight":"32.3800",
    "ShipName":"Vins et alcools Chevalier\r\nVins et alcools Chevalier\r\nVins et alcools Chevalier",
    "ShipAddress":"59 rue de l\u0027Abbaye",
    "ShipCity":"Reims",
    "ShipRegion":null,
    "ShipPostalCode":"51100",
    "ShipCountry":"France",
    "CompanyName":"Vins et alcools Chevalier\r\n",
    "Country":"France",
    "Shipping":"True",
    "SmallFlag":"http://dev.demo.realgrid.net/img/demo/smallflag/fr.png",
    "NormalFlag":"http://dev.demo.realgrid.net/img/demo/normalflag/fr.png",
    "Phone":"26.47.15.10",
    "ProductName":"Queso Cabrales",
    "QuantityPerUnit":"1 kg pkg.",
    "Quantity":"1200",
    "UnitPrice":"14.0000"
}]