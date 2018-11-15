<template>
    <v-toolbar color="indigo" dark app clipped-left>
        <v-toolbar-side-icon v-on:click="$emit('toggle-sidebar')"></v-toolbar-side-icon>
        <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
</template>

<script>
    export default {
        name: "ToolBar"
    }
</script>

<style scoped>

</style>