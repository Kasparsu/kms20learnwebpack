console.log("hello something");

//require('./style.css');
import './style.scss';

import Vue from 'vue/dist/vue.common.dev';
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import App from './App.vue';

Vue.component('app', App);

import index from './pages/index.vue';
import char from './pages/char.vue';
import chat from './pages/chat.vue';

let router = new VueRouter({
    routes: [
       {path: '/', component: index},
       {path: '/char/:id', component: char},
       {path: '/chat', component: chat},
    ]
});

new Vue({
    el: '#app',
    router // same as router: router
});
