<template>
  <div id="app">
    <Tinymce-rich ref="rich" :options="options" width="auto" />
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
      options: {
        automatic_uploads: false,
      },
    };
  },
  mounted() {},
};
</script>

<style>
</style>
