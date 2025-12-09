<template>
    <div id="realgrid" style="width: 100%; height: 600px"></div>
    <div id="pdfReport"></div>
    <!--모달창-->
    <div id="myModal" class="modal" v-show="showReport">
        <button class="close-button" id="closeModalButton" @click="closeModal">
            X
        </button>
        <div class="preview-toolbar modal-toolbar">
            <div class="toolbar-left">
                <div class="toolbar-items">
                    <a class="toolbar-icon-button" @click="onClickZoomOut10()">
                        <div
                            class="toolbar-icon icon preview-zoomout-png"
                        ></div>
                    </a>
                    <input
                        part="input"
                        type="text"
                        readonly
                        :value="zoom"
                        id="inputZoomScale"
                        aria-label="Zoom Scale"
                    />
                    <a class="toolbar-icon-button" @click="onClickZoomIn10()">
                        <div class="toolbar-icon icon preview-zoomin-png"></div>
                    </a>
                    <a class="toolbar-icon-button" @click="onClickZoom100()">
                        <div class="toolbar-icon icon preview-100-png"></div>
                    </a>
                    <a class="toolbar-icon-button" @click="onClickFitToWidth()">
                        <div
                            class="toolbar-icon icon preview-fit-to-width-png"
                        ></div>
                    </a>
                    <a
                        class="toolbar-icon-button"
                        @click="onClickFitToHeight()"
                    >
                        <div
                            class="toolbar-icon icon preview-fit-to-height-png"
                        ></div>
                    </a>
                    <a class="toolbar-icon-button" @click="onClickFitToPage()">
                        <div
                            class="toolbar-icon icon preview-fit-to-page-png"
                        ></div>
                    </a>
                </div>
            </div>
            <div class="toolbar-center">
                <div class="toolbar-items">
                    <a class="toolbar-icon-button" @click="onClickFirstPage()">
                        <div class="toolbar-icon icon preview-first-png"></div>
                    </a>
                    <a class="toolbar-icon-button" @click="onClickPrevPage()">
                        <div class="toolbar-icon icon preview-prev-png"></div>
                    </a>
                    <div class="toolbar-item">
                        <input
                            part="input"
                            type="text"
                            value="1"
                            id="inputPageNumber"
                            aria-label="Page number"
                            readonly
                        />
                    </div>
                    <a class="toolbar-icon-button" @click="onClickNextPage()">
                        <div class="toolbar-icon icon preview-next-png"></div>
                    </a>
                    <a class="toolbar-icon-button" @click="onClickLastPage()">
                        <div class="toolbar-icon icon preview-last-png"></div>
                    </a>
                </div>
            </div>
            <div class="toolbar-right">
                <div class="toolbar-items">
                    <a class="toolbar-icon-button" @click="onClickPrintPopup()">
                        <div class="toolbar-icon icon preview-print-png"></div>
                    </a>
                </div>
                <span class="vertical-separator"></span>
                <div class="toolbar-items">
                    <a class="toolbar-icon-button" @click="onClickExportPdf()">
                        <div class="toolbar-icon icon preview-pdf-png"></div>
                    </a>
                    <a
                        class="toolbar-icon-button"
                        @click="onClickExportDoc('docx')"
                    >
                        <div class="toolbar-icon icon preview-docx-png"></div>
                    </a>
                    <a
                        class="toolbar-icon-button"
                        @click="onClickExportDoc('hwp')"
                    >
                        <div class="toolbar-icon icon preview-hwp-png"></div>
                    </a>
                    <a
                        class="toolbar-icon-button"
                        @click="onClickExportDoc('pptx')"
                    >
                        <div class="toolbar-icon icon preview-pptx-png"></div>
                    </a>
                </div>
                <span class="vertical-separator"></span>
                <div class="toolbar-items">
                    <a
                        class="toolbar-icon-button"
                        @click="onClickExportImage('png')"
                    >
                        <div class="toolbar-icon icon preview-png-png"></div>
                    </a>
                    <a
                        class="toolbar-icon-button"
                        @click="onClickExportImage('jpeg')"
                    >
                        <div class="toolbar-icon icon preview-jpeg-png"></div>
                    </a>
                    <a
                        class="toolbar-icon-button"
                        @click="onClickExportImage('gif')"
                    >
                        <div class="toolbar-icon icon preview-gif-png"></div>
                    </a>
                    <a
                        class="toolbar-icon-button"
                        @click="onClickExportImage('tiff', 'g3')"
                    >
                        <div class="toolbar-icon icon preview-tiffg3-png"></div>
                    </a>
                    <a
                        class="toolbar-icon-button"
                        @click="onClickExportImage('tiff', 'g4')"
                    >
                        <div class="toolbar-icon icon preview-tiffg4-png"></div>
                    </a>
                </div>
            </div>
        </div>
        <div class="modal-content">
            <div id="reportViewer" ref="reportViewer"></div>
        </div>
    </div>
    <!--모달창 End-->

    <button @click="showModal">리포트 뷰어</button>
    <button @click="exportPdf">pdf 내보내기</button>
    <button @click="addRow">행 추가</button>
    <button @click="removeRow">행 삭제</button>
    <br />
    <button @click="rows">선택모드=rows</button>
    <button @click="block">선택모드=block</button>
    <br />
    <button @click="clear">Clear</button>
