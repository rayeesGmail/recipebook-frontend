<template>
    <v-navigation-drawer
            clipped
            app
            v-model="sideBar"
    >
        <v-list dense>
            <v-list-tile @click="">
                <v-list-tile-action>
                    <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="">
                <v-list-tile-action>
                    <v-icon>contact_mail</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Contact</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "SideBar",
        data: () => ({
           sideBar: true
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