<template>
        <v-container>
        <v-card class="mx-auto px-3 py-5" max-width="450" variant="tonal" style="margin-top: 30vh;">
                <v-card-item class="">
                    <div>
                        <div class="mb-5 text-center text-h3">
                            Login In
                        </div>
                        <v-form class="px-3">
                            <v-text-field name="student_id" label="Student ID" id="student_id"></v-text-field>
                            <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1"
                                label="Password" counter @click:append="show1 = !show1"></v-text-field>
                        </v-form>
                    </div>
                </v-card-item>
            </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "login-page",
        data() {
            return {
                show1: false,
                show2: true,
                password: '',
                rules: {
                    required: value => !!value || 'Required.',
                    min: v => v.length >= 8 || 'Min 8 characters',
                    emailMatch: () => (`The email and password you entered don't match`),
                },
            }
        },
    }
</script>

<style></style>