</template>

<script>
import JSZip from "jszip";
import { GridView, LocalDataProvider } from "realgrid";
import { columns, fields } from "./realgrid-fieldcolumn";
import { datas, reportOptions } from "./realgrid-data";
import { GridReportViewer } from "realreport";
import "realreport/dist/realreport.css";

let gridView = GridView;
let dataProvider = LocalDataProvider;
export default {
    name: "GridReportViewer",
    data() {
        return {
            reportView: null,
            showReport: false,
            zoom: "100%",
        };
    },
    methods: {
        //realReport 관련.............
        exportPdf() {
            if (gridView) {
                this.reportView = new GridReportViewer(
                    "pdfReport",
                    gridView,
                    reportOptions
                );
                if (this.reportView) {
                    this.reportView.preview();
                }
            }
            this.onClickExportPdf();
            // 이후 clearReport 해야함.
        },
        showModal() {
            this.showReport = true;
            if (this.showReport) {
                this.reportPreview();
            }
        },
        closeModal() {
            this.clearReport();
            this.showReport = false;
        },
        loadData() {
            console.log("done!");
            dataProvider.setRows(datas);
        },
        clearReport() {
            const container = document.getElementById("reportViewer");
            container.innerHTML = "";
            this.reportView = null;
        },
        reportPreview() {
            if (gridView && this.showReport) {
                this.reportView = new GridReportViewer(
                    "reportViewer",
                    gridView,
                    reportOptions
                );
                if (this.reportView) {
                    this.reportView.preview();
                }
            }
        },
        base64convert: async function (url, split) {
            const data = await fetch(url);
            const blob = await data.blob();

            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                    const base64data = reader.result;
                    resolve(split ? base64data.split(",")[1] : base64data);
                };
            });
        },
        onClickExportPdf() {
            this.base64convert("/pdffonts/NanumGothic.otf", true).then(
                async (regularFont) => {
                    this.base64convert(
                        "/pdffonts/NanumGothicBold.otf",
                        true
                    ).then(async (boldFont) => {
                        if (regularFont && boldFont) {
                            const fonts = [
                                {
                                    name: "regular",
                                    content: regularFont,
                                    style: "normal",
                                    weight: "normal",
                                },
                                {
                                    name: "bold",
                                    content: boldFont,
                                    style: "normal",
                                    weight: "bold",
                                },
                            ];
                            if (this.reportView) {
                                const oldZoom = this.reportView.zoom;
                                this.reportView.zoom = 1;
                                this.reportView.exportPdf({
                                    fonts,
                                    filename: "sample-pdf-filename.pdf",
                                    preview: false,
                                });
                                this.reportView.zoom = oldZoom;
                            }
                        }
                    });
                }
            );
        },
        onClickZoom(z) {
            if (this.reportView) {
                this.$emit("setreportViewZoomHandler", z);
            }
        },
        onClickZoomIn10() {
            if (this.reportView) {
                this.reportView.zoomIn();
                this.setZoomScaleInputValue("inputZoomScale");
            }
        },
        onClickZoomOut10() {
            if (this.reportView) {
                this.reportView.zoomOut();
                this.setZoomScaleInputValue("inputZoomScale");
            }
        },
        onClickZoom100() {
            if (this.reportView) {
                this.$emit("setreportViewZoomHandler", 1);
                this.setZoomScaleInputValue("inputZoomScale");
            }
        },
        onClickFitToHeight() {
            if (this.reportView) {
                this.reportView.fitToHeight();
                this.setZoomScaleInputValue("inputZoomScale");
            }
        },
        onClickFitToWidth() {
            if (this.reportView) {
                this.reportView.fitToWidth();
                this.setZoomScaleInputValue("inputZoomScale");
            }
        },
        onClickFitToPage() {
            if (this.reportView) {
                this.reportView.fitToPage();
                this.setZoomScaleInputValue("inputZoomScale");
            }
        },
        onClickFirstPage() {
            if (this.reportView) {
                this.reportView.first();
                this.setPageInputValue("inputPageNumber");
            }
        },
        onClickLastPage() {
            if (this.reportView) {
                this.reportView.last();
                this.setPageInputValue("inputPageNumber");
            }
        },
        onClickPrevPage() {
            if (this.reportView) {
                this.reportView.prev();
                this.setPageInputValue("inputPageNumber");
            }
        },
        onClickNextPage() {
            if (this.reportView) {
                this.reportView.next();
                this.setPageInputValue("inputPageNumber");
            }
        },
        onClickExportDoc(type) {
            if (this.reportView) {
                this.reportView.exportDocument({ type });
            }
        },
        onClickExportImage(type, encoding, fileName) {
            if (this.reportView) {
                var options = { type };
                if (encoding) options.tiff = { encoding };
                if (fileName) options.fileName = fileName;
                this.reportView.exportImage(options);
            }
        },
        onClickPrintPopup() {
            if (this.reportView) {
                const w = Math.min(screen.width, 1024);
                const h = Math.min(screen.height, 768);
                const x = (screen.width - w) / 2;
                const y = (screen.height - h) / 2;
                const win = window.open(
                    "./print.html",
                    "print",
                    "left=" + x + ",top=" + y + ",width=" + w + ",height=" + h
                );
                var reportHtml = this.reportView.reportHtml;
                // 페이지가 로드된 다음 즉시 프린트 실행
                win.addEventListener("DOMContentLoaded", function () {
                    const dom = win.document.getElementById("reportViewer");
                    dom.innerHTML = reportHtml;
                    win.print();
                });

                // 프린트한 다음 팝업창 닫기
                win.addEventListener("afterprint", function () {
                    win.close();
                });
            }
        },
        setInputValue(id, value, prefix, surfix) {
            if (id) {
                const input = document.getElementById(id);
                if (input)
                    input.value = `${prefix || ""}${value}${surfix || ""}`;
            }
        },
        setZoomScaleInputValue() {
            this.zoom = `${Math.trunc(this.reportView.zoom * 100)}%`;
        },
        setPageInputValue(id) {
            if (this.reportView) {
                this.setInputValue(id, this.reportView.page);
            }
        },

        //RealGrid 관련.................
        setContextMenu(grid) {
            var columns = grid.getColumnNames();
            var row = grid.getCurrent().itemIndex + 1;

            var visibleContextMenu = [];

            for (var i in columns) {
                var menuItem = {};

                var column = grid.columnByName(columns[i]);

                if (column.fieldName) {
                    menuItem.label = column.header.text;
                    menuItem.tag = column.name;
                    menuItem.type = "check";
                    menuItem.checked = column.visible;

                    visibleContextMenu.push(menuItem);
                }
            }

            visibleContextMenu.push(
                {
                    label: "-",
                },
                {
                    label: "컬럼 모두 보기",
                    tag: "columnShow",
                },
                {
                    label: "-",
                },
                {
                    label: "현재 컬럼 필터 겨기",
                    tag: "autoFilter",
                }
            );

            //var column = grid.columnByName(grid.getCurrent().column);
            var columnName = grid.columnByName(grid.getCurrent().column);

            //context menu 속성
            var contextMenu = [
                {
                    label: "고정",
                    children: [
                        {
                            label: "행 1개",
                            tag: "1rowFixed",
                        },
                        {
                            label: "행 2개",
                            tag: "2rowFixed",
                        },
                        {
                            label: "현재 행까지(" + row + ")",
                            tag: "rowFixed",
                        },
                        {
                            label: "-",
                        },
                        {
                            label: "첫번째 컬럼",
                            tag: "1colFixed",
                        },
                        {
                            label: "두번째 컬럼",
                            tag: "2colFixed",
                        },
                        {
                            label:
                                "현재 컬럼까지(" + columnName.header.text + ")",
                            tag: "colFixed",
                        },
                        {
                            label: "-",
                        },
                        {
                            label: "고정 취소",
                            tag: "cancelFixed",
                            enabled:
                                grid.fixedOptions.rightCount +
                                    grid.fixedOptions.colCount +
                                    grid.fixedOptions.rowCount !=
                                0,
                        },
                    ],
                },
                {
                    label: "컬럼",
                    tag: "columnMenu",
                    children: visibleContextMenu,
                },
                {
                    label: "행 높이",
                    children: [
                        {
                            label: "보통 (28px)",
                            tag: "rowNormalHeight",
                        },
                        {
                            label: "좁게 (20px)",
                            tag: "rowSmallHeight",
                        },
                        {
                            label: "넓게 (36px)",
                            tag: "rowLargeHeight",
                        },
                    ],
                },
                {
                    label: "-", // menu separator를 삽입합니다.
                },
                {
                    label: "ExcelExport",
                    tag: "excelExport",
                },
            ];
            //context menu 설정
            //https://docs.realgrid.com/guides/grid-components/context-menu
            grid.setContextMenu(contextMenu);
        },
        exportExcel(grid) {
            //excel download
            //https://docs.realgrid.com/guides/excels/excel-export
            grid.exportGrid({
                type: "excel",
                exportImage: true,
            });
        },
        addRow() {
            //행 추가
            //https://docs.realgrid.com/guides/crud/insert
            let dataRow = dataProvider.addRow({});
            gridView.setCurrent({ dataRow: dataRow });
        },
        removeRow() {
            //행 삭제
            //https://docs.realgrid.com/guides/crud/delete
            dataProvider.removeRow(gridView.getCurrent().dataRow);
        },
        rows() {
            //row 선택
            //https://docs.realgrid.com/guides/grid-components/selecting
            gridView.displayOptions.selectionStyle = "rows";
        },
        block() {
            //지정 범위 선택
            gridView.displayOptions.selectionStyle = "block";
        },
        clear() {
            dataProvider.clearRows();
        },
    },

    mounted() {
        window.JSZip = window.JSZip || JSZip;

        dataProvider = new LocalDataProvider(false);
        gridView = new GridView("realgrid");

        gridView.setDataSource(dataProvider);
        dataProvider.setFields(fields);
        gridView.setColumns(columns);

        ////////////옵션설정////////////
        gridView.editOptions.commitByCell = true;
        gridView.editOptions.commitWhenLeave = true;
        gridView.displayOptions.rowHeight = 35;
        //멀티정렬
        //https://docs.realgrid.com/guides/column/column-sorting
        gridView.sortingOptions.style = "inclusive";
        //행그룹핑영역 표시
        gridView.groupPanel.visible = true;
        //다중셀렉션 모드 설정
        //https://docs.realgrid.com/guides/grid-components/multi-selection
        gridView.displayOptions.selectionMode = "extended";

        dataProvider.softDeleting = true;

        ////////////콜백설정////////////
        //스타일 동적 적용
        //https://docs.realgrid.com/guides/grid-style/row-dynamic-style
        //컬럼 동적 스타일 https://docs.realgrid.com/guides/grid-style/column-dynamic-style
        //셀 동적 스타일 https://docs.realgrid.com/guides/grid-style/cell-dynamic-style
        gridView.setRowStyleCallback(function (grid, item, fixed) {
            switch (item.rowState) {
                case "created":
                    return "lightskyblue-color";
                case "deleted":
                    return "lightpink-color";
                case "updated":
                    return "lightcyan-color";
            }
        });

        //cell tooltip 이벤트 설정(툴팁 출력 옵션 column.renderer.showTooltip = true)
        //https://docs.realgrid.com/guides/cell-components/tooltip
        gridView.onShowTooltip = function (grid, index, value) {
            var column = index.column;
            var itemIndex = index.itemIndex;

            var tooltip = value;
            if (column == "KorName") {
                tooltip =
                    "이름: " +
                    value +
                    "\r\n성별: " +
                    grid.getValue(itemIndex, "Gender") +
                    "\r\n나이:" +
                    grid.getValue(itemIndex, "Age");
            }
            return tooltip;
        };
        //컨텍스트 메뉴
        //https://docs.realgrid.com/guides/grid-components/context-menu
        gridView.onContextMenuPopup = (grid, x, y, elementName) => {
            console.log(arguments);
            this.setContextMenu(grid);
        };

        //컨텍스트 메뉴 클릭 이벤트
        gridView.onContextMenuItemClicked = (grid, menuItem, clickData) => {
            var cell = grid.getCurrent();
            var col = grid.columnByName(cell.column);

            // data.parent 에 Tag 속성이 없어 switch문 전에 확인한다.
            // parent에 Tag가 추가되면 switch 문에서 처리하자.
            //컬럼보이기 / 숨기기
            //https://docs.realgrid.com/guides/column/column-properties
            if (menuItem.parent.label == "컬럼") {
                grid.setColumnProperty(
                    menuItem.tag,
                    "visible",
                    menuItem.checked
                );
            }

            switch (menuItem.tag) {
                case "1rowFixed":
                    //행 고정
                    //https://docs.realgrid.com/guides/grid-components/fixed-rows
                    grid.setFixedOptions({ rowCount: 1 });
                    break;
                case "2rowFixed":
                    grid.setFixedOptions({ rowCount: 2 });
                    break;
                case "rowFixed":
                    grid.setFixedOptions({ rowCount: cell.itemIndex + 1 });
                    break;
                case "1colFixed":
                    //열 고정
                    //https://docs.realgrid.com/guides/grid-components/fixed-columns
                    grid.setFixedOptions({ colCount: 1 });
                    break;
                case "2colFixed":
                    grid.setFixedOptions({ colCount: 2 });
                    break;
                case "colFixed":
                    grid.setFixedOptions({ colCount: col.index + 1 });
                    break;
                case "cancelFixed":
                    //고정 취소 (count 0설정)
                    grid.setFixedOptions({ colCount: 0, rowCount: 0 });
                    break;
                case "rowNormalHeight":
                    grid.displayOptions.rowHeight = 28;
                    break;
                case "rowSmallHeight":
                    grid.displayOptions.rowHeight = 20;
                    break;
                case "rowLargeHeight":
                    grid.displayOptions.rowHeight = 36;
                    break;
                case "excelExport":
                    this.exportExcel(grid);
                    break;
                case "autoFilter":
                    //자동 필터링 적용
                    //https://docs.realgrid.com/guides/column/column-auto-filtering
                    col.autoFilter = true;
                    grid.refresh();
                    break;
                case "columnHide":
                    col.visible = false;
                    break;
                case "columnShow":
                    grid.getColumns().forEach((v) => (v.visible = true));
                    break;
            }
        };

        dataProvider.setRows(datas);

        gridView.setFocus();
    },
};
</script>
<style>
#pdfReport {
    position: absolute;
    left: -10000px;
}
.modal {
    margin: 10px 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: absolute;
    top: 50%;
    left: 50%;
    width: 900px;
    height: 100%;
    transform: translate(-50%, -50%);
    background-color: white;
    justify-content: center;
    align-items: center;
    overflow: scroll;
}

.modal-content {
    position: relative;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    text-align: center;
}
.modal-toolbar {
    margin-top: 55px;
}
.close-button {
    float: right;
    margin: 10px;
    background-color: #4d2ce1;
    color: #fff;
    border: none;
    padding: 7px 10px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 14px;
}

.right-column {
    text-align: right !important;
}
.lightskyblue-color {
    background: rgb(223, 241, 252);
}

.lightcyan-color {
    background: lightcyan;
}

.lightpink-color {
    background: rgb(255, 236, 239);
}
</style>
