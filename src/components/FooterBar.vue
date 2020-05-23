<template>
    <div class="footer">
        <section class="logo mt-10">
            <v-container class="d-flex justify-center">
                <v-img :src="logo" height="200" contain></v-img>
            </v-container>
        </section>

        <section class="mt-10 mb-10">
            <v-container class="d-flex justify-center">
                <div>
                    <h1>Available Platforms</h1>
                    <div class="d-flex justify-space-around mt-8">
                        <v-btn
                            icon
                            href="https://silverwolfhesh.itch.io/rabbound"
                        >
                            <v-icon x-large>mdi-apple</v-icon>
                        </v-btn>

                        <v-btn
                            icon
                            href="https://silverwolfhesh.itch.io/rabbound"
                        >
                            <v-icon x-large>mdi-microsoft-windows</v-icon>
                        </v-btn>
                    </div>
                </div>
            </v-container>
        </section>
    </div>
</template>

<script>
import Logo from '@/assets/logo.png'

export default {
    name: 'FooterBar',
    data: () => ({
        logo: Logo
    })
}
</script>
