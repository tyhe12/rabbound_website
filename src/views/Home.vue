<template>
    <div class="home">
        <section class="">
            <v-img
                dark
                :src="banner"
                alt="Rabbound banner"
                height="550"
                contain
            >
            </v-img>
        </section>

        <section class="home-video mt-10">
            <h1 class="display-2 text-center mb-4">Trailer</h1>
            <v-container class="d-flex justify-center">
                <youtube :video-id="videoId"></youtube>
            </v-container>
        </section>

        <section class="home-summary mt-10">
            <v-container class="text-center">
                <v-row class="d-flex justify-center">
                    <v-col cols="12" md="6">
                        <h1 class="display-1 mb-10">
                            RabBound is a 2D platformer about an alien rabbit
                            bounding through an endless universe. Help him hop
                            from planet to planet to escape the "void" and save
                            his bunny friends!
                        </h1>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section class="home-gallary mt-10">
            <v-container>
                <h1 class="display-2 text-center mb-4">Screenshots</h1>
                <v-row>
                    <v-col cols="12" lg="6">
                        <v-img
                            height="300"
                            :src="images[0]"
                            alt="Rabbound gameplay image 1"
                        ></v-img>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <v-img
                            height="300"
                            :src="images[1]"
                            alt="Rabbound gameplay image 2"
                        ></v-img>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" lg="6">
                        <v-img
                            height="300"
                            :src="images[2]"
                            alt="Rabbound gameplay image 3"
                        ></v-img>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <v-img
                            height="300"
                            :src="images[3]"
                            alt="Rabbound gameplay image 4"
                        ></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section class="home-quote mt-10 mb-12 text-center">
            <h1 class="text-uppercase display-3 pb-10">
                "Cute, Stylish, and Fun!"
            </h1>
        </section>
    </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/assets/banner.png'
import Image1 from '@/assets/image1.png'
import Image2 from '@/assets/image2.png'
import Image3 from '@/assets/image3.png'
import Image4 from '@/assets/image4.png'

export default {
    name: 'Home',

    data: () => ({
        banner: Banner,
        images: [Image1, Image2, Image3, Image4],
        videoId: 'JlwpQu3xZ7g'
    })
}
</script>
