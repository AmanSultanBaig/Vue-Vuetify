<template>
  <v-app>
    <v-main>
      <Header />

      <TodoList />

      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

import TodoList from "./pages/TodoList";

export default {
  name: "App",

  components: {
    TodoList,
    Header,
    Footer
  },

  data: () => ({
    //
  })
};
</script>
