console.log("hello something");

//require('./style.css');
import './style.scss';

import Vue from 'vue/dist/vue.common.dev';

import App from './App.vue';

Vue.component('app', App);


new Vue({
    el: '#app'
});
