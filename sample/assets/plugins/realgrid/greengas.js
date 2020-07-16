var gridn;
var ds;
var datas;


function createGrid(container) {
	ds = new RealGrid.LocalDataProvider();
    ds.restoreMode = "explicit";
    ds.setFields(fields);
    // ds 커밋 이후에 undo 할 수 있다.
    ds.setOptions({
        undoable: true
    });

    grid = new RealGrid.GridView(container);
    grid.filteringOptions.selector.showButtons = true;
    grid.displayOptions.refreshMode = "visibleOnly";
    grid.displayOptions.emptyMessage = "표시할 데이타가 없습니다.";
    grid.sortingOptions.showSortOrder = true;
    grid.sortingOptions.style = "reverse";
    grid.displayOptions.rowHoverType = "row";    
    grid.displayOptions.rowResizable = true;
    // 셀 단위로 커밋한다.
    grid.commitByCell = true;    
    // 셀 수정 상태를 마커로 표시한다.
    grid.displayOptions.showChangeMarker = true;
    
    grid.setDataSource(ds);
    grid.setColumns(columns);
    loadData(ds);

    // ds 커밋 전에 undo 할 수 있다.
    // ds undoable Option을 false로 하더라도 커밋 전까지는 뷰어가 데이터를 관리하므로
    // 커밋 전에 undo를 하려면 그리드 옵션의 undoable을 true로 해야 한다.
    grid.setOptions({
      undoable: true
    });

    grid.setEditOptions({
        insertable: true,
        appendable : false
    });

    grid.setGroupPanel({
      minHeight: 30,
      visible: true,
      toast: {
          visible : true
      }
    });

    grid.onContextMenuPopup = function (grid, x, y, elementName) {
      console.log(arguments);
      // realgrid-utils.js 기본 팝업 메뉴 생성
      setContextMenu(grid);      
    };
      // realgrid-utils.js 기본 팝업 메뉴 실행
    grid.onContextMenuItemClicked = onContextMenuClick;

    grid.setHeader({
        showTooltip: true
    })    

    grid.onShowTooltip = function(grid, index, value) {
        return value;
    };
    
    grid.onShowHeaderTooltip = function (grid, column, value) {
        return value;
    };

    grid.setFocus();    
};

var fields = [
    { fieldName: "구분",         dataType: "text"},
    { fieldName: "조사년도",     dataType: "text"},
    { fieldName: "소속기관명",   dataType: "text"},
    { fieldName: "시설명",       dataType: "text"},
    { fieldName: "계측가능여부", dataType: "text"},
    { fieldName: "임차여부",     dataType: "text"},
    { fieldName: "연료명",       dataType: "text"},
    { fieldName: "A01월",        dataType: "number" },
    { fieldName: "A02월",        dataType: "number" },
    { fieldName: "A03월",        dataType: "number" },
    { fieldName: "A04월",        dataType: "number" },
    { fieldName: "A05월",        dataType: "number" },
    { fieldName: "A06월",        dataType: "number" },
    { fieldName: "A07월",        dataType: "number" },
    { fieldName: "A08월",        dataType: "number" },
    { fieldName: "A09월",        dataType: "number" },
    { fieldName: "A10월",        dataType: "number" },
    { fieldName: "A11월",        dataType: "number" },
    { fieldName: "A12월",        dataType: "number" },
    { fieldName: "조직코드",     dataType: "text"},
    { fieldName: "대상기관명",   dataType: "text"},
    { fieldName: "시설일련번호", dataType: "text"},
    { fieldName: "단위",         dataType: "text"}
];

