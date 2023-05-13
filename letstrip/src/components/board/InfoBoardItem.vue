<template>
  <tr>
    <td>{{ info.board_id }}</td>
    <td>
      <router-link
        :to="{ name: 'InfoBoardView', params: { infono: info.board_id } }"
      >
        {{ info.title }}
      </router-link>
    </td>
    <td>{{ info.user_id }}</td>
    <td>{{ info.hit }}</td>
    <td>{{ info.board_id }}</td>
  </tr>
</template>

<script>
export default {
  name: "InfoBoardItem",
  props: {
    info: Object,
  },
  created() {
    // console.log("this.$props");
    // console.log(this.Info);
  },
  mounted() {
    // console.log(this.Info);
  },
};
</script>

<style></style>
