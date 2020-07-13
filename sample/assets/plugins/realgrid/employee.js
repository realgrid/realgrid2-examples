var ds, gridContainer, grid;
var rows;

var fields = [
    { fieldName: "KorName",             dataType: "text"   },
    { fieldName: "SexLabel",            dataType: "text"   },
    { fieldName: "Age",                 dataType: "number" },
    { fieldName: "Phone",               dataType: "text"   },
    { fieldName: "StartDate",           dataType: "datetime", datetimeFormat: "yyyy-MM-dd", amText: "오전", pmText: "오후" },
    { fieldName: "KorCountry",          dataType: "text"   },
    { fieldName: "Rating",              dataType: "number" },
    { fieldName: "BusinessProficiency", dataType: "number" },
    { fieldName: "Address",             dataType: "text"   },
    { fieldName: "SaveCost",            dataType: "number" },
    { fieldName: "Email",               dataType: "text"   },
    { fieldName: "InterestRate",        dataType: "number" },
    { fieldName: "Button",              dataType: "text"   }    
  ];
  
  var columns = [
    {
        name: "KorName",
        fieldName: "KorName",
        type: "data",
        width: "300",     
        header: {
            text: "직원 사진"
        },
        renderer: {
            type: "image",
            imageCallback: function (grid, cell) {
                var i = cell.index.itemIndex + 1;
                return "/assets/plugins/realgrid/images/employee/"+ i.toString() +".png";
            },
            titleField: "KorName",
            imageHeight: 100
        }
    },  
    {
      name: "Address",
      fieldName: "Address",
      type: "data",
      width: "500",
      header: {
        text: "직원 정보"
      },
      renderer: {
        type: "rendererEmployee"
      }
    }
  ];

 
function loadData(filename) {
	var reqUrl = "/assets/plugins/realgrid/data/" + filename; 
    $.ajax({
        type: "GET",  
        url: reqUrl,        
        success: function(response)  
        {
			ds.setRows(response, 0, 35);
        }   
    });
}

function createGrid(container) {
    ds = new RealGrid.LocalDataProvider();
    ds.setFields(fields);
    
    grid = new RealGrid.GridView(container);
    grid.displayOptions.emptyMessage = "표시할 데이타가 없습니다.";
    grid.header.height = 40;
    grid.displayOptions.rowHeight = 120;
    grid.footer.height = 40;
    grid.stateBar.width = 10;
    grid.displayOptions.rowHoverType = "row";
    grid.displayOptions.rowResizable = true;

    grid._getView().registerCustomRenderer("rendererEmployee", {
        type: "rendererEmployee",
        initContent: function(parent) {
            var table = this._table = document.createElement("table");
            table.className = "cardtable";
            var titles = ["직원명", "이메일", "연락처", "소재지", "계약 급여"];
            var tds = this._tds = [];

            for(var i=0; i<5; i++){
                var tr = document.createElement("tr");
                var td1 = document.createElement("td");
                td1.style.width = "150px";
                td1.style.fontWeight = "600";
                td1.style.borderStyle = "hidden"
                td1.textContent = titles[i];                
                var td2 = document.createElement("td");
                td2.className = "left-column";
                td2.style.borderStyle = "hidden"
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);

                tds.push(td2);
            }
            parent.appendChild(table);
        },
        clearContent: function(parent) {
            console.log("DISPOSED......");
            parent.innerHTML = "";
        },
        render: function(vgrid, model, width, height) {
            this._tds[0].textContent = grid.getValue(model.index.itemIndex, "KorName");
            this._tds[1].textContent = grid.getValue(model.index.itemIndex, "Email");
            this._tds[2].textContent = grid.getValue(model.index.itemIndex, "Phone");
            this._tds[3].textContent = grid.getValue(model.index.itemIndex, "Address");
            this._tds[4].textContent = grid.getValue(model.index.itemIndex, "SaveCost");
            // let span = this._span;
            // span.textContent = model.value + "-YYY";
            // this._value = model.value;
        },
        click: function(event) {
            // alert(this._value);
            // return true;
        }
    });

    grid.setDataSource(ds);
    grid.setColumns(columns);
    loadData('simple_data.json');

    grid.setEditOptions({
        insertable: true,
        appendable : false
    });

    grid.setHeader({
        showTooltip: true
    })    
    // grid.header.showTooltip = true;

    grid.onShowTooltip = function(grid, index, value) {
        return value;
    };
    grid.onShowHeaderTooltip = function (grid, column, value) {
        return value;
    };

    grid.setGroupingOptions({
        enabled:false,
        toast: {
            visible : true
        }
    });

    grid.onContextMenuPopup = function (grid, x, y, elementName) {
        // realgrid-utils.js 기본 팝업 메뉴 생성
        setContextMenu(grid);
      };
        // realgrid-utils.js 기본 팝업 메뉴 실행
    grid.onContextMenuItemClicked = onContextMenuClick;
};

function setActions(actionContainer) {

}
