<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Are you sure?"
        required
      ></v-checkbox>

      <v-btn color="red" dark class="mr-4" @click="addUser()">
        Add +
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import FormValidation from "../components/FormRule";

export default {
  name: "AddTodo",
  data: () => ({
    name: "",
    // form validation rules
    nameRules: FormValidation.nameRules,
    emailRules: FormValidation.emailRules,
    rules: FormValidation.rules
    // ------------------------
  }),
  methods: {
    addUser() {
      if (this.$refs.form.validate()) {
        console.log(this.$refs.form);
      }
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
