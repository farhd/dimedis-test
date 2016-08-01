import Vue from 'vue'

Vue.config.delimiters = ['<%', '%>']

let app = new Vue({
    el: '#app',
    data: {
        menuOn: false,
        fruit: true,
        veggie: true,
        meat: true
    },
    methods: {
        toggleMenu: function() {
            this.menuOn = !this.menuOn
            console.log(this.menuOn)
        }
    }
})