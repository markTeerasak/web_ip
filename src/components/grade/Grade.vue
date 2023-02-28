<template>
    <v-app id="inspire">
        <v-main class="bg-grey-lighten-3">
            <v-container>
                <v-card class="mx-auto text-center bg-green">
                    <v-row>
                        <v-col cols="12">
                            <v-card-title>Grade</v-card-title>
                            <v-card-subtitle>ID, Name</v-card-subtitle>
                        </v-col>

                        <v-col cols="12">
                            <v-select class="ma-3" :items="year" item-title="text" item-value="value" label="year select"
                                variant="underlined" return-object></v-select>
                        </v-col>

                        <v-col cols="12">
                            <v-row>
                                <v-col cols="12">
                                    <v-table hover density="comfortable">
                                        <thead>
                                            <tr class="bg-blue">
                                                <th class="text-white text-center" colspan="3">ภาคเรียนที่1/year</th>
                                            </tr>
                                            <tr>
                                                <th>รหัสวิชา</th>
                                                <th>ชื่อรายวิชา</th>
                                                <th>เกรด</th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-left">
                                            <tr>
                                                <td>ส22023</td>
                                                <td>สังคมศึกษา</td>
                                                <td>B+</td>
                                            </tr>
                                            <tr>
                                                <td>เทอมนี้: 2.85</td>
                                                <td>เฉลี่ยรวม: 2.45</td>
                                            </tr>
                                        </tbody>
                                    </v-table>
                                </v-col>

                                <v-col cols="12">
                                    <v-table hover density="comfortable">
                                        <thead>
                                            <tr class="bg-blue">
                                                <th class="text-white text-center" colspan="3">ภาคเรียนที่2/year</th>
                                            </tr>
                                            <tr>
                                                <th>รหัสวิชา</th>
                                                <th>ชื่อรายวิชา</th>
                                                <th>เกรด</th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-left">
                                            <tr>
                                                <td>ท22023</td>
                                                <td>ศึกษาไทย</td>
                                                <td>B+</td>
                                            </tr>
                                            <tr>
                                                <td>เทอมนี้: 3.00</td>
                                                <td>เฉลี่ยรวม: 5.75</td>
                                            </tr>
                                        </tbody>
                                    </v-table>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>
<script>
export default {
    name: "grAde",
    data: () => ({
        year: [
            { text: "2020", value: "2020" },
            { text: "2021", value: "2021" },
            { text: "2022", value: "2022" }
        ],
    })
}
</script>
<style></style>