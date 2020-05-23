<template>
    <div class="navigation-bar">
        <v-app-bar app color="primary" dark inverted-scroll dense>
            <div class="d-flex align-center">
                <router-link class="navbar-link" to="/">
                    <v-img
                        alt="Rabbound Logo"
                        class="shrink mr-2"
                        contain
                        :src="logo"
                        transition="scale-transition"
                        width="40"
                    />
                </router-link>
            </div>

            <v-spacer></v-spacer>

            <v-btn text dark to="/">
                Home
            </v-btn>

            <v-btn text dark to="/about">
                About Us
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
import Bunny from '../assets/Bunny.png'

export default {
    name: 'NavigationBar',

    data: () => ({
        logo: Bunny
    })
}
</script>

<style lang="scss" scoped>
.navbar-link {
    text-decoration: none;
}
</style>
