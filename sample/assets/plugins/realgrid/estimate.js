var dsMaster, grdMaster, dsDetail, grdDetail;
var rows;

var field_master = [
    { fieldName: "견적ID",      dataType: "text"   },
    { fieldName: "견적번호",    dataType: "text"   },
    { fieldName: "견적일",      dataType: "datetime", datetimeFormat: "yyyyMMdd", amText: "오전", pmText: "오후" },
    { fieldName: "유효기간",    dataType: "datetime", datetimeFormat: "yyyyMMdd", amText: "오전", pmText: "오후" },
    { fieldName: "업체명",      dataType: "text"   },
    { fieldName: "업체담당자",  dataType: "text"   },
    { fieldName: "업체이메일",  dataType: "text"   },
    { fieldName: "전화번호",    dataType: "text"   },
    { fieldName: "팩스번호",    dataType: "text"   },
    { fieldName: "견적정보",    dataType: "text"   },
    { fieldName: "제목",        dataType: "text"   },
    { fieldName: "부가세여부",  dataType: "text"   },
    { fieldName: "견적금액",    dataType: "number" },
    { fieldName: "납부방법",    dataType: "text"   },
    { fieldName: "등록일",      dataType: "datetime", datetimeFormat: "yyyyMMdd", amText: "오전", pmText: "오후" },
    { fieldName: "등록자",      dataType: "text"   },
    { fieldName: "고객주소",    dataType: "text"   },
    { fieldName: "비고",        dataType: "text"   },
    { fieldName: "잠금여부",    dataType: "text"   }
  ];

var field_detail = [
    { fieldName: "견적ID",      dataType: "text"   },
    { fieldName: "견적서항목ID",  dataType: "text"   },
    { fieldName: "행상태",      dataType: "text"   },
    { fieldName: "순서",        dataType: "text"   },
    { fieldName: "카테고리",    dataType: "text"   },
    { fieldName: "항목명",      dataType: "text"   },
    { fieldName: "규격",        dataType: "text"   },
    { fieldName: "단위",        dataType: "text"   },
    { fieldName: "수량",        dataType: "number" },
    { fieldName: "단가",        dataType: "number" },
    { fieldName: "합계",        dataType: "number" },
    { fieldName: "비고",        dataType: "text"   },
    { fieldName: "구분",        dataType: "text"   },
    { fieldName: "부가세",      dataType: "number" },
    { fieldName: "총합계",      dataType: "number" }
];

var column_master = [
  {
    name: "견적ID",
    fieldName: "견적ID",
    type: "data",
    width: "100",
    header: {
      text: "견적ID"
    }
  },
  {
    name: "견적번호",
    fieldName: "견적번호",
    type: "data",
    width: "100",
    header: {
      text: "견적번호"
    }
  },
  {
    name: "견적일",
    fieldName: "견적일",
    type: "data",
    width: "100",
    editor: {
      type: "date"
    },
    header: {
      text: "견적일"
    }
  },
  {
    name: "유효기간",
    fieldName: "유효기간",
    type: "data",
    width: "100",
    editor: {
      type: "date"
    },
    header: {
      text: "유효기간"
    }
  },
  {
    name: "업체명",
    fieldName: "업체명",
    type: "data",
    width: "300",
    header: {
      text: "업체명"
    }
  },
  {
    name: "업체담당자",
    fieldName: "업체담당자",
    type: "data",
    width: "100",
    header: {
      text: "업체담당자"
    }
  },
  {
    name: "업체이메일",
    fieldName: "업체이메일",
    type: "data",
    width: "100",
    header: {
      text: "업체이메일"
    }
  },
  {
    name: "전화번호",
    fieldName: "전화번호",
    type: "data",
    width: "100",
    header: {
      text: "전화번호"
    }
  },
  {
    name: "팩스번호",
    fieldName: "팩스번호",
    type: "data",
    width: "100",
    header: {
      text: "팩스번호"
    }
  },
  {
    name: "견적정보",
    fieldName: "견적정보",
    type: "data",
    width: "100",
    header: {
      text: "견적정보"
    }
  },
  {
    name: "제목",
    fieldName: "제목",
    type: "data",
    width: "100",
    header: {
      text: "견적명"
    }
  },
  {
    name: "부가세여부",
    fieldName: "부가세여부",
    type: "data",
    width: "100",
    header: {
      text: "부가세여부"
    }
  },
  {
    name: "견적금액",
    fieldName: "견적금액",
    type: "data",
    width: "100",
    editor: {
      type: "number",        
      editFormat: "#,##0.##",
      multipleChar: "+"
    },
    header: {
      text: "견적금액"
    }
  },
  {
    name: "비고",    
    fieldName: "비고",    
    type: "data",
    width: "100",
    header: {
      text: "비고"
    }
  },
  {
    name: "납부방법",
    fieldName: "납부방법",
    type: "data",
    width: "100",
    header: {
      text: "결제조건"
    }
  },
  {
    name: "등록일",
    fieldName: "등록일",
    type: "data",
    width: "100",
    editor: {
      type: "date"
    },
    header: {
      text: "등록일"
    }
  },  
  {
    name: "등록자",
    fieldName: "등록자",
    type: "data",
    width: "100",
    header: {
      text: "등록자"
    }
  },  
  {
    name: "고객주소",
    fieldName: "고객주소",
    type: "data",
    width: "100",
    header: {
      text: "고객주소"
    }
  },
  {
    name: "잠금여부",
    fieldName: "잠금여부",
    type: "data",
    width: "100",
    header: {
      text: "잠금여부"
    }
  } 
];

