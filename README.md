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
    <Tinymce-rich v-model="content" :options="options" width=“100px” />
  </div>
</template>

<script>
import TinymceRich from 'by-tinymce-rich'
export default {
  name: 'app',
  components:{
    TinymceRich
  },
  data () {
    return {
      content: "",
      options: {
        images_upload_url: "sys/file/upload",
        video_upload_url: "sys/file/upload",
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
    }
  }
}
</script>
```

## 编辑器的基本配置：

- content（富文本内容）

- images_upload_url（必填：图片上传接口url）

- image_formdata_name（上传图片名称，默认file）

- video_upload_url（必填：视频上传接口url）

- video_formdata_name（上传视频名称，默认file）

- fileRequestHeader（选填：上传文件头部信息）

- image_data_format（参数为上传图片返回值，需要返回图片的绝对路径，例子中配置了nginx，前缀uploadimage）

- video_data_format（参数为上传视频返回值，需要返回图片的绝对路径，例子中配置了nginx，前缀uploadimage）

  

### 更多配置

go [文档资料出处](http://tinymce.ax-z.cn/)