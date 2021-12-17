<template>
    <div>
        <input type="text" v-model="message" @keydown.enter="send"><button @click="send">send</button>
        <ul>
            <li v-for="(text, index) in messages" :key="index">{{text}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    mounted(){
        // Create WebSocket connection.
        this.ws = new WebSocket('ws://localhost:8080');

        // Connection opened
        this.ws.addEventListener('open', function (event) {
            //this.ws.send('Hello Server!');
        });

        // Listen for messages
        this.ws.addEventListener('message', (event) => {
            console.log('Message from server ', event.data);
            this.messages.push(event.data);
        });
    },
    data(){
        return {
            ws: null,
            message: '',
            messages: []
        }
    },
    methods: {
        send(){
            this.ws.send(this.message);
            this.message = '';
        }
    }
}
</script>

<style>

</style>