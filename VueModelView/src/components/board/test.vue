<template>
  <div>
    <b-button v-b-modal.modal-upload>이미지 추가</b-button>

    <b-modal id="modal-upload" title="이미지 추가">
      <input type="file" ref="fileInput" @change="handleFileUpload" />
      <b-button @click="uploadImage">업로드</b-button>
    </b-modal>

    <div class="mt-3">
      <img
        v-for="image in uploadedImages"
        :src="image.url"
        :key="image.id"
        class="mr-3 mb-3"
        style="max-height: 200px"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "testTest",
  components: {},
  data() {
    return {
      uploadedImages: [],
    };
  },
  created() {},
  methods: {
    handleFileUpload() {
      const file = this.$refs.fileInput.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageUrl = e.target.result;
        const imageId = Date.now(); // 고유한 ID 생성을 위해 현재 시간 사용 (실제로는 서버에서 ID를 생성하거나 다른 방식으로 사용해야 함)

        this.uploadedImages.push({ id: imageId, url: imageUrl });
        this.$refs.fileInput.value = ""; // 파일 선택을 초기화하기 위해 인풋값 비우기
      };

      reader.readAsDataURL(file);
    },
    uploadImage() {
      // 이미지 업로드 로직을 추가하세요 (서버와 통신 등)
      // 여기서는 이미지를 로컬에 저장하는 예제이므로 추가적인 로직이 필요하지 않습니다.
    },
  },
};
</script>

<style scoped></style>