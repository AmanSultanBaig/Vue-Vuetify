<template>
  <v-app>
    <v-main>
      <Header/>
      <AddTodo />
      <TodoList />
    </v-main>
  </v-app>
</template>

<script>

import Header from "./components/Header";

import AddTodo from "./pages/AddTodo";
import TodoList from "./pages/TodoList";

export default {
  name: "App",

  components: {
    AddTodo,
    TodoList,
    Header
  },

  data: () => ({
    //
  })
};
</script>
