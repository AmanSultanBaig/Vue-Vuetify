<template>
  <div>
    <v-container>
      <v-btn @click="$router.push('add-user')" color="red accent-4" dark class="custom-button-style">
        Add User
      </v-btn>
      <v-data-table
        :headers="headers"
        :items="users"
        :items-per-page="5"
        class="elevation-1 custom-table-style"
      ></v-data-table>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TodoList",

  data() {
    return {
      users: [],
      headers: [
        { text: "Id", value: "id" },
        { text: "Username", value: "username" },
        { text: "Name", value: "name" },
        { text: "Email", value: "email" },
        { text: "City", value: "address.city" },
        { text: "Street", value: "address.street" },
        { text: "Zip Code", value: "address.zipcode" }
      ]
    };
  },
  watch: {
    options: {
      handler() {
        this.getPosts();
      }
    },
    deep: true
  },
  methods: {
    getPosts() {
      return axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(result => (this.users = result["data"]))
        .catch(e => console.log(e));
    }
  },
  mounted() {
    this.getPosts();
  }
};
</script>

<style scoped>
.custom-table-style {
  margin-bottom: 6rem;
}
.custom-button-style {
  margin-bottom: 1rem;
}
</style>
