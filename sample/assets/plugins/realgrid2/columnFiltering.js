var ds, gridContainer, grid;
var rows;
var filters;
var column;

// Is filter Action deprecated?
// filter function is not completed
// filtering option is not completed

function createGrid(container) {
    ds = new RealGrid.LocalDataProvider();
    ds.setFields(fields_03);

    grid = new RealGrid.GridView(container);
    grid.setDataSource(ds);

    // gridContainer = new RealGrid.GridContainer(container);
    // grid = gridContainer.gridView;
    // grid.dataSource = dataProvider;

    grid.setColumns(columns_03);
    ds.setRows(resJson);
    column = grid.columnByField("지목");
    console.log('column is: ' + column)

    grid.setFilteringOptions({toast:{visible:true}});
    grid.setSortingOptions({toast:{visible:true}})
    // grid.filteringOptions.toast.visible = true;
    // grid.sortingOptions.toast.visible = true;
};


function test_setColumnFilter() {
    if (column) {
        filters = [{
            name: "전",
            criteria: "value = '전'"
        }, {
            name: "답",
            criteria: "value = '답'"
        }, {
            name: "'임야' or '공장용지'",
            criteria: "(value = '임야') or (value = '공장용지')"
        }, {
            name: "대지: value > '대지'",
            criteria: "value > '대지'"
        }, {
            name: "기타",
            criteria: "value = '기타'"
        }, {
            name: "기타: value <> '기타'",
            criteria: "value <> '기타'"
        }, {
            name: "not equal 단위",
            criteria: "value <> values['단위']" // CustomerID와 CustomerID2가 상이한 경우
        }, {
            name: "W: value like 대%'",
            criteria: "value like '대%'"
        }, {
            name: "W: value not like '대%'",
            criteria: "value not like '대%'"
        }, {
            name: "야: value like '%야'",
            criteria: "value like '%야'"
        }, {
            name: "야: value not like '%야'",
            criteria: "value not like '%야'"
        }, {
            name: "목: value match '목'",
            criteria: "value match '목'" // 문자열에 TC가 포함된 경우
        }, {
            name: "match '^지목$|^기타$'",
            criteria: "value match '^지목$|^기타$'" //RATTC, SUPRD 중 하나인 경우
        }, {
            name: "목: value not match '목'",
            criteria: "value not match '목'" // 문자열에 TC가 포함되지 않는 경우
        }];
        column.setFilters(filters);
        console.log("filter is now: " + column.filters.count)
    }
}

function test_clearColumnFilter() {
    column.clearFilters("지목");
    console.log("filter is now: " + column.filters.count)
}

function test_addColumnFilter() {
    var filters = [{
        name: "임야",
        criteria: "value = '임야'",
        active: false
    }, {
        name: "공장용지",
        criteria: "value = '공장용지'",
        active: true
    }, {
        name: "전",
        criteria: "value = '전'"
    }];
    var overwrite = true; // false면 기존에 같은 이름의 필터가 있을 때 예외 발생.

    column.addFilters(filters, overwrite);
    console.log("filter is now: " + column.filters.count);
}
function test_removeColumnFilter() {
    column.removeFilters(["전", "임야"]);
    console.log("filter is now: " + column.filters.count);
}

function test_activateColumnFilters() {
    column.activateFilters(["전", "대지"], true);
    console.log("activefilter is now: " + column.filters.activeCount);
}
function test_deactivateColumnFilters() {
    column.activateFilters(["전", "대지"], false);
    console.log("activefilter is now: " + column.filters.activeCount);
}
function test_activateAllColumnFilters() {
    column.activateAllFilters(true);
    console.log("activefilter is now: " + column.filters.activeCount);
}
function test_deactivateAllColumnFilters() {
    column.activateAllFilters(false);
    console.log("activefilter is now: " + column.filters.activeCount);
}
function test_hideColumnFilters() {
    ;
    console.log("this is col is: " + column);
    column.hideColumnFilters(['전', '답', '대지'], true);
    console.log("visible?: " + column.filters.isVisible);
}
function test_showColumnFilters() {
    ;
    console.log("this is col is: " + column);
    column.hideColumnFilters(['전', '답', '대지'], false);
    console.log("visible?: " + column.filters.isVisible);
}
function test_hideAllColumnFilters() {
    ;
    console.log("this is col is: " + column);
    column.hideAllColumnFilters(true);
    console.log("visible?: " + column.filters.isVisible);
}
function test_showAllColumnFilters() {
    ;
    console.log("this is col is: " + column);
    column.hideAllColumnFilters(false);
    console.log("visible?: " + column.filters.isVisible);
}

// toggle
function toggleFilters() {
    column.toggleFilters(['전', '답']);
}
function toggleAllFilters() {
    column.toggleAllFilters();
}

//filter 함수 set
function withFilterFunc() {
    var filterFunc = function (dataProvider, dataRow, fieldName, filter, value) {
        if (filter.tag == 1 && value == "지목") {
            return true;
        } else if (filter.tag == 2 && value == "전") {
            return true;
        } else if (filter.tag == 3 && value == "답") {
            return true;
        } else {
            return false;
        }
    }
    var filters = [
        {
            name: "filter1",
            text: "지목",
            tag: 1,
            criteria: filterFunc
        }, {
            name: "filter2",
            text: "전",
            tag: 2,
            criteria: filterFunc
        }, {
            name: "filter3",
            text: "답",
            tag: 3,
            criteria: filterFunc
        }
    ]
    column.setFilters("지목", filters);
}

function setActions(actionContainer) {
}
