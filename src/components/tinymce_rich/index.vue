<template>
  <section id="tinymce_rich"></section>
</template>

<script>
import "./tinymce.min.js";
import "./themes/silver/theme.min.js";
import "./icons/default/icons.min.js";
import "./langs/zh_CN";
import "./js/pubgin"
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
    let options = {
      selector: "#tinymce_rich",
      language: "zh_CN",
      plugins: plugins,
      toolbar: this.toolbar,
      emoticons_database_url: "./static/plugins/emoticons/js/emojis.js",
      width: this.width,
      content_css: "./static/skins/content/default/content.min.css",
      paste_data_images: true,
      skin_url: "./static/skins/ui/oxide",
    };
    Object.assign(options, this.options);
    tinymce.init(options);
    this.tinymce = tinymce;
  },
  methods: {},
};
</script>

<style scoped>
/* @import url("./skins/ui/oxide-dark/skin.min.css"); */
@import url("./skins/ui/oxide/skin.min.css");
@import url("./skins/ui/myThemes/myThemes.css");
</style>
