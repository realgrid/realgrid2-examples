<template>
    <div class="preview-toolbar">
        <div class="toolbar-left">
            <div class="toolbar-items">
                <a class="toolbar-icon-button" @click="onClickZoomOut10()">
                    <div class="toolbar-icon icon preview-zoomout-png"></div>
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
                <a class="toolbar-icon-button" @click="onClickFitToHeight()">
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
                <a class="toolbar-icon-button" @click="onClickExportDoc('hwp')">
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
</template>

<script>
export default {
    name: "ToolbarLayout",
    props: {
        reportView: Object,
        report: [Array, Object],
    },
    data() {
        return {
            zoom: "100%",
        };
    },
    watch: {
        report() {
            this.zoom = "100%";
            this.setInputValue("inputPageNumber", 1);
        },
    },
    methods: {
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
        async base64convert(url, split) {
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
                (regularFont) => {
                    this.base64convert(
                        "/pdffonts/NanumGothicBold.otf",
                        true
                    ).then((boldFont) => {
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
                            this.$emit("setreportViewZoomHandler", 1);
                            this.reportView.exportPdf({
                                fonts: fonts,
                                filename: "sample-pdf-file.pdf",
                                preview: false,
                            });
                        }
                    });
                }
            );
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
                    const dom = win.document.getElementById("realreport");
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
    },
};
</script>
