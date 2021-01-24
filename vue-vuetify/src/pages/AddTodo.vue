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

      <v-btn color="green" dark class="mr-4 mt-5" @click="addUser()">
        Add User
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import FormValidation from "../components/FormRule";

export default {
  name: "AddTodo",
  data: () => ({
    valid: true,
    checkbox: false,
    name: "",
    email: "",
    // form validation rules
    nameRules: FormValidation.nameRules,
    emailRules: FormValidation.emailRules,
    rules: FormValidation.rules
    // ------------------------
  }),
  methods: {
    addUser() {
      if (this.$refs.form.validate()) {
        let formObject = {
          name: this.name,
          email: this.email
        };
        console.log(formObject);
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
