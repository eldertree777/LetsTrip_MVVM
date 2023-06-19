<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light h-100 p-4">
      <div class="container">
        <!--  -->
        <router-link class="nav-link" to="/">
          <h1>Enjoy Trip</h1>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/SearchAttraction">
                <i class="fa-solid fa-map-location-dot"></i> 지역별여행지
              </router-link>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="${root}/plan"
                ><i class="fa-regular fa-calendar"></i
              ></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${root}/hotplace"
                ><i class="fa-solid fa-camera"></i
              ></a>
            </li> -->
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/board"
                ><i class="fa-solid fa-list"></i> 여행정보공유</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/test"
                ><i class="fa-solid fa-list"></i> test</router-link
              >
            </li>
          </ul>

          <!-- 로그인  전 -->
          <ul id="before_login" class="navbar-nav mb-2 me-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa-solid fa-user"></i>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#register_modal"
                    ><i class="fa-solid fa-user-plus"></i> 회원가입</a
                  >
                </li>
                <li>
                  <a
                    class="login dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#login_modal"
                    ><i class="fa-solid fa-key"></i> 로그인
                  </a>
                </li>
                <li>
                  <a class="login dropdown-item" href="#"
                    ><i class="fa-solid fa-key"></i> 비밀번호 찾기
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <!-- 로그인 후 -->
          <!-- <div id="after_login" class="d-flex">
          <div>
            <a href="#" target="_self" class="nav-link"
              ><span class="badge rounded-pill bg-primary">S</span>
            </a>
          </div>
          <div>
            <a
              class="dropdown-item ms-2"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#mypage_modal"
              ><i class="fa-solid fa-user"></i> 마이페이지</a
            >
          </div>
          <div>
            <a
              href="<%=root%>/user/logout"
              class="logout dropdown-item ms-2"
              id="btn-logout"
              ><i
                class="fa-solid fa-right-to-bracket"
                id="btn-logout"
                style="margin-left: 10px"
              ></i>
              로그아웃</a
            >
          </div>
        </div> -->
        </div>
      </div>
      <!-- 회원가입 modal start -->
      <div
        class="modal fade"
        id="register_modal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <form id="form-join" method="POST" action="">
              <!-- Modal Header -->
              <header class="modal-header">
                <h5 class="modal-title">회원가입</h5>
                <button
                  type="button"
                  aria-label="Close"
                  class="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </header>

              <!-- Modal body -->

              <div class="modal-body">
                <div class="container-fluid">
                  <div class="row mb-1 text-center">
                    <div class="col-3">이름</div>
                    <div class="col">
                      <input
                        type="text"
                        placeholder="이름"
                        class="form-control"
                        id="username"
                        name="userName"
                      />
                    </div>
                  </div>
                  <div class="row mb-1 text-center">
                    <div class="col-3">아이디</div>
                    <div class="col">
                      <input
                        type="text"
                        placeholder="아이디"
                        class="form-control"
                        id="userid"
                        name="userId"
                      />
                    </div>
                  </div>
                  <!---->
                  <div class="row mb-1 text-center">
                    <div class="col-3">비밀번호</div>
                    <div class="col">
                      <input
                        type="password"
                        placeholder="비밀번호"
                        class="form-control"
                        id="userpwd"
                        name="userPwd"
                      />
                    </div>
                  </div>
                  <div class="row mb-1 text-center">
                    <div class="col-3">비밀번호확인</div>
                    <div class="col">
                      <input
                        type="password"
                        placeholder="비밀번호확인"
                        class="form-control"
                        id="pwdcheck"
                        name="pwdcheck"
                      />
                    </div>
                  </div>
                  <div class="row mb-1 text-center">
                    <div class="col-3">이메일</div>
                    <div class="col-3">
                      <input
                        type="text"
                        placeholder="이메일"
                        class="form-control"
                        id="emailid"
                        name="emailId"
                      />
                    </div>
                    <div class="col-1">
                      <span class="input-group-text">@</span>
                    </div>
                    <div class="col">
                      <select
                        class="form-select form-select-md mb-3"
                        aria-label=".form-select-md example"
                        id="emaildomain"
                        name="emailDomain"
                      >
                        <option value="">도메인 선택</option>
                        <option value="ssafy.com">SSAFY</option>
                        <option value="google.com">GOOGLE</option>
                        <option value="kakao.com">KAKAO</option>
                        <option value="naver.com">NAVER</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Modal footer -->
              <div class="modal-footer">
                <button
                  type="button"
                  id="btn-join"
                  class="btn btn-primary btn-sm"
                >
                  회원가입
                </button>
                <button
                  type="button"
                  class="btn float-right btn-danger btn-sm"
                  data-bs-dismiss="modal"
                >
                  취소
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- 회원가입 modal end -->

      <!-- 로그인 modal start -->
      <div
        class="modal fade"
        id="login_modal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <form id="form-login" method="POST" action="">
              <!-- Modal Header -->
              <header class="modal-header">
                <h5 class="modal-title">로그인</h5>
                <button
                  type="button"
                  aria-label="Close"
                  class="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </header>
              <div id="login-modal___BV_modal_body_" class="modal-body">
                <div class="container-fluid">
                  <div class="row mb-1 text-center">
                    <div class="col-3">아이디</div>
                    <div class="col">
                      <input
                        id="userid_login"
                        type="text"
                        placeholder="아이디"
                        class="form-control"
                        name="userId"
                      />
                    </div>
                  </div>
                  <div class="row mb-1 text-center">
                    <div class="col-3">비밀번호</div>
                    <div class="col">
                      <input
                        id="userpwd_login"
                        type="password"
                        placeholder="비밀번호"
                        class="form-control"
                        name="userPwd"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- Modal footer -->
              <div class="modal-footer">
                <button
                  type="button"
                  id="btn-login"
                  class="btn btn-primary btn-sm"
                >
                  로그인
                </button>
                <button
                  type="button"
                  class="btn float-right btn-danger btn-sm"
                  data-bs-dismiss="modal"
                >
                  취소
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- 로그인 modal end -->

      <!-- 마이페이지 modal start -->

      <div
        class="modal fade"
        id="mypage_modal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <form id="form-update" method="POST" action="<%=root%>/user/update">
              <!-- Modal Header -->

              <input
                type="hidden"
                name="action"
                value="<%=root%>/user/update"
              />

              <header class="modal-header">
                <h5 class="modal-title">마이페이지</h5>
                <button
                  type="button"
                  aria-label="Close"
                  class="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </header>

              <div id="login-modal___BV_modal_body_" class="modal-body">
                <div class="container-fluid">
                  <div class="row mb-1 text-center">
                    <div class="col-3">아이디 수정</div>
                    <div class="col">
                      <input
                        id="userid-update"
                        name="userId"
                        type="text"
                        placeholder="너굴맨"
                        class="form-control"
                        readonly
                      />
                    </div>
                  </div>
                  <div class="row mb-1 text-center">
                    <div class="col-3">비밀번호 수정</div>
                    <div class="col">
                      <input
                        id="userpwd-update"
                        name="userPwd"
                        type="password"
                        placeholder="비밀번호"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Modal footer -->

              <div class="modal-footer">
                <button
                  type="submit"
                  id="btn-update"
                  class="btn btn-primary btn-sm"
                  data-bs-dismiss="modal"
                >
                  수정
                </button>
                <button
                  type="button"
                  id="btn-delete"
                  class="btn float-right btn-danger btn-sm"
                  data-bs-dismiss="modal"
                >
                  회원탈퇴
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- 마이페이지 modal end -->
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderMain",
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
</style>