var columns = [
    { fieldName: "구분", name: "구분", type: "data", width: 80, visible: false, header:{ text: "구분"} },
    { fieldName: "조사년도", name: "조사년도", type: "data", width: 80, header:{ text: "조사년도"} },
    { fieldName: "소속기관명", name: "소속기관명", type: "data", width: 80, header:{ text: "소속기관명"} },
    { fieldName: "시설명", name: "시설명", type: "data", width: 80, header:{ text: "시설명"} },
    { fieldName: "계측가능여부", name: "계측가능여부", type: "data", width: 80, header:{ text: "계측가능여부"} },
    { fieldName: "임차여부", name: "임차여부", type: "data", width: 80, header:{ text: "임차여부"} },
    { fieldName: "연료명", name: "연료명", type: "data", width: 80, header:{ text: "연료명"} },
    {
        name: "그래프",
        type: "series",
        fieldNames: "A01월..A12월",
        renderer: {
          type: "sparkcolumn"
        },
        width: 170,
        header: {
            text: "그래프"            
        },
    },
    { fieldName: "A01월", name: "01월", header: { text: "01월" }, width: 80},
    { fieldName: "A02월", name: "02월", header: { text: "02월" }, width: 80},
    { fieldName: "A03월", name: "03월", header: { text: "03월" }, width: 80},
    { fieldName: "A04월", name: "04월", header: { text: "04월" }, width: 80},
    { fieldName: "A05월", name: "05월", header: { text: "05월" }, width: 80},
    { fieldName: "A06월", name: "06월", header: { text: "06월" }, width: 80},
    { fieldName: "A07월", name: "07월", header: { text: "07월" }, width: 80},
    { fieldName: "A08월", name: "08월", header: { text: "08월" }, width: 80},
    { fieldName: "A09월", name: "09월", header: { text: "09월" }, width: 80},
    { fieldName: "A10월", name: "10월", header: { text: "10월" }, width: 80},
    { fieldName: "A11월", name: "11월", header: { text: "11월" }, width: 80},
    { fieldName: "A12월", name: "12월", header: { text: "12월" }, width: 80},
    { fieldName: "조직코드", name: "조직코드", type: "data", width: 80, header:{ text: "조직코드"} },
    { fieldName: "대상기관명", name: "대상기관명", type: "data", width: 80, header:{ text: "대상기관명"} },
    { fieldName: "시설일련번호", name: "시설일련번호", type: "data", width: 80, header:{ text: "시설일련번호"} },
    { fieldName: "단위", name: "단위", type: "data", width: 80, header:{ text: "단위"} }
];  

function StrToFloat(numText) {
    if (!numText) {
        return 0;
    };
    return parseFloat(numText.replace(/,/g, ""));
}

function loadData(provider) {
    $.ajax({
        type: "GET",
        url: "/assets/plugins/realgrid/data/co2data.json",
        success: function (data) {
            //data = JSON.parse(data);
            for (var i = 0; i <= data.records.length - 1; i++) {
                if (!data.records[i]["대상기관명"]) {
                    data.records[i]["단위"] = data.records[i]["A01월"];
                    data.records[i]["A01월"] = data.records[i]["A02월"];
                    data.records[i]["A02월"] = data.records[i]["A03월"];
                    data.records[i]["A03월"] = data.records[i]["A04월"];
                    data.records[i]["A04월"] = data.records[i]["A05월"];
                    data.records[i]["A05월"] = data.records[i]["A06월"];
                    data.records[i]["A06월"] = data.records[i]["A07월"];
                    data.records[i]["A07월"] = data.records[i]["A08월"];
                    data.records[i]["A08월"] = data.records[i]["A09월"];
                    data.records[i]["A09월"] = data.records[i]["A10월"];
                    data.records[i]["A10월"] = data.records[i]["A11월"];
                    data.records[i]["A11월"] = data.records[i]["A12월"];
                    data.records[i]["A12월"] = data.records[i]["조직코드"];
                    data.records[i]["조직코드"] = "";
                };
                data.records[i]["A01월"] = StrToFloat(data.records[i]["A01월"]);
                data.records[i]["A02월"] = StrToFloat(data.records[i]["A02월"]);
                data.records[i]["A03월"] = StrToFloat(data.records[i]["A03월"]);
                data.records[i]["A04월"] = StrToFloat(data.records[i]["A04월"]);
                data.records[i]["A05월"] = StrToFloat(data.records[i]["A05월"]);
                data.records[i]["A06월"] = StrToFloat(data.records[i]["A06월"]);
                data.records[i]["A07월"] = StrToFloat(data.records[i]["A07월"]);
                data.records[i]["A08월"] = StrToFloat(data.records[i]["A08월"]);
                data.records[i]["A09월"] = StrToFloat(data.records[i]["A09월"]);
                data.records[i]["A10월"] = StrToFloat(data.records[i]["A10월"]);
                data.records[i]["A11월"] = StrToFloat(data.records[i]["A11월"]);
                data.records[i]["A12월"] = StrToFloat(data.records[i]["A12월"]);
            };

            provider.fillJsonData(data, {rows: "records"})

        },
        error: function (xhr, status, error) {
            if (onFailed)
                onFailed(provider, xhr + ', ' + status + ', ' + error);
        },
        complete: function (data) {
        }
    });
};