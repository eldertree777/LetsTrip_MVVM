<template>
  <div>
    <!-- header -->
    <header-main></header-main>
    <!-- <router-view/>  -->
    <router-view />
    <!-- footer -->
    <footer-main></footer-main>
  </div>
</template>

<script>
import HeaderMain from "@/components/static/HeaderMain2.vue";
import FooterMain from "@/components/static/FooterMain.vue";

// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    HeaderMain,
    FooterMain,
  },
};
</script>
