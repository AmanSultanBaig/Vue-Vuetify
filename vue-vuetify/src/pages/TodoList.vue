<template>
  <div>
    <v-container>
      <v-btn color="deep-purple accent-4" dark class="custom-button-style">
        Add Todo
      </v-btn>
      <v-data-table
        :headers="headers"
        :items="desserts"
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
      desserts: [],
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
        .then(result => (this.desserts = result["data"]))
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
