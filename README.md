# by-tinymce-rich

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

简介 by-tinymce-rich是以tinymce为基础封装的组件，Version: 5.5.1 (2020-10-01)

[文档资料出处](http://tinymce.ax-z.cn/)

基本方法

```
<template>
  <div id="app">
    <Tinymce-rich :options="options" width=“100px”/>
  </div>
</template>

<script>
import TinymceRich from '../components/tinymce_rich/index.vue'
export default {
  name: 'app',
  components:{
    TinymceRich
  },
  data () {
    return {
      options: {
         auto_focus: true,
      }
    }
  }
}
</script>
```
