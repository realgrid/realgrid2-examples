export const fields = [
  {
    fieldName: "KorName",
    dataType: "text"
  },
  {
    fieldName: "Gender",
    dataType: "text"
  },
  {
    fieldName: "Age",
    dataType: "number"
  },
  {
    fieldName: "Phone",
    dataType: "text"
  },
  {
    fieldName: "ProductId",
    dataType: "text"
  },
  {
    fieldName: "KorCountry",
    dataType: "text"
  },
  {
    fieldName: "OrderDate",
    dataType: "datetime",
    datetimeFormat: "yyyy-MM-dd",
    amText: "오전",
    pmText: "오후"
  },
  {
    fieldName: "CardNumber",
    dataType: "text"
  },
  {
    fieldName: "Monetary",
    dataType: "text"
  },
  {
    fieldName: "StartDate",
    dataType: "datetime",
    datetimeFormat: "yyyy-MM-dd",
    amText: "오전",
    pmText: "오후"
  },
  {
    fieldName: "EndDate",
    dataType: "datetime",
    datetimeFormat: "yyyy-MM-dd",
    amText: "오전",
    pmText: "오후"
  },
  {
    fieldName: "ToMonth",
    dataType: "number"
  },
  {
    fieldName: "Month",
    dataType: "number"
  },
  {
    fieldName: "Year",
    dataType: "number"
  },
  {
    fieldName: "InterestRate",
    dataType: "number"
  },
  {
    fieldName: "SaveCost",
    dataType: "number"
  },
  {
    fieldName: "SaveMaturity",
    dataType: "number"
  },
  {
    fieldName: "CurrentSave",
    dataType: "number"
  }
];

export const columns =  [
  {
    name: "KorName",
    fieldName: "KorName",
    width: "60",
    header: {
      text: "이름"
    },
    renderer:{
      //툴팁 컬럼 적용
      //https://docs.realgrid.com/guides/cell-components/tooltip
      showTooltip:true
    }
  },
  {
    name: "Gender",
    fieldName: "Gender",
    width: "70",
    lookupDisplay: true,
    values: ['남','여'],
    labels: ['남자','여자'],
    editor: {
      //dropdown편집기
      //https://docs.realgrid.com/guides/editor/dropdown-editor
      type: "dropdown"
    },
    header: {
      text: "성별"
    }
  },
  {
    name: "Age",
    fieldName: "Age",
    width: "40",
    header: {
      text: "나이"
    },
    numberFormat: "#,##0",
    styleName: "right-column"
  },
  {
    name: "Phone",
    fieldName: "Phone",
    width: "100",
    header: {
      text: "전화번호"
    }
  },
  {
    name: "ProductId",
    fieldName: "ProductId",
    width: "120",
    header: {
      text: "제품번호"
    }
  },
  {
    name: "KorCountry",
    fieldName: "KorCountry",
    width: "100",
    header: {
      text: "투자국가"
    }
  },
  {
    name: "OrderDate",
    fieldName: "OrderDate",
    width: "100",
    header: {
      text: "주문일자"
    }
  },
  {
    name: "CardNumber",
    fieldName: "CardNumber",
    width: "140",
    header: {
      text: "카드번호"
    }
  },
  {
    name: "Monetary",
    fieldName: "Monetary",
    width: "40",
    header: {
      text: "통화"
    }
  },
  {
    name: "imageUrl1",
    fieldName: "Monetary",
    width: "150",
    renderer: {
        type: "image",
        imageCallback: function (grid, cell) {
            var monetary = grid.getValue(cell.item.index, "Monetary");
            //return "../assets/monetaryFlag/" + monetary + ".png";
            return monetary && require("../assets/monetaryFlag/" + monetary + ".png");
        },
        imageHeight: 26
    },
    header: {
      text: "Image Callback"
    }
},
  {
    name: "StartDate",
    fieldName: "StartDate",
    width: "100",
    header: {
      text: "최초납입일"
    }
  },
  {
    name: "EndDate",
    fieldName: "EndDate",
    width: "100",
    header: {
      text: "종료일"
    }
  },
  {
    name: "ToMonth",
    fieldName: "ToMonth",
    width: "60",
    header: {
      text: "납입 횟수"
    },
    numberFormat: "#,##0",
    groupFooter: {
      //그룹 푸터 자동 합계
      //https://docs.realgrid.com/guides/row-group/row-grouping
      expression: "sum",
      numberFormat: "#,##0"
    },
    footer: {
      //푸터 자동 합계
      //https://docs.realgrid.com/guides/header-and-footer/column-footer
      expression: "sum",
      numberFormat: "#,##0"
    },
    styleName: "right-column"
  },
  {
    name: "Month",
    fieldName: "Month",
    width: "60",
    header: {
      text: "남은 횟수"
    },
    numberFormat: "#,##0",
    groupFooter: {
      expression: "sum",
      numberFormat: "#,##0"
    },
    footer: {
      expression: "sum",
      numberFormat: "#,##0"
    },
    styleName: "right-column"
  },
  {
    name: "InterestRate",
    fieldName: "InterestRate",
    width: "50",
    numberFormat: "0.00",
    header: {
      text: "이율"
    },
    groupFooter: {
      expression: "avg",
      numberFormat: "#,##0.00"
    },
    footer: {
      expression: "avg",
      numberFormat: "#,##0.00"
    },
    styleName: "right-column"
  },
  {
    name: "SaveCost",
    fieldName: "SaveCost",
    width: "80",
    numberFormat: "#,##0",
    header: {
      text: "납입금"
    },
    groupFooter: {
      expression: "sum",
      numberFormat: "#,##0"
    },
    footer: {
      expression: "sum",
      numberFormat: "#,##0"
    },
    styleName: "right-column"
  },
  {
    name: "SaveMaturity",
    fieldName: "SaveMaturity",
    width: "80",
    numberFormat: "#,##0",
    header: {
      text: "만기금액"
    },
    groupFooter: {
      expression: "sum",
      numberFormat: "#,##0"
    },
    footer: {
      expression: "sum",
      numberFormat: "#,##0"
    },
    styleName: "right-column"
  },
  {
    name: "CurrentSave",
    fieldName: "CurrentSave",
    width: "80",
    numberFormat: "#,##0",
    header: {
      text: "현재잔액"
    },
    groupFooter: {
      expression: "sum",
      numberFormat: "#,##0"
    },
    footer: {
      expression: "sum",
      numberFormat: "#,##0"
    },
    styleName: "right-column"
  }
];