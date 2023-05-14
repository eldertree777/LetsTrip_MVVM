<template>
  <div></div>
</template>

<script>
import http from "@/util/http-common.js";

export default {
  name: "InfoBoardDelete",
  components: {},
  data() {
    return {
      message: "",
    };
  },
  created() {
    var infono = this.$route.params.infono;
    console.log(`infono 삭제!! : ${infono}`);
    http.delete(`/enjoytrip/restInfo/${infono}`).then(({ data }) => {
      console.log(data);
      this.$router.push({ path: "Board" });
    });
  },
  methods: {},
};
</script>

<style scoped></style>