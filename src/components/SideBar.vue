<template>
    <v-navigation-drawer
            clipped
            app
            v-model="sideBar"
    >
        <v-list>
            <v-list-tile v-for="item of sideBarItems" @click="" :key="item.title" :to="'/admin/' + item.route" exact>
                <v-list-tile-action>
                    <v-icon>{{item.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>{{item.title}}</v-list-tile-title>
            </v-list-tile>
        </v-list>

    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "SideBar",
        data: () => ({
           sideBar: true,
           sideBarItems: [
               {title: "Home", icon: "home", route: ''},
               {title: "Cuisines", icon: "restaurant_menu", route: 'cuisines'},
               {title: "units", icon: "straighten", route: 'units'},
               {title: "Recipes", icon: "cake", route: 'recipes'}
           ]
        }),
        props: ['drawer'],
        watch: {
            drawer(){
                this.sideBar = this.drawer
            },
            sideBar(){
                this.$emit("sidebar-toggled", this.sideBar)
            }
        }
    }
</script>

<style scoped>

</style>