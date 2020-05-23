<template>
    <v-app>
        <NavigationBar />

        <v-content class="rabbound-app">
            <transition>
                <keep-alive>
                    <router-view />
                </keep-alive>
            </transition>
        </v-content>

        <FooterBar />
    </v-app>
</template>

<script>
import NavigationBar from './components/NavigationBar'
import FooterBar from './components/FooterBar'

export default {
    name: 'App',

    components: {
        NavigationBar,
        FooterBar
    }
}
</script>

<style lang="scss">
.rabbound-app {
    background-color: #29144a !important;
}
</style>
