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
                  <tr v-for="(item, index) in stu" :key="item.id">
                    <td class="bg-grey-lighten-2">{{ index + 1 }}</td>
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
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
export default {
  name: "classMate",
  data: () => ({
    stu:
      [
        { id: "s1", name: "1" },
        { id: "s2", name: "2" },
        { id: "s3", name: "3" },
        { id: "s4", name: "4" },
        { id: "s5", name: "5" },
        { id: "s6", name: "6" },
        { id: "s7", name: "7" },
      ],
  })
}
</script>