<!-- <template>
    <div>
        <div id="reportViewer" ref="reportViewer"></div>
    </div>
</template>

<script>
/* eslint-disable */

import { ReportViewer, RealReport } from "realreport";
import "realreport/dist/realreport.css";
import { datas } from "./realgrid-data";
// import reportForm from "./data/reportForm";
// import reportData from "./data/reportData";

export default {
    name: "ReportViewer",
    data() {
        return {
            reportContainer: null,
            viewer: null,
        };
    },
    mounted() {
        this.reportContainer = this.$refs.reportViewer;
        this.viewer = new ReportViewer.GridReportViewer(this.reportContainer, );
        this.$emit("setViewerHawndler", this.viewer);
        this.reportPreview();
    },
    methods: {
        reportPreview() {
            if (!this.report) return;
            this.viewer.reportForm = this.report;
            this.viewer.dataSet = this.data || {};
            this.viewer.zoom = 1;
            this.viewer.preview({
                async: true,
                pageMark: false,
                noScroll: true,
            });
        },
        // print() {
        //     const container =
        //         printPreview.contentWindow.document.getElementById(
        //             "realreport"
        //         );
        //     container.innerHTML = this.viewer.getHtml();
        //     printPreview.contentWindow.print();
        // },
    },
};
</script>

<style scoped>
.scroller {
    flex: 1;
    direction: ltr;
    height: 90vh;
    width: 100%;
    overflow: auto;
    position: relative;
}
</style> -->
