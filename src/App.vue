<template>
    <v-app id="inspire">
        <side-bar :drawer="drawer" v-on:sidebar-toggled="drawer = $event"></side-bar>
        <tool-bar v-on:toggle-sidebar="drawer = !drawer"></tool-bar>
        <v-content>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-content>
        <app-footer></app-footer>
    </v-app>
</template>

<script>
    import AppFooter from './components/Footer'
    import SideBar from './components/SideBar'
    import ToolBar from './components/ToolBar'

    export default {
    components : {
      AppFooter,
      SideBar,
      ToolBar
    },
    data: ()=>({
        drawer: true
    })
}
</script>