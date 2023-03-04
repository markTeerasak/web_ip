<template>
  <div id="user-page">
    <v-app id="inspire">
      <v-app-bar class="px-3" color="black" flat density="compact">
        <v-app-bar-title>
          <v-btn v-for="item in logo" :key="item.text" router :to="item.route">{{item.text}}</v-btn>
        </v-app-bar-title>

        <v-tabs centered color="grey-darken-2">
          <v-tab v-for="link in links" :key="link.text" router :to="link.route">
            {{ link.text }}
          </v-tab>
        </v-tabs>
        <v-spacer></v-spacer>
        <!-- Dropdown menu -->
        <v-menu transition="slide-y-transition" rounded>
          <template v-slot:activator="{props}">
            <v-btn icon v-bind="props" >
             <v-avatar color="grey"></v-avatar>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="item in drop" :key="item.text" router :to="item.route">
              <v-list-item-title>{{item.text}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <v-main class="bg-grey-lighten-3">
        <v-container>
          <v-row>
            <v-col cols="12" sm="2" class="bg-grey-lighten-3 ">
              <v-card>
                <v-card-title>Homework</v-card-title>
                <ul class="ms-10" v-for="item in work" :key="item.work_id">
                  <li><b>{{item.work_name}}:</b>{{ item. work_details}}//<p style="color:red"><b>รายวิชา</b></p>{{ item.subject_name }}</li>
                  
                </ul>
              </v-card>
            </v-col>

            <v-col cols="12" sm="8">
              <v-sheet min-height="70vh" rounded="lg">
                <!--  -->
                <router-view></router-view>
              </v-sheet>
            </v-col>

            <v-col cols="12" sm="2" class="bg-grey-lighten-3">
              <v-sheet rounded="lg" min-height="268" class="bg-grey-lighten-3">
                <!--  -->
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
<script>

import axios from 'axios';

export default {
  name: 'user-page',
  data: () => ({
    logo: [{text:"Thungsaliam", route:"/"}],
    links: [
      { text: "Home", route: "/" },
      { text: "info", route: "/Info" },
      { text: "schedule", route: "/Table" },
    ],
    drop: [
      {text:"Grade", route:"/Grade"},
      {text:"Classmate", route:"/Classmate"},
      {text:"Logout", route:"/"},
    ],
    work: []
  }),
  mounted() {
    axios.get('http://localhost/service/student/work.php?id=S15523')
      .then((resp) => {
        this.work = resp.data.response
      })
  }
}
</script>
<style></style>