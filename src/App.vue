<template lang="">
    <div v-if="false">
      <Admin_page/>
    </div>
    <div v-else>
      <User_page />
    </div>
</template>
<script setup>
import  User_page from './views/User-page.vue'
import  Admin_page from './views/Admin-page.vue'
</script>
<style lang="">
  
</style>