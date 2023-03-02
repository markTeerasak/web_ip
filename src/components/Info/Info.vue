<template lang="">
  <v-app id="inspire">
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-card class="mx-auto bg-transparent " max-width="400" flat>
          <v-row class="d-flex  text-center bg-transparent mt-0 ">
            <v-col cols="12">
              <v-avatar color="surface-variant" size="100" style="margin-bottom:-2.75rem"></v-avatar>
            </v-col>
          </v-row>

          <v-row class="float-left  px-5 bg-white rounded-t-pill">
            <v-row class="bg-white rounded-xl elevation-3 text-center">
              <v-col cols="12"></v-col>
              <v-col cols="12" >
                <v-card-item ><v-card-title>First Name, Last Name</v-card-title></v-card-item>
              </v-col>
              <v-col cols="6">
                <v-card-item subtitle="Role"><v-card-title>Student</v-card-title></v-card-item>
              </v-col>
                <v-divider vertical></v-divider>
              <v-col cols="6">
                <v-card-item subtitle="Class"><v-card-title>ประถม 6</v-card-title></v-card-item>
              </v-col>
            </v-row>
            
            <v-col cols="12" v-for="(item,index) in stu " :key="index" :value="item.text">
              <v-card-item v-if="index!=1"><v-card-subtitle>{{item.text}}</v-card-subtitle><p>{{item.res}}</p></v-card-item>
            </v-col>
          
          </v-row>
          
        </v-card>

        <v-card class="mx-auto" max-width="400"></v-card>
      </v-container>
    </v-main>
  </v-app>
  <!-- <div>
    <router-view></router-view>
  </div> -->
</template>
<script>

import axios from 'axios';

export default {
  name: "inFo",
  data: () => ({
    stu: [],
    
  }),
  mounted(){
    axios.get('http://localhost/service/student/info.php?key=S15523')
    .then(function (response) {
      console.log(response.data);
    })
  }
};

</script>