var column_detail = [
  {
    name: "견적ID",
    fieldName: "견적ID",
    type: "data",
    width: "100",
    visible: false,
    header: {
      text: "견적ID"
    }
  },
  {
    name: "견적서항목ID",
    fieldName: "견적서항목ID",
    type: "data",
    width: "100",
    visible: false,
    header: {
      text: "견적서항목ID"
    }
  },
  {
    name: "행상태",
    fieldName: "행상태",
    type: "data",
    width: "100",
    visible: false,
    header: {
      text: "행상태"
    }
  },
  {
    name: "순서",
    fieldName: "순서",
    type: "data",
    width: "40",
    visible: false,
    header: {
      text: "순서"
    }
  },
  {
    name: "카테고리",
    fieldName: "카테고리",
    type: "data",
    width: "100",
    header: {
      text: "카테고리"
    }
  },
  {
    name: "구분",
    fieldName: "구분",
    type: "data",
    width: "60",
    header: {
      text: "구분"
    }
  },
  {
    name: "항목명",
    fieldName: "항목명",
    type: "data",
    width: "260",
    header: {
      text: "항목명"
    }
  },
  {
    name: "규격",
    fieldName: "규격",
    type: "data",
    width: "60",
    header: {
      text: "규격"
    }
  },
  {
    name: "단위",
    fieldName: "단위",
    type: "data",
    width: "60",
    header: {
      text: "단위"
    }
  },
  {
    name: "수량",
    fieldName: "수량",
    type: "data",
    width: "60",
    header: {
      text: "수량"
    }
  },
  {
    name: "단가",
    fieldName: "단가",
    type: "data",
    width: "90",
    footers: [
      {text: "금액", styleName: "center-column bold-column"},
      {text: "부가세", styleName: "center-column bold-column"},
      {text: "합계", styleName: "center-column bold-column"},
    ],
    header: {
      text: "단가"
    }
  },

  {
    name: "합계",
    fieldName: "합계",
    type: "data",
    width: "90",
    header: {
      text: "합계"
    }
  },
  {
    name: "부가세",
    fieldName: "부가세",
    type: "data",
    width: "90",
    header: {
      text: "부가세"
    }
  },
  {
    name: "총합계",
    fieldName: "총합계",
    type: "data",
    width: "90",
    header: {
      text: "총합계"
    }
  },
  {
    name: "비고",
    fieldName: "비고",
    type: "data",
    width: "100",
    header: {
      text: "비고"
    }
  }
];
  
var layout = [{
    items : [
      "견적번호",
      "견적일"
    ],
    direction: "vertical",
    header: false
  },{
    items : [
      "업체명",
      "제목"
    ],
    direction: "vertical",
    header: false
  },{
    items : [
      "업체담당자",
      "견적금액"
    ],
    direction: "vertical",
    header: false
  },{
    items : [
      "전화번호",
      "부가세여부"
    ],
    direction: "vertical",
    header: false
  },{
    items : [
      "팩스번호",
      "유효기간"
    ],
    direction: "vertical",
    header: false
  },{
    items : [
      "비고",
      "납부방법"
    ],
    direction: "vertical",
    header: false
  },{
    items : [
      "등록자",
      "등록일"
    ],
    direction: "vertical",
    header: false
  },
  "잠금여부"
];

function loadData(filename, ds) {
    var reqUrl = "/assets/plugins/realgrid/data/" + filename;
    $.ajax({
        type: "GET",  
        url: reqUrl,
        success: function(response)  
        {
          ds.setRows(response);
        }   
    });
}

function getDetail(masterRow) {
  dsDetail.clearRows();

  if (masterRow >= 0) {
      var mstKey = dsMaster.getValue(masterRow, "견적ID");

      // detailData 배열에서 자료추출. DB대용
      var datas = detail_data.filter(function (element) {
          if (element.견적ID === mstKey) {
              return true;
          }
      });

      dsDetail.setRows(datas);
  };
};

function createGrid(container, cDefine, fDefine) {    
    var ds = new RealGrid.LocalDataProvider();
    ds.setFields(fDefine);

    var grid = new RealGrid.GridView(container);
    grid.setDataSource(ds);
    grid.setColumns(cDefine);

    grid.filteringOptions.selector.showButtons = true;
    grid.displayOptions.refreshMode = "visibleOnly";
    grid.displayOptions.emptyMessage = "표시할 데이타가 없습니다.";
    grid.sortingOptions.showSortOrder = true;
    grid.sortingOptions.style = "reverse";
    grid.displayOptions.rowHoverType = "row";    
    grid.displayOptions.rowResizable = true;

    grid.setEditOptions({
        insertable: true,
        appendable : true
    });

    grid.setEditorOptions({
        viewGridInside: true
    })

    grid.onContextMenuPopup = function (grid, x, y, elementName) {
        console.log(arguments);
        // realgrid-utils.js 기본 팝업 메뉴 생성
        setContextMenu(grid);
        
      };
    // realgrid-utils.js 기본 팝업 메뉴 실행
    grid.onContextMenuItemClicked = onContextMenuClick;          

    return {grid : grid, provider : ds};
};

function createGrid1(container) {
  var obj = createGrid(container, column_master, field_master);
  grdMaster = obj.grid;
  dsMaster  = obj.provider;
  grdMaster.setColumnLayout(layout);  
  grdMaster.onCurrentRowChanged = function (grid, oldRow, newRow) {
    getDetail(newRow);
  };

  grdMaster.setFooters({
    visible: false});

  loadData("master_data.json", dsMaster);
};

function createGrid2(container) {
  var obj = createGrid(container, column_detail, field_detail);
  grdDetail = obj.grid;
  dsDetail  = obj.provider;
  grdDetail.orderBy(["견적서항목ID"], ["ascending"]);
  grdDetail.setFooters([{height:24},{height:24},{height:24}]);
};
