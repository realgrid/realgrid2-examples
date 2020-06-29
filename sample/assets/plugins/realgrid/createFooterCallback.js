function createGrid(containerId) {
    ds = new RealGrid.LocalDataProvider(true);
    grid = new RealGrid.GridView(containerId);
    grid.setDataSource(ds)
    
    grid.setLookups([{
        "id": "relation1",
        "levels": 1,
        "keys": ["1","2"],
        "values":["동일인측","기타주주"],
        ordered:true
    },{
    	"id":"relation2",
    	"levels":2,
    	"keys":[["1","1"],
    		["1","2"],
    		["1","3"],
    		["1","4"],
    		["2","5"],
    		["2","6"],
    		["2","7"],
    		["2","8"],
    		["2","9"]
    	],
		values:["계열회사",
			"동일인",
			"친족",
			"비영리법인",
			"등기된임원",
			"해외계열",
			"자기주식",
			"기타",
			"동일인측이 아닌 최다주주"],
    	ordered:true
    }]);


    ds.setFields(fields);

    grid.setColumns(columns);
    grid.setFooters([{},{}]);
    // grid.rowGroup.setFooters([{},{}]);
    grid.setGroupingOptions({enabled: true});
    grid.setRowGroup({mergeMode: true})

    loadData('lotte_stock.csv');
}

function setActions(actionContainer) {
    createButton(actionContainer, "Layout 1", function (e) {
        var layout = [
            "gubun1",
            "companyName",
            "relation1",
            "relation2",
            "relation3",
            "name",
            {
                name:"normal", 
                direction:"vertical",
                width:120,
                header:{text:'보통주'},
                items:[
                    "normalStock",
                    "normalRate"
                ]
            },
            {
                name:"pre",
                direction:"vertical",
                header:{text:"우선주"},
                width:120,
                items:["preStock","preRate"]
            },
            "date",
            "check",
            "calc1"
        ];
        grid.setColumnLayout(layout);
        grid.setHeader({minHeight: 72});
        grid.setFooters([{height:58}, {height:46}])
        grid.setDisplayOptions({rowHeight: 46});
    });

    createButton(actionContainer, "Clear Layout", function (e) {
        grid.setColumnLayout(null);
        grid.setHeader({minHeight: 23});
        grid.setFooters({minHeight: 23});
        
        grid.setDisplayOptions({rowHeight: 23});
    });
    createButton(actionContainer, "group1(버그재현)", function(e) {
        grid.setRowGroup({expandedAdornments: "both", createFooterCallback: null});
        
        grid.groupBy(["gubun1","companyName","relation1","relation2"],true);
        grid.setTopItem(12);
        
    })
    createButton(actionContainer, "group2(버그재현)", function(e) {
        grid.setRowGroup({expandedAdornments: "summary", createFooterCallback: null})
        
        grid.groupBy(["gubun1","companyName","relation1","relation2"],true);
    })

    createCheckBox(actionContainer, "createFooterCallback", function(e) {
        if (e.currentTarget.checked) {
            grid.setRowGroup({
                expandedAdornments: "footer",
                createFooterCallback: function(model, index) {
                    if (model.level >= 5|| model.level == 1) {
                        return false
                    }
                    if (model.level === 4) {

                        var relation2 = grid.getDataSource().getValue(model.firstItem.dataRow, "relation2");
                        return relation2 === "2";
                    }
    
                    if (model.level === 3) {
                        var relation1 = grid.getDataSource().getValue(model.firstItem.dataRow, "relation1");
                        return relation1 === "1"
                    }
    
                    return false;
                }.bind(grid)
            })

            grid.groupBy(["gubun1","companyName","relation1","relation2"],true);
        } else {
            grid.setRowGroup({
                createFooterCallback: null
            })
        }


    })
    createCheckBox(actionContainer, "mergeMode", function (e) {
        grid.setRowGroup({mergeMode: e.currentTarget.checked})
    }, true);

    createListBox(actionContainer, "expandedAdornments", ["header","footer","both","summary","none"], function(e) {
        grid.setRowGroup({expandedAdornments: e.currentTarget.value})
    },"both")

}

function loadData(filename) {
	var reqUrl = "/data/" + filename; // for S3
	// let reqUrl = "/getData/fileName=" + fileName; // for node
    $.ajax({
        type: "GET",  
        url: reqUrl,
        success: function(response)  
        {
            var loader = new RealGrid.DataLoader(ds);
            loader._loadCsv(response, {});
            grid.refresh();
        }   
    });
}