var ds, gridContainer, grid;
var rows;


function createGrid(divId) {
    var div = document.getElementById(divId);
    if (!div) {
        div = document.createElement('div');
        div.id= 'realgrid';
        document.appendChild(div);
    }
    setFieldColumns(50);
    ds = new RealGrid.LocalDataProvider();
    ds.setFields(fields);

    grid = new RealGrid.GridView(div);
    grid.setDataSource(ds);
    grid.displayOptions.refreshMode = "visibleOnly";

    grid.setColumns(columns);

    grid.setRowStyleCallback(function(grid, item) {
        if (item.index % 2 == 0) return "alternate-row";
    })

    grid.setGroupingOptions({
        enabled:true
    })
    // grid.setRowGroupingOptions({
    //     enabled: true
    // })

    grid.setRowGroup({
        mergeMode: true
    })

    var datas = [];
    for (var i = 0; i < 1000 ; i++) {
        var a = '회사명'+Math.floor(Math.random()*20).toString();
        var b = '브랜드'+Math.floor(Math.random()*50).toString();
        var c = "제품군"+Math.floor(Math.random()*100).toString();
        var d = "제품명"+Math.floor(Math.random()*1000).toString();
        var data = {
            'field0':a,
            'field1':b,
            'field2':c,
            'field3':d
        };
        for (var j = 0; j < 50 ; j++) {
            data['field'+j.toString()+'1'] = Math.floor(Math.random()*10000);
            data['field'+j.toString()+'2'] = Math.floor(Math.random()*10000);
            data['field'+j.toString()+'3'] = Math.floor(Math.random()*10000);
            data['field'+j.toString()+'4'] = Math.floor(Math.random()*10000);
        }        
        datas.push(data);
    }

    ds.setRows(datas);
}

function setFieldColumns(cnt) {
    fields = [];
    columns = [];
    var columnHeaders = ['회사명','브랜드','제품군','제품명'];
    for (var i = 0; i < columnHeaders.length ; i++) {
        fields.push({
            fieldName:'field'+i.toString(),
            dataType:"text"
        })
        columns.push({
            fieldName:'field'+i.toString(),
            name:"column"+i.toString(),
            header:{text:columnHeaders[i]},
            width:180
        })
    }
    for (var i = 0; i < cnt; i++) {
        fields.push({
            fieldName:'field'+i.toString()+'1',
            dataType:'number'
        },{
            fieldName:'field'+i.toString()+'2',
            dataType:'number'
        },{
            fieldName:'field'+i.toString()+'3',
            dataType:'number'
        },{
            fieldName:'field'+i.toString()+'4',
            dataType:'number'
        });
        columns.push({
            fieldName:'field'+i.toString()+'1',
            name:'column'+i.toString()+'1',
            width: 150,
            header:{text:'매출액_'+i.toString()},
            footer:{expression:'sum', groupExpression:"sum"}
        },{
            fieldName:'field'+i.toString()+'2',
            name:'column'+i.toString()+'2',
            width: 150,
            header:{text:'평균단가_'+i.toString()}
        },{
            fieldName:'field'+i.toString()+'3',
            name:'column'+i.toString()+'3',
            width: 150,
            header:{text:'매출수량'+i.toString()}
        },{
            fieldName:'field'+i.toString()+'4',
            name:'column'+i.toString()+'4',
            width: 150,
            header:{text:'전년대비증감'+i.toString()}
        }
        )
    }
}

function createAction(actionId) {
    createButton(actionId, 'createColumn', function(e) {
        var cnt = parseInt($("#txtMain").val());
        setFieldColumns(isNaN(cnt) ? 10 : cnt);
        ds.setFields(fields);
        grid.setColumns(columns);
    });
}