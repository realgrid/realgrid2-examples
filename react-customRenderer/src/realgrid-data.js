import { ValueType } from "realgrid";

export const fields = [{
    fieldName: 'buttonField',
    dataType: ValueType.BOOLEAN,
},{
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
}];

export const columns = [{
    name: "buttonCol",
    fieldName: "buttonField",
    width: "80",
    styles: {
        textAlignment: "center"
    },
    editable: false,
    header: {
        text: "버튼",
        showTooltip: true,
        tooltip:'<span style="color: red;">버튼</span>',
    },
    renderer: {
        type: "switch"
    }
},{
    name: "Name",
    fieldName: "Name",
    width: "80",
    styles: {
        textAlignment: "center"
    },
    editable: true,
    header: {
        text: "Name",
        showTooltip: true,
        tooltip:'<span style="color: red;">이름</span>',
    }
}, {
    name: "FullName",
    fieldName: "FullName",
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
    width: "220",
    styles: {
        "textAlignment": "center"
    },
    header: "Company Name"
},{
    name: "Age",
    fieldName: "Age",
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
    width: "300",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "Email",
        showTooltip: false,
    },
}]

export const rows = [{
    "buttonField": false,
    "Name": "Kessie",
    "FullName": "Vijendra N. Raj",
    "Email": "mus.Donec.dignissim@Praesent.edu",
    "Company": "Arcu Et Pede Incorporated",
    "Age": "17"
},
{
    "buttonField": true,
    "Name": "Evelyn",
    "FullName": "Hridaynath K. Ismail",
    "Email": "fringilla.euismod@elementum.edu",
    "Company": "Aliquam Tincidunt Ltd",
    "Age": "28"
},
{
    "buttonField": false,
    "Name": "Colleen",
    "FullName": "Kanwalkishore C. Khan",
    "Email": "tellus.non.magna@porttitorvulputate.org",
    "Company": "Ultrices Duis Volutpat Institute",
    "Age": "38"
},
{
    "buttonField": false,
    "Name": "Velma",
    "FullName": "Dharani P. Patel",
    "Email": "ipsum@orcilobortisaugue.net",
    "Company": "Posuere Associates",
    "Age": "25"
},
{
    "buttonField": false,
    "Name": "Fallon",
    "FullName": "Preeti M. Singh",
    "Email": "rutrum@orci.com",
    "Company": "Turpis Nec Inc.",
    "Age": "46"
},
{
    "buttonField": false,
    "Name": "Alexis",
    "FullName": "Karnik Y. Patel",
    "Email": "auctor.nunc.nulla@egestas.net",
    "Company": "Massa Quisque Porttitor Industries",
    "Age": "34"
},
{
    "buttonField": false,
    "Name": "Camille",
    "FullName": "Satyamurty A. Singh",
    "Email": "Nunc@blanditenimconsequat.co.uk",
    "Company": "Lorem Lorem Luctus PC",
    "Age": "22"
},
{
    "buttonField": false,
    "Name": "Aristotle",
    "FullName": "Ora C. Rowe",
    "Email": "sed.orci@libero.edu",
    "Company": "Integer Aliquam Corporation",
    "Age": 53
},
{
    "buttonField": false,
    "Name": "Anthony",
    "FullName": "Alea Bailey",
    "Email": "orci.luctus.et@Cum.ca",
    "Company": "Eros Nam Corp.",
    "Age": 58
},
{
    "buttonField": false,
    "Name": "Hakeem",
    "FullName": "Kadeem J. Patel",
    "Email": "aliquet.diam.Sed@penatibuset.com",
    "Company": "Ligula Aenean Gravida Consulting",
    "Age": 36
},
{
    "buttonField": false,
    "Name": "Raja",
    "FullName": "Chloe Valentine",
    "Email": "Cras.dictum@vulputatenisi.ca",
    "Company": "Erat Eget Tincidunt Institute",
    "Age": 40
},
{
    "buttonField": false,
    "Name": "Shad",
    "FullName": "Zoe P. Boyd",
    "Email": "Sed@semperpretium.edu",
    "Company": "Amet LLP",
    "Age": 22
},
{
    "buttonField": false,
    "Name": "Autumn",
    "FullName": "Brittany U. Copeland",
    "Email": "sit.amet@interdumSedauctor.co.uk",
    "Company": "Nisi Cum Sociis PC",
    "Age": 36
}]