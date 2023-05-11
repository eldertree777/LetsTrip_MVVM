<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <!-- main content start -->
          <div class="p-3">
            <!-- 관광지 검색 start -->
            <div class="row">
              <div class="col-md-12 p-3">
                <div
                  class="alert alert-primary mt-3 text-center fw-bold"
                  role="alert"
                ></div>
                <form
                  class="d-flex my-3"
                  onsubmit="return false;"
                  role="search"
                >
                  <select id="search-area" class="form-select me-2">
                    <option value="0" selected>검색 할 지역 선택</option>
                  </select>
                  <select id="search-content-id" class="form-select me-2">
                    <option value="0" selected>관광지 유형</option>
                    <option value="12">관광지</option>
                    <option value="14">문화시설</option>
                    <option value="15">축제공연행사</option>
                    <option value="25">여행코스</option>
                    <option value="28">레포츠</option>
                    <option value="32">숙박</option>
                    <option value="38">쇼핑</option>
                    <option value="39">음식점</option>
                  </select>
                  <input
                    id="search-keyword"
                    class="form-control me-2"
                    type="search"
                    placeholder="검색어"
                    aria-label="검색어"
                  />
                  <button
                    id="btn-search"
                    class="btn btn-outline-success"
                    type="button"
                  >
                    검색
                  </button>
                </form>

                <!-- kakao map start -->
                <div
                  id="map"
                  class="mt-3"
                  style="width: 100%; height: 400px"
                ></div>
                <!-- kakao map end -->
              </div>
              <div class="col-md-6 p-3">
                <div class="row">
                  <div
                    class="alert alert-primary mt-3 text-center fw-bold"
                    role="alert"
                  >
                    검색 결과 리스트
                  </div>
                  <table class="table table-striped" style="display: none">
                    <thead>
                      <tr>
                        <th>대표이미지</th>
                        <th>관광지명</th>
                        <th>주소</th>
                        <th>위도</th>
                        <th>경도</th>
                      </tr>
                    </thead>
                    <tbody id="trip-list"></tbody>
                  </table>
                </div>
              </div>
            </div>
            <!-- 관광지 검색 end -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { serviceKey, serviceKey_go } from "@/assets/js/key.js";

export default {
  name: "SearchAttraction",
  components: {},
  data() {
    return {
      serviceKey,
      serviceKey_go,
      map: null,
      positions: null,
      marker: null,
    };
  },
  created() {},
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.loadMap();
    } else {
      this.loadScript();
    }

    this.loadArea(); // 지역 불러오기
    this.addEventMethod(); // 이벤트 등록
  },
  methods: {
    //api 불러오기
    loadScript() {
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=067b8aa6c249b51bc098f93ee739672f&autoload=false&libraries=services,clusterer,drawing";
      script.onload = () => {
        window.kakao.maps.load(this.loadMap);
      };

      document.head.appendChild(script);
    },

    //맵 출력하기
    loadMap() {
      var mapContainer = document.getElementById("map"); // 지도를 표시할 div
      var mapOption = {
        center: new window.kakao.maps.LatLng(37.500613, 127.036431), // 지도의 중심좌표
        level: 5, // 지도의 확대 레벨
      };

      this.map = new window.kakao.maps.Map(mapContainer, mapOption);
    },

    // loadArea =>  시도 Option 영역 추가하기
    makeOption(data) {
      let areas = data;
      // let areas = data.response.body.items.item;
      let sel = document.getElementById("search-area");
      areas.forEach((area) => {
        let opt = document.createElement("option");
        opt.setAttribute("value", area.sido_code);
        opt.appendChild(document.createTextNode(area.sido_name));
        sel.appendChild(opt);
      });
    },

    // 시도 추가하는 코드임 ㅋ
    loadArea() {
      var areaUrl = "http://localhost:9003/enjoytrip/api/sido";

      fetch(areaUrl, { method: "GET" })
        .then(console.log(areaUrl))
        .then((response) => response.json())
        .then((data) => this.makeOption(data));
    },

    addEventMethod() {
      document.getElementById("btn-search").addEventListener("click", () => {
        let searchUrl =
          "http://localhost:9003/enjoytrip/api/listAttractionSearch?";

        let areaCode = document.getElementById("search-area").value;
        let contentTypeId = document.getElementById("search-content-id").value;
        let keyword = document.getElementById("search-keyword").value;

        if (parseInt(areaCode)) searchUrl += "&areaCode=" + areaCode;
        if (parseInt(contentTypeId))
          searchUrl += "&contentTypeId=" + contentTypeId;
        if (!keyword) {
          alert("검색어 입력 필수!!!");
          return;
        } else searchUrl += "&keyword=" + keyword;

        console.log(searchUrl);

        fetch(searchUrl)
          .then((response) => response.json())
          .then((data) => this.makeList(data));
      });
    },

    makeList(data) {
      document.querySelector("table").setAttribute("style", "display: ;");
      //let trips = data.response.body.items.item;
      let trips = data;
      let tripList = ``;
      this.positions = [];
      trips.forEach((area) => {
        tripList +=
          "<tr on-click=moveCenter(" +
          area.lat +
          "," +
          area.lon +
          ");>" +
          "<td><img src=" +
          area.first_img_1 +
          " width=100px ></td>" +
          "<td>" +
          area.title +
          "</td>" +
          "<td>" +
          area.addr1 +
          " " +
          area.addr2 +
          "</td>" +
          "<td>" +
          area.lat +
          "</td>" +
          "<td>" +
          area.lon +
          "</td>" +
          "</tr>";

        let markerInfo = {
          title: area.title,
          latlng: new window.kakao.maps.LatLng(area.lat, area.lon),
        };
        this.positions.push(markerInfo);
      });
      document.getElementById("trip-list").innerHTML = tripList;
      this.displayMarker();
    },

    displayMarker() {
      // 마커 이미지의 이미지 주소입니다
      var imageSrc =
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

      for (var i = 0; i < this.positions.length; i++) {
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new window.kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다
        var markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize
        );

        // 마커를 생성합니다
        this.marker = new window.kakao.maps.Marker({
          map: this.map, // 마커를 표시할 지도
          position: this.positions[i].latlng, // 마커를 표시할 위치
          title: this.positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
        });
      }

      // 첫번째 검색 정보를 이용하여 지도 중심을 이동 시킵니다
      this.map.setCenter(this.positions[0].latlng);
    },
  },
};
</script>

<style scoped></style>