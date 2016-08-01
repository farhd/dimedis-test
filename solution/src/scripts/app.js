import Vue from 'vue'

Vue.config.delimiters = ['<%', '%>']

let app = new Vue({
    el: '#app',
    data: {
        menuOn: false
    },
    methods: {
        toggleMenu: function() {
            this.menuOn = !this.menuOn
            console.log(this.menuOn)
        }
    }
})