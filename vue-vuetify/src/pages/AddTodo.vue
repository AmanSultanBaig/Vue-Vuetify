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
export default {
  name: "AddTodo",
  data: () => ({
    name: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    rules: [
      value => !!value || "Required.",
      value => (value && value.length >= 3) || "Min 3 characters"
    ]
  }),
  methods: {
    addUser() {
      this.$refs.form.validate();
      console.log(this.name);
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
