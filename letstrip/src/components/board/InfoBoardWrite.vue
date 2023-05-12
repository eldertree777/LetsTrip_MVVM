<template>
  <div>
    <div class="container px-4">
      <h1 class="mt-4 d-flex justify-content-center">좋은 정보 공유해요!</h1>
      <div
        class="container rounded bg-success bg-opacity-75 text-white text-center fs-2 p-4"
      >
        글작성
      </div>

      <div class="container">
        <!-- <form id="form-register" method="POST" action=""> -->
        <!-- <input type="hidden" name="action" value="write"> -->
        <div class="pt-4 pb-4">
          <label for="subject" class="form-label">제목 : </label>
          <input
            type="text"
            class="form-control"
            id="subject"
            name="subject"
            placeholder="제목..."
            v-model="subject"
          />
          제목을 입력하세요
        </div>

        <div class="pb-4">
          <label for="content" class="form-label">내용 : </label>
          <textarea
            class="form-control"
            id="content"
            name="content"
            rows="7"
            v-model="content"
          ></textarea>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between">
          <div class="col-md-1 text-nowrap">
            <button
              type="submit"
              id="btn-register"
              class="btn btn-outline-primary mb-3"
              @click="onSubmit"
            >
              글작성
            </button>
          </div>
          <div class="col-md-1 ms-2 text-nowrap">
            <button type="reset" class="btn btn-outline-danger mb-3">
              초기화
            </button>
          </div>
        </div>
        <!-- </form> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoBoardWrite",
  components: {},
  data() {
    return {
      subject: "",
      content: "",
      userid: "ssafy",
    };
  },
  created() {},
  methods: {
    onSubmit() {
      //   var url =
      //     "http://localhost:9003/enjoytrip/restInfo/write?content=" +
      //     this.content +
      //     "&title=" +
      //     this.subject +
      //     "&user_id=" +
      //     this.userid;

      const axios = require("axios");
      let data = JSON.stringify({
        content: this.content,
        title: this.subject,
        user_id: this.userid,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:9003/enjoytrip/restInfo/write",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style> 