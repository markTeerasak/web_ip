<template lang="">
  <v-app id="inspire">
    <v-main class="bg-grey-lighten-3">
        <v-container>
          <v-flex>
            <v-card>

              <v-row class="ma-5">
                <v-col cols="12" >
                  <v-sheet rounded="lg" min-height="10">
                    <h1>Personal Informations</h1>
                  </v-sheet>
                </v-col>
              </v-row>

              <v-row class="ma-5">
                <v-col cols="4" v-for="data in datas" :key="data.text">
                  <v-sheet min-height="10vh" rounded="lg">
                    <h5>{{data.text}}:</h5><p>&nbsp;{{data.res}}</p>
                  </v-sheet>
                </v-col>
              </v-row>

              <v-row class="ma-10">
                <v-col cols="4">
                </v-col>

                <v-col cols="4">
                </v-col>

                <v-col cols="4">
                  <v-btn class="bg-success " rounded="lg">View your score</v-btn>
                </v-col>

              </v-row>
        
            </v-card>
          </v-flex>
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
      { text: "Name", res: "Dang Comeyai" },
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
<style lang=""></style>
