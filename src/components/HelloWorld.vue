<template>
  <v-container>
    <v-row>
      <v-col class="text-center" cols="12">
        <v-avatar color="red" size="200"></v-avatar>
      </v-col>

      <v-col class="mb-4 text-center">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome
        </h1>
        <h1 class="display-2 font-weight-bold mb-3">
          {{ stu.student_id }}&nbsp;{{ stu.fist_name }}&nbsp;{{stu.last_name}}
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import axios from 'axios';

export default {
  name: 'HelloWorld',
  data: () => ({
      stu: [],
  }),
  mounted() {
    axios.get('http://localhost/service/student/info.php?id=S15523')
      .then((resp) => {
        this.stu = resp.data.response[0]
      })
  }
}
</script>
