<template>
    <div class="container mt-3">
        <div>
            <input type="text" class="form-control" v-model="message">
            <button class="btn btn-primary" @click="addItem">click me</button>
            {{ reversedMessage }}
            <ul>
                <li v-for="(item,index) in items" :key="index">{{ item }}</li>
            </ul>
            <button 
                class="btn btn-primary"
                :disabled="btnDisabled"
                @mouseover="btn2Disabled=false;btnDisabled=true">Click me</button>
            <button 
                class="btn btn-primary"
                :disabled="btn2Disabled"
                @mouseover="btn2Disabled=true;btnDisabled=false">Click me</button>

            <input :type="inputType"> 
            <button class="btn btn-primary" @click="inputType='password'">change type</button>
            
            <button 
                class="btn"
                :class="{'btn-danger': isDanger, 'btn-primary': !isDanger}"
                @click="isDanger = !isDanger">colors</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            message: '',
            items: ['Sai', 'Piim', 'Viin'],
            btnDisabled: false,
            btn2Disabled: false,
            inputType: 'text',
            isDanger: false
        }
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
}
</script>

<style>

</style>