<template>
  <textarea id="tinymce_rich">{{ value }}</textarea>
</template>

<script>
import "./tinymce.min.js";
import "./themes/silver/theme.min.js";
import "./icons/default/icons.min.js";
import "./langs/zh_CN";
import "./js/pubgin";
import plugins from "./plugins";
import toolbar from "./toolbar";

export default {
  props: {
    options: {
      type: Object,
      default: {},
    },
    toolbar: {
      type: Array,
      required: false,
      default() {
        return toolbar;
      },
    },
    value: {
      type: String,
      default: "",
    },
    menubar: {
      type: String,
      default: "file edit insert view format table",
    },
    height: {
      type: [Number, String],
      required: false,
      default: 360,
    },
    width: {
      type: [Number, String],
      required: false,
      default: "auto",
    },
  },
  data() {
    return {
      tinymce: null,
    };
  },
  created() {},
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.tinymce.destroy();
  },
  methods: {
    init() {
      let $this = this;
      let options = {
        selector: "#tinymce_rich",
        language: $this.options.lang||'zh_CN',
        plugins: plugins,
        toolbar: this.toolbar,
        emoticons_database_url: "./static/plugins/emoticons/js/emojis.js",
        width: this.width,
        height:this.height,
        file_picker_types: "media",
        media_live_embeds: true,
        content_css: "./static/skins/content/default/content.min.css",
        paste_data_images: true,
        skin_url: "./static/skins/ui/oxide",
        images_upload_handler(blobInfo, success, failure) {
          $this
            .uploadFile(
              $this.options.images_upload_url,
              $this.options.image_formdata_name,
              $this.options.image_data_format,
              blobInfo
            )
            .then((res) => {
              success(res);
            });
        },
        file_picker_callback: (callback, value, meta) => {
          if (meta.filetype == "media") {
            let input = document.createElement("input"); //创建一个隐藏的input
            input.setAttribute("type", "file");
            let $this = this;
            input.onchange = function () {
              let file = this.files[0]; //选取第一个文件
              $this
                .uploadVideo(
                  $this.options.video_upload_url,
                  $this.options.image_formdata_name,
                  $this.options.video_data_format,
                  file
                )
                .then((res) => {
                  callback(res);
                }); // 上传视频拿到url
            };
            //触发点击
            input.click();
          } else {
            // this.uploadFile()
          }
        },
        init_instance_callback: (editor) => {
          this.tinymce = editor;
          editor.on("KeyUp", (e) => {
            this.$emit("input", this.tinymce.getContent());
          });
          editor.on("Change", (e) => {
            if (this.tinymce.getContent() !== this.value) {
              this.$emit("input", this.tinymce.getContent());
            }
          });
          editor.on("init", (e) => {
            this.$emit("input", this.content);
          });
        },
      };
      Object.assign(options, this.options);
      tinymce.init(options);
    },
    uploadVideo(url, fileName, format, file) {
      return new Promise((resolve, reject) => {
        try {
          let xhr = "";
          let formData = "";
          xhr = new XMLHttpRequest();

          xhr.withCredentials = false;
          xhr.open("POST", url);
          if (this.options.fileRequestHeader) {
            this.options.fileRequestHeader.forEach((item) => {
              xhr.setRequestHeader(item.name, item.value);
            });
          }
          xhr.onload = () => {
            let json = {};
            if (xhr.status !== 200) {
              reject(xhr);
              return;
            }
            json = JSON.parse(xhr.responseText);
            if (format) {
              resolve(format(json));
            } else {
              resolve(json);
            }
          };
          formData = new FormData();
          formData.append(fileName || "file", file);
          xhr.send(formData);
        } catch (error) {}
      });
    },
    uploadFile(url, fileName, format, blobInfo) {
      return new Promise((resolve, reject) => {
        try {
          let xhr = "";
          let formData = "";
          xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.open("POST", url);
          if (this.options.fileRequestHeader) {
            this.options.fileRequestHeader.forEach((item) => {
              xhr.setRequestHeader(item.name, item.value);
            });
          }
          xhr.onload = () => {
            let json = {};
            if (xhr.status !== 200) {
              reject(xhr);
              return;
            }
            json = JSON.parse(xhr.responseText);
            if (format) {
              resolve(format(json));
            } else {
              resolve(json);
            }
          };
          formData = new FormData();
          formData.append(fileName || "file", blobInfo.blob());
          xhr.send(formData);
        } catch (error) {
          reject(error);
        }
      });
    },
  },
};
</script>

<style scoped>
/* @import url("./skins/ui/oxide-dark/skin.min.css"); */
@import url("./skins/ui/oxide/skin.min.css");
@import url("./skins/ui/myThemes/myThemes.css");

</style>
