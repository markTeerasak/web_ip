<template lang="">
    <div id="user-page">
        <v-app id="inspire">
      <v-app-bar 
        class="px-3"
        color="black"
        flat
        density="compact"
      >
        <v-app-bar-title>
          Thungsaliam
        </v-app-bar-title>
  
        <v-tabs
          centered
          color="grey-darken-2"
        >
          <v-tab
            v-for="link in links" :key="link.text" router :to="link.route">
            {{ link.text }}
          </v-tab>
        </v-tabs>
        <v-spacer></v-spacer>
  
        <v-avatar
          class="hidden-sm-and-down"
          color="grey-darken-1"
          size="32"
        ></v-avatar>
      </v-app-bar>
  
      <v-main class="bg-grey-lighten-3">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="2"
              class="bg-grey-lighten-3 hidden-sm-and-down"
            >
              <v-sheet
                rounded="lg"
                min-height="268"
                class="bg-grey-lighten-3"
              >
                <!--  -->
              </v-sheet>
            </v-col>
  
            <v-col
              cols="12"
              sm="8"
            >
              <v-sheet
                min-height="70vh"
                rounded="lg"
              >
                <!--  -->
                <router-view></router-view>
              </v-sheet>
            </v-col>
  
            <v-col
              cols="12"
              sm="2"
              class="bg-grey-lighten-3" 
            >
              <v-sheet
                rounded="lg"
                min-height="268"
                class="bg-grey-lighten-3"
              >
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
export default {
    name: 'user-page',
    data: () => ({
        links: [
            { text: "Home", route: "/" },
            { text: "info", route: "/Info" },
            { text: "schedule", route: "/Table" },
        ],
    }),
}
</script>
<style>
</style>