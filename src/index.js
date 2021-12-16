console.log("hello something");

//require('./style.css');
import './style.scss';

import Vue from 'vue/dist/vue.common.dev';

new Vue({
    el: '#app',
    data: {
        message: '',
        items: ['Sai', 'Piim', 'Viin']
    },
    computed: {
        reversedMessage(){
            return this.message.split('').reverse().join('');
        }
    },
    methods: {
        addItem(){
            if(this.message.trim() !== ''){
                this.items.push(this.message);
            }
            this.message = '';
        }
    }
});
