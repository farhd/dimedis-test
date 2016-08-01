import Vue from 'vue'

Vue.config.delimiters = ['<%', '%>']

let app = new Vue({
    // scope
    el: '#app',

    // app state
    data: {
        menuOn: false,
        fruit: true,
        veggie: true,
        meat: true
    },

    // handlers
    methods: {
        toggleMenu: function() {
            this.menuOn = !this.menuOn
        }
    }
})