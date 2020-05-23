import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                base: '#1f044a',
                primary: '#673ab7',
                secondary: '#ffc107',
                accent: '#00bcd4',
                error: '#e91e63',
                warning: '#ff5722',
                info: '#795548',
                success: '#cddc39'
            }
        }
    }
})
