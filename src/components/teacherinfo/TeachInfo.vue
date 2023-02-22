<template lang="">
    <v-app id="inspire">
      <v-main class="bg-grey-lighten-3">
          <v-container>
            <v-card
              class="mx-auto text-center"
              max-width="434"
              rounded="0"
              >
              <v-img
                height="100%"
                cover
                src=""
              >
              <v-avatar 
              class = "mt-5"
              color="surface-variant" 
              size="100">
              </v-avatar>
                <v-row class="ma-5">
                <v-col cols="6" v-for="data in datas" :key="data.text">
                  <v-sheet min-height="10vh" rounded="lg">
                    <h5>{{data.text}}:</h5><p>&nbsp;{{data.res}}</p>
                  </v-sheet>
                </v-col>
              </v-row>
                  </v-img>
            </v-card>
          </v-container>
      </v-main>
    </v-app>
    <!-- <div>
      <router-view></router-view>
    </div> -->
  </template>
<script>
export default {
  name: "Teach-Info",
  data: () => ({
    datas: [
      { text: "StudentID", res: "T12345" },
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
  