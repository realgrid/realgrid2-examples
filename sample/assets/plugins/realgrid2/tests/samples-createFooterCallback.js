var fields = [
    {fieldName:"gubun1"},
    {fieldName:"companyName"},
    {fieldName:"relation1"},
    {fieldName:"relation2"},
    {fieldName:"relation3"},
    {fieldName:"name"},
    {fieldName:"normalStock", dataType:"number"},
    {fieldName:"preStock", dataType:"number"},
    {fieldName:"normalRate", dataType:"number"},
    {fieldName:"preRate", dataType:"number"},
    {fieldName:"date", dataType:"datetime"},
    {fieldName:"check", dataType:"boolean"},
    {fieldName:"calc1", dataType:"number"}
];

var columns = [
    {   name:"gubun1", 
        fieldName:"gubun1", 
        header:{text:"구분"}, 
        lookupDisplay:true, 
        values:["1","2"], 
        labels:["비금융회사","금융회사"]
    },{ name:"companyName", 
        fieldName:"companyName", 
        header:{text:"회사명"}
    },{ name:"relation1", 
        fieldName:"relation1", 
        lookupSourceId:"relation1", 
        lookupKeyFields:["relation1"], 
        lookupDisplay:true, 
        header:{text:"관계1"}
    },{ name:"relation2", 
        fieldName:"relation2", 
        lookupSourceId:"relation2", 
        lookupKeyFields:["relation1", "relation2"], 
        lookupDisplay:true, 
        header:{text:"관계2"},
        groupFooters:[
            {valueCallback:function(columnSummary, value) {
                // console.log(columnSummary);
            }}
        ]
    },
    {name:"relation3", fieldName:"relation3", header:{text:"관계3"}},
    {name:"name", fieldName:"name", header:{text:"이름"}},
    {   name:"normalStock", 
        fieldName:"normalStock", 
        header:{text:"보통주"}, 
        numberFormat:"#,##0",
        footer:[{expression:"sum"},{expression:"max"}],
        groupFooter:[{expression:"sum", numberFormat:"#,##0"},{expression:"max"}]
    },
    {name:"preStock", fieldName:"preStock", header:{text:"우선주"}, numberFormat:"#,##0"},
    {name:"normalRate", fieldName:"normalRate", header:{text:"보통주비율"}},
    {name:"preRate", fieldName:"preRate", header:{text:"우선주비율"}},
    {name:"date", fieldName:"date", header:{text:"지정일"}},
    {name:"check", fieldName:"check", header:{text:"check"}},
    {name:"calc1", fieldName:"calc1"}
];
