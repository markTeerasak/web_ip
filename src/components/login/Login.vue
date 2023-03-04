<template lang="">
    <div>
        <v-form @submit.prevent="submit_form">
            <v-text-field
                name="username"
                label="username"
                id="username"
                v-model="username"
            ></v-text-field>
            <v-text-field
                name="password"
                label="Password"
                id="password"
                type="password"
                v-model="password"
            ></v-text-field>
            <v-btn outline color="primary" dark type="submit">login</v-btn>
        </v-form>
        <p class="text-red">{{ errormsg }}</p>
        {{username}} <br>
        {{password}} <br>
        {{ url }} <br>
        {{ $store.state.username }} <br>
        {{ $store.state.password }} <br>
        name: {{name}}
    </div>
</template>
<script>
import MD5 from "crypto-js/md5";
import axios from 'axios';
export default {
    name: 'login-page',
    data() {
        return {
            'username': '',
            'password': '',
            'url': 'http://localhost/service/student/logins.php?', 
            'name': '',
            'errormsg': ''
        }
    },
    created() {
        this.checkLogin()
    },
    methods: {
        checkLogin(){
            var username = localStorage.getItem('username')
            if (!username){
                window.location = 'login'
            }else{
                this.name = username
            }
        },
        set_username(){
            this.$store.commit('set_username', this.username)
        },
        set_password(){
            this.$store.commit('set_password', MD5(this.password))
        },
        submit_form(){
            this.url = 'http://localhost/service/student/logins.php?username=' + this.username + '&password=' + MD5(this.password)
            axios.get(this.url)
            .then((resp)=>{
                console.log(resp),
                localStorage.setItem('username', this.username),
                localStorage.setItem('password', MD5(this.password)),
                this.set_username(),
                this.set_password()
                window.location = '/'
            })
            .catch(() =>{
                this.errormsg = 'Incorrect username or password.'
            })
        },
    }
}
</script>
<style lang="">
    
</style>