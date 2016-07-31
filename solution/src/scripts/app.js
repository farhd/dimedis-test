import Vue from 'vue'

Vue.config.delimiters = ['<%', '%>']

let app = new Vue({
    el: '#app',
    data: {
        menuOn: true
    },
    methods: {
        toggleMenu: function() {
            menuOn.copy = !this.menuOn
        }
    }
})

console.log(app)