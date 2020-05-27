import { DataFieldObject, ValueType } from "realgrid";

export const fields: DataFieldObject[] = [
    {
        fieldName: 'Name',
        dataType: ValueType.TEXT,
    },
    {
        fieldName: 'FullName',
        dataType: ValueType.TEXT,
    },
    {
        fieldName: 'Age',
        dataType: ValueType.NUMBER
    },
    {
        fieldName: 'Company',
        dataType: ValueType.TEXT
    },
    {
        fieldName: 'Email',
        dataType: ValueType.TEXT
    }
];

export const rows = [
    {
        "Name": "Kessie",
        "FullName": "Vijendra N. Raj",
        "Email": "mus.Donec.dignissim@Praesent.edu",
        "Company": "Arcu Et Pede Incorporated",
        "Age": "17"
    },
    {
        "Name": "Evelyn",
        "FullName": "Hridaynath K. Ismail",
        "Email": "fringilla.euismod@elementum.edu",
        "Company": "Aliquam Tincidunt Ltd",
        "Age": "28"
    },
    {
        "Name": "Colleen",
        "FullName": "Kanwalkishore C. Khan",
        "Email": "tellus.non.magna@porttitorvulputate.org",
        "Company": "Ultrices Duis Volutpat Institute",
        "Age": "38"
    },
    {
        "Name": "Velma",
        "FullName": "Dharani P. Patel",
        "Email": "ipsum@orcilobortisaugue.net",
        "Company": "Posuere Associates",
        "Age": "25"
    },
    {
        "Name": "Fallon",
        "FullName": "Preeti M. Singh",
        "Email": "rutrum@orci.com",
        "Company": "Turpis Nec Inc.",
        "Age": "46"
    },
    {
        "Name": "Alexis",
        "FullName": "Karnik Y. Patel",
        "Email": "auctor.nunc.nulla@egestas.net",
        "Company": "Massa Quisque Porttitor Industries",
        "Age": "34"
    },
    {
		"Name": "Camille",
		"FullName": "Satyamurty A. Singh",
		"Email": "Nunc@blanditenimconsequat.co.uk",
		"Company": "Lorem Lorem Luctus PC",
		"Age": "22"
	},
]

export const columns = [{
    name: "Name",
    fieldName: "Name",
    type: "data",
    width: "80",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "Name",
        showTooltip: true,
        tooltip:'<span style="color: red;">이름</span>',
    },
    renderer: {
        type:"text",
        showTooltip: true
    }
}, {
    name: "FullName",
    fieldName: "FullName",
    type: "data",
    width: "150",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "Full Name",
        showTooltip: false,
    }
}, {
    name: "Company",
    fieldName: "Company",
    type: "data",
    width: "220",
    styles: {
        "textAlignment": "center"
    },
    header: "Company Name"
},{
    name: "Age",
    fieldName: "Age",
    type: "data",
    width: "130",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "Age",
        showTooltip: false,
    },
    numberFormat: '0'
},{
    name: "Email",
    fieldName: "Email",
    type: "data",
    width: "300",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "Email",
        showTooltip: false,
    },
}]