<template>
  <v-app id="inspire">
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-card class="mx-auto text-center ">
          <v-card-title>Classmate</v-card-title>
          <v-card-subtitle>Advisor Name</v-card-subtitle>

          <v-row class="mt-2">
            <v-col cols="12">
              <v-table hover density="comfortable">
                <thead>
                  <tr>
                    <th class="text-center">ลำดับที่</th>
                    <th class="text-center">รหัสนักเรียน</th>
                    <th class="text-center">ชื่อ-นามสกุล</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(key,index) in stu" :key="key">
                    <td class="bg-grey-lighten-2">{{index+1}}</td>
                    <td>{{key.student_id}}</td>
                    <td>{{ key.fist_name}}&nbsp;{{ key.last_name}}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
          </v-row>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import axios from 'axios';
export default {
  name: "classMate",
  data: () => ({
    stu:[],
  }),
  mounted() {
    axios.get('http://localhost/service/student/classmate.php?id=1&room=1')
      .then((resp) => {
        this.stu = resp.data.response
      })
  }
}
</script>