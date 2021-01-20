<template>
  <v-footer class="footer" color="deep-purple accent-4" dark>
    <v-row justify="center" no-gutters>
      <v-col
        class="deep-purple accent-4 py-4 text-center white--text"
        cols="12"
      >
       All Rights Reserved @ {{ new Date().getFullYear() }}
        <strong
          ><a href="http://amansultanbaig.mystrikingly.com/"
            >AmanSultanBaig</a
          ></strong
        >
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
strong a {
  color: #fff;
  text-decoration: none;
}
</style>
