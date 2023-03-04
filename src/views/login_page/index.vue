<template lang="html">
    <v-app>
        <v-container grid-list-xs>
            <Login_page/>
        </v-container>
    </v-app>
</template>
<script>
import Login_page from '../../components/login/Login.vue'

export default {
    name: 'Login_view',
    components: {
        Login_page,
    },
}
</script>
<style lang="css"></style>