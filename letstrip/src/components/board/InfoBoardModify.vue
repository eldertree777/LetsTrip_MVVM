<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-lg-8 col-md-10 col-sm-12">
        <h2 class="my-3 py-3 shadow-sm bg-light text-center">
          <mark class="sky">글수정</mark>
        </h2>
      </div>
      <div class="col-lg-8 col-md-10 col-sm-12">
        <input type="hidden" name="action" value="modify" />
        <input type="hidden" name="articleNo" value="${article.articleNo}" />
        <div class="mb-3">
          <label for="subject" class="form-label">제목 : </label>
          <input
            type="text"
            class="form-control"
            id="subject"
            name="subject"
            v-model="info.title"
          />
        </div>
        <div class="mb-3">
          <label for="content" class="form-label">내용 : </label>
          <textarea
            class="form-control"
            id="content"
            name="content"
            rows="7"
            v-model="info.content"
          ></textarea>
        </div>
        <div class="col-auto text-center">
          <button
            id="btn-modify"
            class="btn btn-outline-primary mb-3"
            @click="infoModify"
          >
            글수정
          </button>
          <button
            type="button"
            id="btn-list"
            class="btn btn-outline-danger mb-3"
            @click="moveList"
          >
            목록으로이동...
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/util/http-common.js";

export default {
  name: "InfoBoardModify",
  components: {},
  data() {
    return {
      infono: Number,
      info: Object,
    };
  },
  created() {
    // 위 정보 표시
    this.infono = this.$route.params.infono;
    http
      .get(`/enjoytrip/restInfo/view/${this.infono}`)
      .then(({ data }) => {
        this.info = data;
      })
      .then(console.log(this.info));
  },
  methods: {
    //글수정
    infoModify() {
      console.log(this.info);
      http.put("/enjoytrip/restInfo/modify", this.info).then(({ data }) => {
        console.log(data);
        this.$router.push({ path: "Board" });
      });
    },
    moveList() {
      this.$router.push({ name: "InfoBoard" });
    },
  },
};
</script>

<style scoped></style>