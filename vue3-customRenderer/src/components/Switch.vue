<template>
    <label class="switch">
        <input type="checkbox" :checked="$props.checked">
        <div class="slider round"></div>
    </label>
</template>

<script setup lang="ts">
    defineProps({
        checked: {
            type: Boolean,
            default: true
        }
    })
</script>
