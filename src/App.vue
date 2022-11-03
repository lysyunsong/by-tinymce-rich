<template>
  <div id="app">
    <Tinymce-rich
      ref="rich"
      v-model="content"
      :options="options"
      :height="500"
    />
  </div>
</template>

<script>
import TinymceRich from "./components/tinymce_rich/index.vue";
export default {
  name: "app",
  components: {
    TinymceRich,
  },
  data() {
    return {
      content: "",
      options: {
        images_upload_url: "/dev-api/sys/file/upload",
        video_upload_url: "/dev-api/sys/file/upload",
        image_formdata_name: "file",
        video_formdata_name: "file",
        fileRequestHeader: [
          {
            name: "token",
            value: "xxxxx",
          },
        ],
        image_data_format(res) {
          return "/uploadImage/" + res.data.savePath;
        },
        video_data_format(res) {
          return "/uploadImage/" + res.data.savePath;
        },
      },
    };
  },
  mounted() {

  },
};
</script>

<style>

</style>
