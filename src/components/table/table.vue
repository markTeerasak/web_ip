<template>
    <v-app id="inspire">
        <v-main class="bg-grey-lighten-3">
          <v-container>
            <v-card class="mx-auto text-center " >
                <v-card-title>ตาราง</v-card-title>
                <v-card-subtitle>{{sub.grade}}/{{sub.room}}</v-card-subtitle>
                <v-card-subtitle>Advisor Name</v-card-subtitle>

                <v-table hover density="comfortable">
                    <thead>
                      <tr>
                        <th>
                        </th>
                        <th class="bg-blue-lighten-4 text-center" v-for="item in time" :key="item.time">
                          {{ item.time }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in day" :key="item.day">
                        <td class="bg-grey-lighten-1">{{ item.day}}</td>
                        <td v-for="item in sub" :key="item"> {{item}}</td>
                      </tr>
                    </tbody>
                </v-table>
            </v-card>
          </v-container>
        </v-main>
      </v-app>
</template>
<script>

import axios from 'axios';

export default {
    name: "taBle",
    data: () => ({
        day: [
            {day:"Mon"},
            {day:"Tue"},
            {day:"Wed"},
            {day:"Tue"},
            {day:"Fri"},
        ],
        time: [
            {time:"08.00-09.50"},
            {time:"10.00-10.50"},
            {time:"11.00-11.50"},
            {time:"13.00-13.50"},
            {time:"14.00-14.50"},
            {time:"15.00-15.50"},
        ],
        sub: []
    }),
    mounted() {
    axios.get('http://localhost/service/student/table.php?id=1&room=1')
      .then((resp) => {
        this.sub = resp.data.response
      })
  }
}
</script>
<style>
</style>