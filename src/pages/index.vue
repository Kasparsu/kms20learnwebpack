<template>
    <div>
        <div v-show="show">
            <button @click="prev" :disabled="!pagination.prev">prev</button>
            <button @click="next" :disabled="!pagination.next">next</button>
            <div class="row row-cols-4">
                <div class="col mb-3" v-for="(char, index) in characters" :key="index">
                    <card :title="char.name" :img="char.image">
                        <b>Status</b>{{char.status}}<br>
                        <b>Species</b>{{char.species}}<br>
                        <b>Gender</b>{{char.gender}}<br>
                        <router-link :to="'/char/' + char.id">read more</router-link>
                    </card>
                </div>
            </div>
        </div>
        <button @click="show=!show">show</button>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
import axios from 'axios';
export default {
    components: { Card },
    created(){
        axios.get('https://rickandmortyapi.com/api/character').then(response => {
            console.log(response);
            this.characters = response.data.results;
            this.pagination = response.data.info;
        });
    },
    data(){
        return {
            characters: [],
            pagination: {
                prev: null,
                next: null
            },
            show: true
        }
    },
    methods: {
        prev(){
            axios.get(this.pagination.prev).then(response => {
                console.log(response);
                this.characters = response.data.results;
                this.pagination = response.data.info;
            });
        },
        next(){
            axios.get(this.pagination.next).then(response => {
                console.log(response);
                this.characters = response.data.results;
                this.pagination = response.data.info;
            });
        }
    }
}
</script>

<style>

</style>