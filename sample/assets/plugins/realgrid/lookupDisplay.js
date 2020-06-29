var ds, gridContainer, grid;
var rows;
var area1codes = {id:"area1code", levels:1, keys: [], values: []};
var area2codes = {id:"area2code", levels:2, tags: [], keys: [], values: []};
var area3codes = {id:"area3code", levels:3, tags: [], keys: [], values: []};

var fields = [
    {fieldName:"area1code", dataType:"text"},
    {fieldName:"area1name", dataType:"text"},
    {fieldName:"area2code", dataType:"text"},
    {fieldName:"area2name", dataType:"text"},
    {fieldName:"area3code", dataType:"text"},
    {fieldName:"area3name", dataType:"text"},
    {fieldName:"lookupValues", dataType:"text"},
    {fieldName:"lookupTest", dataType:"text"},
    {fieldName:"comment", dataType:"text"},
    {fieldName:"number1", dataType:"number"}
];

var columns = [
    {name:"area1code", fieldName:"area1code"},
    {name:"area1name", fieldName:"area1name"},
    {name:"area1lookup", fieldName:"area1code", header:{text:"area1lookup"}, lookupDisplay:true, values:area1codes.keys, labels:area1codes.values},
    {name:"area1labelField", fieldName:"area1code", header:{text:"area1labelField"}, lookupDisplay:true, labelField:"area1name"},
    {name:"area1keyfields", fieldName:"area1code", header:{text:"area1keyfields"}, lookupDisplay:true, lookupKeyFields:["area1code"], lookupSourceId:"area1code"},
    {name:"area2code", fieldName:"area2code"},
    {name:"area2name", fieldName:"area2name"},
    {name:"area2lookup", fieldName:"area2code", header:{text:"area2lookup"}, lookupDisplay:true, lookupSourceId:"area2code", lookupKeyFields:["area1code","area2code"]},
    {name:"area3code", fieldName:"area3code"},
    {name:"area3name", fieldName:"area3name"},
    {name:"area3lookup", fieldName:"area3code", header:{text:"area3lookup"}, lookupDisplay:true, lookupSourceId:"area3code", lookupKeyFields:["area1code","area2code","area3code"]},
    {name:"lookupTest", fieldName:"lookupTest", header:{text:"lookupTest"}, lookupDisplay:true, lookupSourceId:"lookupTest", lookupKeyFields:["lookupTest"]},
    {name:"lookupValues", fieldName:"lookupValues", width:200, header:{text:"lookupValues"}, lookupDisplay:true, values: area1codes.keys, labels:area1codes.values, valueSeparator:","},
    {name:"comment", fieldName:"comment", displayCallback: function() {console.log(arguments)}}
];


function createGrid(container) {
    ds = new RealGrid.LocalDataProvider();
    ds.setFields(fields);
    
    grid = new RealGrid.GridView(container);
    grid.setDataSource(ds);
    makeLookupSource()
    grid.setColumns(columns);

    // grid.displayOptions.rowHeight = 32;

    ds.setRows(areacodes);
    grid.setEditOptions({
        insertable: true,
        appendable : true
    });
};

function makeLookupSource() {
    for (var i = 0, cnt = areacodes.length; i < cnt ; i++) {
        var codes = areacodes[i];
        if (area1codes.keys.indexOf(codes.area1code) < 0) {
            area1codes.keys.push(codes.area1code);
            area1codes.values.push(codes.area1name);
        }
        if (area2codes.tags.indexOf(codes.area2code) < 0) {
            area2codes.tags.push(codes.area2code);
            area2codes.keys.push([codes.area1code, codes.area2code]);
            area2codes.values.push(codes.area2name);
        }
        if (area3codes.tags.indexOf(codes.area3code) < 0) {
            area3codes.tags.push(codes.area3code);
            area3codes.keys.push([codes.area1code, codes.area2code, codes.area3code]);
            area3codes.values.push(codes.area3name);
        }
    }
    // grid.setLookups(config);
    // grid._gv.setLookupProvider(config)
    // grid.lookupProvider = [area1codes];//, area2codes, area3codes];
}

function setActions(actionContainer) {
    createButton(actionContainer, "setLookups", function (e) {
        // setLookups(sources);
        grid.setLookups([area1codes,{id:"lookupTest", levels:1}]);//, area2codes, area3codes];
    });

    createButton(actionContainer, "addLookupSource", function(e) {
        // addLookupSource(source);
        grid.addLookupSource(area2codes);
        grid.addLookupSource(area3codes);
        // grid.lookupProvider.add(area2codes);
        // grid.lookupProvider.add(area3codes);
    });

    createButton(actionContainer, "removeLookupSource", function(e) {
        // removeLookupSource(sourceId);
        grid.removeLookupSource("area2code")
        grid.removeLookupSource("area3code")
    });

    createButton(actionContainer, "existsLookupData", function(e) {
        // existsLookupData(sourceId, keys);
        if (grid.existsLookupData("area1code", "12")) {
            alert("area1code 12 exists")
        } else {
            alert("area1code 12 Not exists")
        }
        
    });

    createButton(actionContainer, "fillLookupData", function(e) {
        // fillLookupData(sourceId, data)
        grid.fillLookupData("lookupTest", {keys:[["14"],["15"]], values:["가나다라","일이삼사"]});
        grid.fillLookupData("lookupTest", {rows:[["16","abcd"],["17","efgh"]]});
        grid.dataSource.setValue(0,grid.dataSource.getFieldIndex("lookupTest"),"14");
        grid.dataSource.setValue(1,grid.dataSource.getFieldIndex("lookupTest"),"15");
        grid.dataSource.setValue(2,grid.dataSource.getFieldIndex("lookupTest"),"16");
        grid.dataSource.setValue(3,grid.dataSource.getFieldIndex("lookupTest"),"17");
    });

    createButton(actionContainer, "add", function(e) {
        grid.addLookupData("area1code", ['12'], "우리테크")
    });

    createButton(actionContainer, "addRow", function(e) {
        grid.addLookupData("area1code", ['13', "리얼그리드"])
    })
    createButton(actionContainer, "clearLookupData", function(e) {
        // clearLooupData(sourceId);
        grid.clearLookupData("area2code");
    });

}

