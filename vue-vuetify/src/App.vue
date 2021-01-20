<template>
  <v-app>
    <v-main>
      <Header />

      <AddTodo />

      <TodoList />

      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

import AddTodo from "./pages/AddTodo";
import TodoList from "./pages/TodoList";

export default {
  name: "App",

  components: {
    AddTodo,
    TodoList,
    Header,
    Footer
  },

  data: () => ({
    //
  })
};
</script>
