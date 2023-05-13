<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <!-- center content start -->
          <div class="pt-4 container-fluid">
            <div class="text-center mb-4 col">
              <h2 class="text-secondary">
                <mark class="steelblue">좋은 정보 공유해요!!!</mark>
              </h2>
              <div class="mt-4 container-fluid">
                <div class="row mb-2 justify-content-between">
                  <div class="mr-auto ml-2 col-auto">
                    <button
                      type="button"
                      class="btn btn-outline-primary mb-3"
                      @click="$router.push({ name: 'InfoBoardWrite' })"
                    >
                      글작성
                    </button>
                  </div>
                  <div class="mr-2 col-auto">
                    <form class="form-inline d-flex">
                      <select
                        class="form-select form-select-md"
                        style="height: 100%"
                      >
                        <option value="">검색조건</option>
                        <option
                          value="artic
                                                le_no"
                        >
                          글번호
                        </option>
                        <option value="subject">제목</option>
                        <option value="user_id">작성자</option>
                      </select>
                      <input
                        type="text"
                        placeholder="검색어입력..."
                        class="mr-1 form-control"
                      />
                      <button
                        type="button"
                        class="col-auto btn btn-outline-secondary"
                      >
                        검색
                      </button>
                    </form>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col">
                    <table
                      role="table"
                      aria-busy="false"
                      aria-colcount="5"
                      class="table b-table table-striped table-hover"
                    >
                      <!----><!---->
                      <thead role="rowgroup" class="">
                        <!---->
                        <tr role="row" class="">
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex="1"
                            class=""
                          >
                            <div>글번호</div>
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex="2"
                            class=""
                          >
                            <div>제목</div>
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex="3"
                            class=""
                          >
                            <div>작성자</div>
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex="4"
                            class=""
                          >
                            <div>조회수</div>
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex="5"
                            class=""
                          >
                            <div>작성일</div>
                          </th>
                        </tr>
                      </thead>
                      <!-- list Board -->
                      <tbody>
                        <info-board-item
                          v-for="(info, index) in infos"
                          :key="index"
                          :info="info"
                        ></info-board-item>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="row"></div>
              </div>
              <form id="form-param" method="get" action="">
                <input type="hidden" name="pgno" id="pgno" value="${pgno}" />
                <input type="hidden" name="key" value="${key}" />
                <input type="hidden" name="word" value="${word}" />
              </form>
              <form
                id="form-no-param"
                method="get"
                action="${root}/article/view"
              >
                <input type="hidden" name="pgno" value="${pgno}" />
                <input type="hidden" name="key" value="${key}" />
                <input type="hidden" name="word" value="${word}" />
                <input type="hidden" id="articleno" name="articleno" value="" />
              </form>
            </div>
          </div>
          <!-- center content end -->
          test
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoBoardItem from "@/components/board/InfoBoardItem.vue";
import http from "@/util/http-common.js";

export default {
  name: "InfoBoard",
  components: {
    InfoBoardItem,
  },
  data() {
    return {
      message: "",
      infos: [],
    };
  },
  created() {
    http.get("/enjoytrip/restInfo/list").then(({ data }) => {
      this.infos = data;
      console.log(this.infos);
    });
  },
  methods: {},
};
</script>

<style scoped></style>