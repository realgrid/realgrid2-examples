var fields_01 = [{
    "fieldName": "text1",
    "dataType": "text"
},
{
    "fieldName": "text2",
    "dataType": "text"
},
{
    "fieldName": "text3",
    "dataType": "text"
},
{
    "fieldName": "date1",
    "dataType": "datetime",
    "datetimeFormat": "yyyy/MM/dd",
    "amText": "오전",
    "pmText": "오후"
},
{
    "fieldName": "date2",
    "dataType": "datetime",
    "datetimeFormat": "yyyy-MM-dd",
    "amText": "오전",
    "pmText": "오후"
},
{
    "fieldName": "date3",
    "dataType": "datetime",
    "datetimeFormat": "yyyy.MM.dd",
    "amText": "오전",
    "pmText": "오후"
}];

var columns_01 = [ 
    { "fieldName": "text1", "name": "text1",
        editor: {
            mask:{editMask:"9999-99-99", includeFormat:false, allowEmpty:true}, 
            type:"date", datetimeFormat:"yyyyMMdd", viewGridInside:true
        },
        textFormat:"^([0-9]{4})([0-9]{2})([0-9]{2})$;$1-$2-$3"
        // displayRegExp:"^([0-9]{4})([0-9]{2})([0-9]{2})$",displayReplace:"$1-$2-$3",
    },
    { "fieldName": "text2", "name": "text2", editor: {type:"date"}},
    { "fieldName": "text3", "name": "text3", editor: {type:"btdate"}},
    { "fieldName": "date1", "name": "date1", editor: {type:"date"}},
    { "fieldName": "date2", "name": "date2", editor: {type:"date"}},
    { "fieldName": "date3", "name": "date3", editor: {type:"btdate"}}
];