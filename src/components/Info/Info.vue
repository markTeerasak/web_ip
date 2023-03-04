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
              <v-col cols="12">
                <v-card-item ><v-card-title>&nbsp;{{stu.fist_name}}&nbsp;{{stu.last_name}}</v-card-title></v-card-item>
              </v-col>
              <v-col cols="6">
                <v-card-item subtitle="Role"><v-card-title>Student</v-card-title></v-card-item>
              </v-col>
                <v-divider vertical></v-divider>
              <v-col cols="6">
                <v-card-item subtitle="Class"><v-card-title>{{stu.grade}}/{{stu.room}}</v-card-title></v-card-item>
              </v-col>
            </v-row>
            
            <v-col cols="12">
              <v-card-item><v-card-subtitle>StudentID:'</v-card-subtitle><p>{{stu.student_id}}</p></v-card-item>
              <v-card-item><v-card-subtitle>Gender:</v-card-subtitle><p>{{stu.gender}}</p></v-card-item>
              <v-card-item><v-card-subtitle>SocialID:</v-card-subtitle><p>{{stu.solial_id}}</p></v-card-item>
              <v-card-item><v-card-subtitle>BirthDay:</v-card-subtitle><p>{{stu.bathday}}</p></v-card-item>
              <v-card-item><v-card-subtitle>Nationality:</v-card-subtitle><p>{{stu.nationality}}</p></v-card-item>
              <v-card-item><v-card-subtitle>PhoneNumber:</v-card-subtitle><p>{{stu.phone_number}}</p></v-card-item>
              <v-card-item><v-card-subtitle>FatherName:</v-card-subtitle><p>{{stu.first_name_father}}&nbsp;{{stu.last_name_father}}</p></v-card-item>
              <v-card-item><v-card-subtitle>MotherName:</v-card-subtitle><p>{{stu.first_name_mother}}&nbsp;{{stu.last_name_mother}}</p></v-card-item>
              <v-card-item><v-card-subtitle>ParantName:</v-card-subtitle><p>{{stu.fist_name_parent}}&nbsp;{{stu.last_name_parent}}</p></v-card-item>
              <v-card-item><v-card-subtitle>ParantPhoneNumber:</v-card-subtitle><p>{{stu.phone_number_of_parent}}</p></v-card-item>
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
  mounted() {
    axios.get('http://localhost/service/student/info.php?id=S15523')
      .then((resp) => {
        this.stu = resp.data.response[0]
      })
  }
};

</script>

