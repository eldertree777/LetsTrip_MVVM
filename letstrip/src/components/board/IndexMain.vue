<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <!-- main 영역 start -->
          <div class="p-3">
            <!-- 사진 silde start -->
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="4"
                  aria-label="Slide 5"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="5"
                  aria-label="Slide 6"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="@/assets/resource/img/top1.jpg"
                    class="d-block w-100 card_img_top img-thumbnail"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>1</h5>
                    <p>1</p>
                  </div>
                </div>

                <div class="carousel-item">
                  <img
                    src="@/assets/resource/img/top1.jpg"
                    class="d-block w-100 card_img_top img-fluid img-thumbnail"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>2</h5>
                    <p>2</p>
                  </div>
                </div>

                <div class="carousel-item">
                  <img
                    src="@/assets/resource/img/top1.jpg"
                    class="d-block w-100 card_img_top img-fluid img-thumbnail"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>3</h5>
                    <p>3</p>
                  </div>
                </div>

                <div class="carousel-item">
                  <img
                    src="@/assets/resource/img/top1.jpg"
                    class="d-block w-100 card_img_top img-fluid img-thumbnail"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>4</h5>
                    <p>4</p>
                  </div>
                </div>

                <div class="carousel-item">
                  <img
                    src="@/assets/resource/img/top1.jpg"
                    class="d-block w-100 card_img_top img-fluid img-thumbnail"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>5</h5>
                    <p>5</p>
                  </div>
                </div>

                <div class="carousel-item">
                  <img
                    src="@/assets/resource/img/top1.jpg"
                    class="d-block w-100 card_img_top img-fluid img-thumbnail"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>6</h5>
                    <p>6</p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <!-- 사진 silde end -->

            <!--추천 관광지-->
            <div class="mt-5 text-center div_center">
              <h2>지역별 추천 여행지</h2>
            </div>
            <div class="row mt-3">
              <div class="col-sm-3">
                <div class="card mt-3">
                  <img
                    class="card-img-center"
                    src="@/assets/resource/img/img5.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-text">내용</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card mt-3">
                  <img
                    class="card-img-center"
                    src="@/assets/resource/img/img6.jpeg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-text">내용</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-3">
                <div class="card mt-3">
                  <img
                    class="card-img-center"
                    src="@/assets/resource/img/img5.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-text">내용</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-3">
                <div class="card mt-3">
                  <img
                    class="card-img-center"
                    src="@/assets/resource/img/img6.jpeg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-text">내용</p>
                  </div>
                </div>
              </div>
            </div>
            <!--추천 관광지-->

            <!--핫플 관광지-->
            <div class="mt-5 text-center">
              <h2>핫플레이스 여행지</h2>
            </div>
            <div class="row mt-3">
              <div class="col-sm-3" height="100px">
                <div class="card mt-3 h-100">
                  <img
                    class="card-img-center h-75"
                    src="@/assets/resource/img/food.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-text">내용</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-3" height="100px">
                <div class="card mt-3 h-100">
                  <img
                    class="card-img-center h-75"
                    src="@/assets/resource/img/festival1.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-text">내용</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-3" height="100px">
                <div class="card mt-3 h-100">
                  <img
                    class="card-img-center h-75"
                    src="@/assets/resource/img/cafe2.jpeg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-text">내용</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-3">
                <div class="card mt-3 h-100">
                  <img
                    class="card-img-center h-75"
                    src="@/assets/resource/img/festival2.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-text">내용</p>
                  </div>
                </div>
              </div>
            </div>
            <!--핫플 관광지-->

            <!--나만의 여행계획!!-->
            <div class="mt-5 text-center">
              <h2>여행 정보 공유</h2>
            </div>
            <div class="row mt-3">
              <div class="col-sm-4">
                <div class="card mt-3">
                  <img
                    class="card-img-top"
                    src="@/assets/resource/img/img1.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">제목</h5>
                    <p class="card-text">내용</p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">설명1</li>
                  </ul>
                  <div class="card-body">
                    <a href="#" class="btn btn-outline-dark">예약하기</a>
                  </div>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="card mt-3">
                  <img
                    class="card-img-top"
                    src="@/assets/resource/img/img2.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">제목</h5>
                    <p class="card-text">내용</p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">설명1</li>
                  </ul>
                  <div class="card-body">
                    <a href="#" class="btn btn-outline-dark">예약하기</a>
                  </div>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="card mt-3">
                  <img
                    class="card-img-top"
                    src="@/assets/resource/img/img3.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">제목</h5>
                    <p class="card-text">내용</p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">설명1</li>
                  </ul>
                  <div class="card-body">
                    <a href="#" class="btn btn-outline-dark">예약하기</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 하단 footer start -->
    <!-- 하단 footer end -->
  </div>
</template>

<script>
export default {
  name: "IndexMain",
  components: {},
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
/* @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"); */

.carousel-inner {
  width: auto;
  height: 500px;
  /* 이미지 높이 변경 */
}

.carousel-item {
  width: 100%;
  height: 100%;
}

.d-block {
  display: block;
  width: auto;
  height: 100%;
}
</style>