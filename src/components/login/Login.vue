<template lang="">
    <div>
        <v-container>
            <v-form @submit.prevent="submit_form">
                <v-text-field
                    name="student_id"
                    label="Student_id"
                    id="student_id"
                    v-model="student_id"
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
            {{student_id}} <br>
            {{password}} <br>
            {{ url }} <br>
            {{ $store.state.student_id }} <br>
            {{ $store.state.password }}
        </v-container>
    </div>
</template>
<script>
import MD5 from "crypto-js/md5";
import axios from 'axios';
export default {
    name: 'login-page',
    data() {
        return {
            'student_id': '',
            'password': '',
            'url': 'http://localhost/service/student/logins.php?'
        }
    },
    methods: {
        set_student_id(){
            this.$store.commit('set_student_id', this.student_id)
        },
        set_password(){
            this.$store.commit('set_password', MD5(this.password))
        },
        submit_form(){
            this.url = this.url + "username=" + this.student_id + "&password=" + MD5(this.password)
            axios.get(this.url)
            .then((resp)=>{
                if(resp.status == 200){
                    console.log('yes');
                    this.set_student_id();
                    this.set_password();
                    // window.location = "https://www.youtube.com/";
                }else{
                    this.url = 'http://localhost/service/student/logins.php?';
                }
            })
        },
        

    }
}
</script>
<style lang="">
    
</style>