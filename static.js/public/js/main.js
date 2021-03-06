import Vue from 'vue'
import VueResource from 'vue-resource'
import App from 'pages/App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from 'router/rourer'
import axios from 'axios'

Vue.use(Vuetify)
Vue.use(VueResource)

new Vue({
    el: '#app',
    router,
    render: a => a(App)
});

let eventApi = Vue.resource("/events")