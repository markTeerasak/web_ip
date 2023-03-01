<template>
    <v-app id="inspire">
        <v-main class="bg-grey-lighten-3">
          <v-container>
            <v-card class="mx-auto text-center " >
                <v-card-title>ตาราง</v-card-title>
                <v-card-subtitle>class</v-card-subtitle>
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
                      <tr
                        v-for="item in day"
                        :key="item.day"
                      >
                        <td class="bg-grey-lighten-1">{{ item.day}}</td>
                        <td v-for="item in sub"
                        :key="item.sub"> <v-tab router :to="item.route">{{ item.sub }}</v-tab></td>
                      </tr>
                    </tbody>
                </v-table>
            </v-card>
          </v-container>
        </v-main>
      </v-app>
</template>
<script>
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
            {time:"08.30-09.30"},
            {time:"09.30-10.30"},
            {time:"10.30-11.30"},
            {time:"Break"},
            {time:"12.30-13.30"},
            {time:"13.30-14.30"},
            {time:"14.30-15.30"},
        ],
        sub: [
            {sub:"thai",route:"/"},
            {sub:"Math",route:"/"},
            {sub:"arts",route:"/"},
            {sub:"Break",route:"/"},
            {sub:"history",route:"/"},
            {sub:"Music",route:"/"},
            {sub:"relax",route:"/"}
        ]
    })
}
</script>
<style>
</style>