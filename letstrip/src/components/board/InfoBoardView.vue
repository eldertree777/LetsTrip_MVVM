<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-lg-8 col-md-10 col-sm-12">
        <h2 class="my-3 py-3 shadow-sm bg-light text-center">
          <mark class="sky">글보기</mark>
        </h2>
      </div>
      <div class="col-lg-8 col-md-10 col-sm-12">
        <div class="row my-2">
          <h2 class="text-secondary px-5">
            {{ info.board_id }}. {{ info.title }}
          </h2>
        </div>
        <div class="row">
          <div class="col-md-8">
            <div class="clearfix align-content-center">
              <img
                class="avatar me-2 float-md-start bg-light p-2"
                src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg"
              />
              <p>
                <span class="fw-bold">{{ info.userId }}</span> <br />
                <span class="text-secondary fw-light">
                  {{ info.registerTime }} 조회 : {{ info.hit }}
                </span>
              </p>
            </div>
          </div>
          <div class="col-md-4 align-self-center text-end">댓글 : 17</div>
          <div class="divider mb-3"></div>
          <div class="text-secondary">{{ info.content }}</div>
          <div class="divider mt-3 mb-3"></div>
          <div class="d-flex justify-content-end">
            <button
              type="button"
              id="btn-list"
              class="btn btn-outline-primary mb-3"
            >
              글목록
            </button>
            <button
              type="button"
              id="btn-mv-modify"
              class="btn btn-outline-success mb-3 ms-1"
            >
              글수정
            </button>
            <button
              type="button"
              id="btn-delete"
              class="btn btn-outline-danger mb-3 ms-1"
            >
              글삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/util/http-common.js";

export default {
  name: "InfoBoardView",
  components: {},
  data() {
    return {
      infono: Number,
      info: Object,
    };
  },
  created() {
    this.infono = this.$route.params.infono;
    console.log(this.infono);
    http
      .get(`/enjoytrip/restInfo/view/${this.infono}`)
      .then(({ data }) => {
        console.log(data);
        this.info = data;
      })
      .then(console.log(this.info));
  },
  methods: {},
};
</script>

<style scoped></style>