<template lang="">
  <v-app id="inspire">
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-card class="mx-auto bg-transparent rounded-xl " max-width="400" flat>
          <v-row class="d-flex  text-center bg-transparent mt-0 ">
            <v-col cols="12">
              <v-avatar color="surface-variant" size="100" style="margin-bottom:-2.75rem"></v-avatar>
            </v-col>
          </v-row>

          <v-row class="text-center  px-5 bg-white rounded-t-pill">
            <v-row class="bg-white rounded-xl elevation-3 " elevation="12" >
              <v-col cols="12"></v-col>
              <v-col cols="12">
                <v-card-item title="Ratthathammanoon" subtitle="Student"></v-card-item>
              </v-col>
              <v-col cols="6">
                <v-card-item subtitle="Role"><v-card-title>Student</v-card-title></v-card-item>
              </v-col>
                <v-divider vertical></v-divider>
              <v-col cols="6">
                <v-card-item subtitle="Class"><v-card-title>ประถม 6</v-card-title></v-card-item>
              </v-col>
            </v-row>
            
            <v-col cols="12" v-for="data in datas" :key="data.text">
              <v-card-item><v-card-subtitle>{{data.text}}</v-card-subtitle><p>{{data.res}}</p></v-card-item>
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
export default {
  name: "stu-info",
  data: () => ({
    datas: [
      { text: "StudentID", res: "S15236" },
      { text: "Gender", res: "Male" },
      { text: "SocialID", res: "16489000000000" },
      { text: "Birthday", res: "2022-12-13" },
      { text: "Nationality", res: "Thai" },
      { text: "PhoneNumber", res: "0942356897" },
      { text: "DadName", res: "Nung Comeyai" },
      { text: "MomNane", res: "Nan Comeyai" },
      { text: "ParentName", res: "Nung Comeyai" },
      { text: "ParentPhoneNumber", res: "0856347896" },
      { text: "Status", res: "Study" },
    ],
  }),

};
</script>

