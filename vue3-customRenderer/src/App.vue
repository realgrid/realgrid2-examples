<template>
    <h2>RealGrid Vue3 Sample</h2>
    <Grid />
</template>

<script setup lang="ts">
import Grid from './components/RealGrid.vue'
import RealGrid from 'realgrid'

RealGrid.setLicenseKey('upVcPE+wPOmtLjqyBIh9RkM/nBOseBrflwxYpzGZyYm9cY8amGDkiMnVeQKUHJDjW2y71jtk+wteqHQ1mRMIXzEcGIrzZpzzNTakk0yR9UcKS69Wn2kI83Uszabo3mU0LUipz0P8BheMHilNXwOhKViPkoEUbYPLyVfdcZjXXt8=')
</script>

<style>
@import '../node_modules/realgrid/dist/realgrid-style.css';
</style>
