<template>
    <div class="about mt-10">
        <v-container>
            <section class="about-summary text-center">
                <v-row class="d-flex justify-center">
                    <v-col cols="8">
                        <h1>About Us</h1>

                        <p>
                            We are a group of USC students that created RabBound
                            during MEGA's Fall 2019 Newbies and Veterans Game
                            Jam. We are proud of what we have made, and we would
                            love to share our fun with you!
                        </p>
                    </v-col>
                </v-row>
            </section>

            <section class="about-team mt-10 mb-10">
                <h1 class="text-center mb-8">About The Team</h1>

                <v-list two-line>
                    <v-list-item
                        ripple
                        v-for="member in members"
                        :href="member.link"
                        :key="member.name"
                    >
                        <v-list-item-content>
                            <v-list-item-title
                                v-text="member.name"
                            ></v-list-item-title>
                            <v-list-item-subtitle
                                v-text="member.role"
                            ></v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-btn icon :href="member.link">
                                <v-icon color="grey lighten-1"
                                    >mdi-information</v-icon
                                >
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </section>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'About',
    data: () => ({
        members: [
            {
                name: 'Dylan Drain',
                role: 'Audio Designer, Composer',
                link: 'https://www.linkedin.com/in/dylan-drain/'
            },
            {
                name: 'Yuran Yan',
                role: 'Engineer',
                link: 'https://www.linkedin.com/in/yuran-yan-56a176152/'
            },
            {
                name: 'Gabriel Lacayo',
                role: 'Engineer',
                link: 'https://www.linkedin.com/in/gabriel-lacayo-jr/'
            },
            {
                name: 'Thomas Chen',
                role: 'Engineer, Animation Artist'
            },
            {
                name: 'Katie Xu',
                role: 'Visual Artist'
            },
            {
                name: 'Tianyi He',
                role: 'Engineer, Producer',
                link: 'https://www.linkedin.com/in/tianyi-he-b43310aa/'
            }
        ]
    })
}
</script>
