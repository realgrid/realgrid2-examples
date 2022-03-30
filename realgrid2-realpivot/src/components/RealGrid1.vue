<template>    
    <div class="real">
        RealPivot
        <div id="realpivotDiv" style="width: 100%; height: 500px;"></div>
        <br/>
        RealGrid2
        <div id="realgrid" style="width: 100%; height: 300px"></div>
    </div>
</template>

<script>
import { GridView, LocalDataProvider } from 'realgrid';
import { columns, fields, rows } from './realgrid-data';

let gridView = GridView; 
let dataProvider = LocalDataProvider;

export default {
    name: 'RealGrid',
    data: function () {
        return {

        }
    },
    mounted() {
        dataProvider = new LocalDataProvider(true);
        gridView = new GridView("realgrid");
        gridView.setDataSource(dataProvider);

        dataProvider.setFields(fields);
        gridView.setColumns(columns);

        gridView.editOptions.movable = true;
        gridView.displayOptions.rowMovable = true;

        var pivot = new window.RealPivot("realpivotDiv");
        pivot.setDataProvider(dataProvider);

        dataProvider.setRows(rows);

        pivot.setFieldMapping([{
            name: "OrderID",
            sourceField: "OrderID",
            fieldHeader: "주문ID",
            summaryFormat: "${label} 요약",
            prefix: "앞",
            suffix: "뒤",
            valueEnable: false
        }, {
            name: "CustomerID",
            sourceField: "CustomerID",
            fieldHeader: "고객사",
            summaryFormat: "${value} 요약",
            valueEnable: false
        }, {
            name: "EmployeeID",
            fieldHeader: "처리자",
            sourceField: "EmployeeID",
            valueEnable: false
        }, {
            name: "OrderYear",
            sourceField: "OrderDate",
            dateType: "year",
            fieldHeader: "영업년도",
            displayFormat: "${value}년도",
            summaryFormat: "${value}년도 요약",
            valueEnable: false
        }, {
            name: "OrderHalf",
            sourceField: "OrderDate",
            dateType: "half",
            fieldHeader: "영업반기",
            displayLabels: {
                1: "상반기",
                2: "하반기"
            },
            summaryFormat: "${label} 요약",
            valueEnable: false
        }, {
            name: "OrderQuarter",
            sourceField: "OrderDate",
            dateType: "quarter",
            fieldHeader: "영업분기",
            displayLabels: { 
                1: "일사분기",
                2: "이사분기",
                3: "삼사분기",
                4: "사사분기"
            },
            summaryFormat: "${label} 요약",
            valueEnable: false
        }, {
            name: "OrderMonth",
            sourceField: "OrderDate",
            dateType: "month",
            fieldHeader: "영업월",
            displayFormat: "${value}월",
            summaryFormat: "${label} 요약",
            valueEnable: false
        }, {
            name: "WeekDay", 
            sourceField: "OrderDate",
            dateType: "weekday",
            fieldHeader: "영업요일",
            displayLabels: {
                1: "일",
                2: "월",
                3: "화",
                4: "수",
                5: "목",
                6: "금",
                7: "토"
            },
            mustValues: [1,2,3,4,5,6,7],
            valueEnable: false
        }, {
            name: "OrderDay",
            sourceField: "OrderDate",
            dateType: "day",
            fieldHeader: "영업일자",
            displayFormat: "${value}일",
            summaryFormat: "${value}일 요약",
            valueEnable: false
        }, {
            name: "CompanyName",
            sourceField: "CompanyName",
            fieldHeader: "생산자",
            valueEnable: false
        }, {
            name: "ProductName",
            sourceField: "ProductName",
            fieldHeader: "품명 Product Name",
            summaryFormat: "${value} 요약",
            valueEnable: false
        }, {
            name: "Quantity",
            sourceField: "Quantity",
            fieldHeader: "판매량",
            numberFormat: "#,##0.000",
            labelEnable: false
        }, {
            name: "UnitPrice",
            sourceField: "UnitPrice",
            fieldHeader: "판매액",
            numberFormat: "#0.00",
            labelEnable: false
        }]);

        pivot.setPivotFields({
            columns: [{
                name: "OrderYear",
                direction: "descending"
            }, {
                name: "OrderQuarter",
                direction: "ascending"
            }],
            rows: ["CustomerID", "ProductName"],
            values: [{
                name: "Quantity",
                expression: "sum"
            }, {
                name: "UnitPrice",
                expression: "sum"
            }]
        });

        pivot.drawView();
    }
}
</script>
