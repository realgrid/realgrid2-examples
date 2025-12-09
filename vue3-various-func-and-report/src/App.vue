<template>
    <h2>RealGrid Vue3 Sample</h2>
    <GridReportViewer />
    <!-- <RealReport /> -->
</template>

<script>
import GridReportViewer from "./components/GridReportViewer.vue";
// import RealReport from "./components/RealReport.vue";
export default {
    name: "App",
    components: {
        GridReportViewer,
        // RealReport,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
    margin-left: 10px;
    margin-right: 10px;
}
@import "./css/toolbar.css";
</style>
