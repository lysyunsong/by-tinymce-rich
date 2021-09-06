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

## 编辑器的基本配置：

- auto_focus（自动获得焦点）
- base_url（设置主程序结构所在url）
- cache_suffix（缓存请求后缀）
- content_security_policy（内容安全策略）
- external_plugins（引入站外插件）
- hidden_input（开关内联模式用于存内容的‘隐藏input’）
- init_instance_callback（初始化结束后执行）
- setup（初始化前执行）
- plugins（指定需加载的插件）
- readonly（只读模式）
- suffix（加载用的后缀）
- target（使用Node替代selector）

### auto_focus（自动获得焦点）

该参数用于让编辑器加载完成后自动获得光标焦点，值为true时为当前实例，为string时是指定其他编辑的实例ID。

**取值：TRUE / String**

```js
auto_focus: true,
```

### base_url（设置主程序结构所在url）

5.0.8新增。

如果你的tinymce.js和其它应该放到与它同级的文件夹（比如插件皮肤等）因为某种原因没有放在一起。比如tinymce.js你是用cdn引入的，但皮肤和插件你想放在项目里之类的场景，那么用此参数可以解决你的问题。

**取值：TRUE / String**

```js
base_url: '/my/tinymce/dir',
```

### cache_suffix（缓存请求后缀）

该参数可在TinyMCE加载js和css文件时，在URL请求后面自动加上指定的后缀，多用于解决缓存问题。

**取值：String**

```js
cache_suffix: '?v=5.0.0',
```

### content_security_policy（内容安全策略）

为编辑器的iframe内容设置自定义内容安全策略。了解详情可自行搜索：HTML5内容安全策略（CSP）。

**取值：String**

```js
content_security_policy: "default-src 'self'",//仅允许当前域名，不包括子域名
```

### external_plugins（引入站外插件）

可用于引入本站外部提供的插件，TinyMCE将根据插件加载规则加载指定URL的插件。当从CDN加载TinyMCE或希望TinyMCE主目录与自定义插件分开时，可使用此配置。

其值因为一个对象，形如{插件名:插件URL}

**取值：Object**

```js
external_plugins: {
        'testing': 'http://www.testing.com/plugin.min.js',
        'maths': 'http://www.maths.com/plugin.min.js'
    }
```

### hidden_input（开关内联模式用于存内容的‘隐藏input’）

默认tinymce在开启内联模式（inline）会生成一个‘隐藏的input’用于执行保存动作时存放编辑器的内容。此选项默认开启，如果不需要生成这个input，可以设为false禁用此功能。

**取值：TRUE / FALSE**

**默认：TRUE**

```js
inline: true,
hidden_input: false,
```

### init_instance_callback（初始化结束后执行）

此配置选项允许你在编辑器初始化完成后，执行自己的回调函数。此函数支持一个参数，该参数为编辑器实例对象的引用。

**取值：Function**

```js
init_instance_callback : function(editor) {
        console.log("ID为: " + editor.id + " 的编辑器已初始化完成.");
    }
```

### setup（初始化前执行）

与init_instance_callback类似，不过这个是在开始前执行一个自定义函数。

**取值：Function**

```js
setup: function(editor) {
        console.log("ID为: " + editor.id + " 的编辑器即将初始化.");
    }
```

### plugins（指定需加载的插件）

为TinyMCE指定要加载的插件，此插件必须已存在plugins目录内，多个插件用空格分隔。默认TinyMCE不会加载任何插件。

**取值：String**

```js
plugins : 'advlist autolink link image lists charmap print preview'
```

### readonly（只读模式）

将编辑器设置成只读模式，不可编辑。

**取值：true / false**

```js
readonly: true,
```

> 以上是初始化配置参数，该参数只可读不可改。如果想要关闭当前编辑器的只读模式，重设该参数是无用的，需要借助如下命令：

```js
tinymce.editors['编辑器id'].setMode('design');//开启编辑模式
```

```js
tinymce.editors['编辑器id'].setMode('readonly');//开启只读模式
```

### suffix（后缀）

5.0.8新增。

详细解释一下这东西，tinymce加载插件的方式很特别，如果主程序叫tinymce.js，它在加载插件时就会去找插件文件夹里的plugin.js；如果主程序叫tinymce.min.js，它在加载插件时就会去找plugin.min.js。看到这里不知道你懂没懂，这个参数简单说就是用来设置“.min”这个部分的。

**取值：String**

```js
tinymce.init({
    selector: '#textarea1',
    suffix: '.min',
});
```

## 配置编辑器的外观，包括菜单和工具栏：

- branding（隐藏右下角技术支持）
- contextmenu（上下文菜单）
- contextmenu_never_use_native
- custom_ui_selector
- draggable_modal（允许模态窗口拖动）
- elementpath（隐藏底栏的元素路径）
- event_root
- fixed_toolbar_container
- icons（为tinymce附加新图标集合）
- icons_url（附加新图标的url路径）
- inline（内联模式）
- width&height（设置宽高）
- max_width&max_height（最大宽高）
- min_width&min_height（最小宽高）
- menu（自定义菜单）
- menubar（1级菜单）
- preview_styles
- quickbars_insert_toolbar（[插入\]快捷工具栏）
- quickbars_selection_toolbar（[选择\]快捷工具栏）
- removed_menuitems（移除某菜单项）
- resize（调整编辑器大小工具）
- skin_url（引入外部皮肤）
- statusbar（显示隐藏状态栏）
- toolbar（自定义工具栏）
- toolbar_mode（工具栏模式）
- toolbar_groups（工具栏分组）
- toolbar_location（工具栏位置，可实现在底部）
- toolbar_sticky（粘性工具栏）

### branding（隐藏右下角技术支持）

设为false时，隐藏编辑器界面右下角的“Powered by Tiny”（官方汉化为：由Tiny驱动）字样。

> 为支持TinyMCE推广，建议保留。

**取值：true/false**

**默认值：true**

```js
branding: false,
```

### contextmenu（上下文菜单）

指定上下文菜单出现的项目。所谓上下文菜单，就是在编辑器内容出现的右键关联菜单。在当鼠标在链接上时是编辑链接，当鼠标在表格上时是编辑表格。菜单可根据不同的环境出现不同的内容。

其值为任何已注册的菜单项，允许使用“|”作为分隔。

**取值：String**

**默认：link image imagetools table spellchecker**

```js
  contextmenu: "bold copy "
```

### contextmenu_never_use_native

  在编辑器中屏蔽浏览器本身的右键菜单

  警告：此选项可能会导致单击右键时出现意外行为。

  > 译者：的确很意外，我在5.0的源码中查找该配置选项，竟然发现源码里居然没有这货！

  **取值：true/false**

  **默认：false**

  ```js
 contextmenu_never_use_native: true
  ```

  ### custom_ui_selector

  此选项可指定某些元素成为编辑器的一部分，当焦点移动到此选择器匹配的元素上时，不会触发编辑器的blur事件。

  **取值：String**

  ```js
  custom_ui_selector: '.my-custom-button'
  ...
  <textarea id="textarea1"></textarea>
  <button class="my-custom-button">Button</button>
  ```

  ### draggable_modal（模态窗口允许拖动）

  5.0.13新增。

  为tinymceUI的模态窗口添加拖动模式。默认是关闭的。

  **取值：true/false**

  **默认：false**

  ```js
  draggable_modal: true
  ```

  ### elementpath（隐藏底栏的元素路径）

  设为false时，可隐藏底栏的元素路径

  **取值：true/false**

  **默认：true**

  ```js
elementpath: false
  ```

  ### event_root

  当编辑器使用内联模式（inline）时，使用此配置可指定一个根节点，编辑器事件只在该根节点下与selector匹配的DOM中响应。

  **取值：String**

  上面说的比较难懂，看个例子：

  ```js
inline: true,
event_root: '#root',
......
  <div class="editor" >TinyMCE示例</div>
<div id="root"><div class="editor" >TinyMCE示例</div></div>
  ```

  ▲通过init将两个.editor创建为编辑器实例，但当鼠标分别点击两个div时，只有在#root内的div才会出现菜单和工具栏。

  ### fixed_toolbar_container

  5.0.2新增

  指定工具栏在某一容器顶部固定。

**取值：String （css选择器）**

```js
inline: true,
fixed_toolbar_container: '#mytoolbar'
```

  ### icons（为tinymce附加新图标集合）

  5.0.5新增。

  该选项允许你扩展tinymce的默认图标库，新附加的图标具有更高的优先级，可以部分替换当前系统内的图标，实现tinymce的局部定制化。

  该参数的实现与加载方式类似。不是指定图标的js文件，而是指定图标文件所在的文件夹。

  tinymce将在初始化时从 《tinymce根目录/icons/该参数值/icons.js》中加载图标。

  所以该值类似于主题名称。

  **取值：String**

  ```js
icons: 'custom'      // baseURL/icons/custom/icons.js
  ```

  ### icons_url（附加新图标的url路径）

  5.0.6新增。

  通过一个url来指定图标js文件的所在位置。

  但设置该参数以后，还需要再用icons一次，这和引入外部语言包的用法一致。

  **取值：String**

  ```js
icons_url: '/icons/custom/icons.js', // load icon pack
icons: 'custom'      // baseURL/icons/custom/icons.js
  ```

  ### inline（内联模式）

  开启内联模式，详见：[内联模式](http://tinymce.ax-z.cn/general/use-tinymce-inline.php)。

  **取值：true/false**

  **默认：false**

  ### width&height（设置宽高）

  如参数只提供数字，则默认单位为像素（px），如提供了单位，TinyMCE会以css模式去理解它。单位支持px/%/em/vh/vw

  **取值：Number或String**

  **默认：width默认是100%，height通常为200px。**

  ```js
width: 300,
height: 300,
  ```

  ### max_width&max_height（最大宽高）

  ### min_width&min_height（最小宽高）

  根据autoresize插件启用与否，max_height和min_height会存在两种不同的行为：

  - 不存在autoresize插件（默认）：控制的是用户通过编辑器右下角控件可拖拽的最大最小高度。
- 使用autoresize插件：控制编辑器自动伸缩的最大最小高度。
  
> 注：此参数默认设置的是可编辑区域，而不是整个编辑器

**取值：Number / String**

### menu（自定义菜单）

指定菜单栏及下拉菜单上放置的项目（其还提供创建自定义标题菜单的方法）。

其值是一个包含菜单项目的对象，由 菜单项:{标题,子菜单项} 组成。

**取值：Object**

```js
menu: {
        file: {title: '文件', items: 'newdocument'},
        edit: {title: '编辑', items: 'undo redo | cut copy paste pastetext | selectall'},
        insert: {title: '插入', items: 'link media | template hr'},
        view: {title: '查看', items: 'visualaid'},
        format: {title: '格式', items: 'bold italic underline strikethrough superscript subscript | formats | removeformat'},
        table: {title: '表格', items: 'inserttable tableprops deletetable | cell row column'},
        tools: {title: '工具', items: 'spellchecker code'}
      }
```

  自定义菜单项：

```js

    menubar: 'my1',
    menu: {
          my1: {title: '我的菜单', items: 'copy paste' }
    }
```

> 如果只需要指定哪些一级菜单显示，或调整菜单顺序，可使用menubar。

  ### menubar（1级菜单）

  指定哪些一级菜单显示，或调整菜单顺序。

  **取值：String**

  ```js
menubar: 'file edit insert view format table tools help'
  ```

> 如要隐藏菜单栏，将其值设为false即可。

  ### preview_styles（菜单[格式]预览样式）

  

  **取值：false / String**

  **默认：font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow**

```js
preview_styles: false,
```

  ### quickbars_insert_toolbar（[插入]快捷工具栏）

  ### quickbars_selection_toolbar（[选择]快捷工具栏）

  在编辑器内容区，光标插入（回车）或选择时，在光标位置出现的快捷工具栏。

  可使用任何在工具栏（toolbar）中可用的项目。

  使用该选项必须先启用quickbars插件。

  **取值：String**

**默认：见下方示例**

```js
inline: true,
plugins: 'quickbars',
quickbars_insert_toolbar: 'quickimage quicktable',
quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote',
```

  ### removed_menuitems（移除某菜单项）

  用于从下拉菜单中移除某些菜单项。当配合menu来创建动态菜单时此选项可能有用。

  **取值：String**

  ```js
removed_menuitems: 'undo, redo',
  ```

### resize（调整编辑器大小工具）

在编辑器右下角有一个可以拖动的标记，鼠标按住它可以改变编辑器的大小。默认resize: true

可选值为：true（仅允许改变高度）, false（完全不让你动）, 'both'（宽高都能改变，注意引号）

  如要禁止用户拖动改变编辑器大小，设为false即可。

  **取值：true/false/'both'**

  **默认：true**

  ```js
resize: 'both',
  ```

  ### skin_url（可引入外部皮肤）

 为TinyMCE指定皮肤，v5默认皮肤是“oxide”，它包含浅色版本和深色版本。深色版本名为“oxide-dark”，通过切换skin_url路径引入不同版本。

也可以引入外部皮肤，只需通过设置路径。

  **取值：String**

  ```js
 skin_url: './static/skins/ui/oxide-dark' //深色
 skin_url: './static/skins/ui/oxide'      //浅色
  ```

  ### statusbar（显示隐藏状态栏）

  状态栏指的是编辑器最底下、左侧显示dom信息、右侧显示Tiny版权链接和调整大小的那一条。默认是显示的，设为false可将其隐藏。

  **取值：ture/false**

  **默认：ture**

  ```js
statusbar: false
  ```

  ### toolbar（自定义工具栏）

  指定工具栏上显示的按钮，使用空格分隔，用 | 分组。

  如要隐藏菜单栏，将其值设为false即可。

  **取值：String / Array / false**

  ```js
toolbar: 'undo redo | styleselect | bold italic ',
  ```

  数组写法

  ```js
toolbar: [ //数组写法
          'undo redo | styleselect | bold italic | link image',
          'alignleft aligncenter alignright'
      ]
  ```

toolbar(n)写法

```js
toolbar1: 'undo redo | styleselect | bold italic | link image',
toolbar2: 'alignleft aligncenter alignright',
```

  ### toolbar_mode（工具栏模式）

  自5.2.0起用于替代上面的toolbar_drawer。

  默认wrap不收缩工具栏，取值为floating或sliding时，将第一行放不下的工具栏按钮缩进抽屉（3个点的图标）里，scrolling则采用移动端的横线滚动方式。

  该参数提供三种模式，通过下面的例子体验下三种模式的不同吧。

  **取值：floating / sliding / scrolling / wrap**

 

  ### toolbar_location（工具栏位置，可实现在底部）

  5.2新增。

  选择工具栏上下位置。

  **取值：'' / 'bottom'**

  **取值：'auto' （5.3.0新增）**

  **默认：''（5.3.0默认：'auto'）**

  auto参数作用：如果顶部没有空间，则工具栏和菜单栏将显示在底部（即行为同bottom）。

  ### toolbar_groups（工具栏分组）

  5.2新增。

  该参数将颠覆现有的工具栏布局模式。

  它的作用是，自定义一个新的工具栏按钮，当点击这个新的按钮时，出现横向的下拉按钮集合。

  > 启用toolbar_groups会令toolbar_mode参数默认为floating，所以无需指定toolbar_mode。如果手动指定toolbar_mode为别的值，则自定义的工具栏分组全都不显示，并在console里给出错误提示。

  ```js
    menubar: false,
    toolbar: 'formatting | alignment',
      toolbar_groups: {
        formatting: {
              text: '文字格式',
            tooltip: 'Formatting',
              items: 'bold italic underline | superscript subscript',
        },
          alignment: {
            icon: 'align-left',
              tooltip: 'alignment',
            items: 'alignleft aligncenter alignright alignjustify',
          },
    }
  ```

如上代码，我们配置了两个名为“formatting”和“alignment”新工具栏按钮，并分别配置了新按钮的几个参数。

- text / icon ：二者任选其一，作为新按钮在工具栏上展示的UI。
  - tooltip：鼠标悬停时的工具栏提示，可不写。
- items：点击后出现的多个按钮，参数写法和toolbar参数是一模一样的，也支持字符串和数组两种形式。
  
> 5.2新增这东西，算是变相解决了日益增长的按钮数量和屏幕像素始终有限的矛盾，PC端还好些，手机端用途将非常大。。

### toolbar_sticky（粘性工具栏）

  5.1新增。

  粘性工具栏（或停靠工具栏），在向下滚动网页直到不再可见编辑器时，将工具栏和菜单停靠在屏幕顶部。

  **取值：true / false**

  **默认：false**

## 配置Tinymce编辑区内的内容外观：

- body_class&body_id（为编辑区body指定类或id）
- content_css（为编辑区指定css文件）
- content_css_cors（指定css文件跨域开关）
- content_style（直接为编辑区编写css）
- inline_boundaries（内置样式开关）
- inline_boundaries_selector（使用内置样式的元素）
- placeholder（占位文本）
- text_color（颜色工具相关配置）
- visual（网格线开关）
- visual_anchor_class（为编辑区锚点指定class）
- visual_table_class（为编辑区表格指定class）

### body_class&body_id（为编辑区body指定类或id）

在经典模式，为编辑区iframe内生成的body设置一个class或id。

该class或id可用于设置css样式配合下面的content_css使用。

**取值：String**

> body_class: 'my_class'

> body_class: 'my_id'

可为多个实例分别指定class和id

> body_class: 'elm1=my_class, elm2=my_class'

> body_id: 'elm1=my_id, elm2=my_id2'

### content_css（为编辑区指定css文件）

如果你希望在经典模式中，编辑区也可以有与周围相同的样式，此选项可以帮你实现。

引入一个css文件，实现编辑区css自定义。

通常配合body_class&body_id使用。

**取值：String**

```js
 content_css: "./static/skins/content/default/content.min.css"  //默认
 content_css: "./static/skins/content/dark/content.min.css"     //深色模式
```



注意：如果使用相对路径，相对的是当前调用TinyMCE的html，而不是TinyMCE的根目录。

也可以引入多个css文件：

> content_css : 'mycontent.css,mycontent2.css'

> content_css : ['mycontent.css', 'mycontent2.css']

### content_css_cors

设为true，则content_css可以跨域引入css文件。

**取值：true/false**

### content_style（直接为编辑区编写css）

在此选项内编写的css将直接注入到编辑器创建的iframe内部（在head内创建style），其创建的样式不会与内容一起被提交，可以放心使用。

**取值：String**

```js
content_style: "p {margin: 10px; border: 5px solid red; padding: 3px}"
```

### inline_boundaries（内置样式开关）

为保证编辑器输出相对干净的代码，主题内会定义一些样式来实现某些功能。

如不想使用内置样式，设为false即可。

**取值：true/false**

**默认：true**

> inline_boundaries : false

### inline_boundaries_selector（使用内置样式的元素）

可通过它来指定inline_boundaries可应用于哪些元素。默认：a[href],code。也可以加入其它内联元素，如：b,strong,i,em。

如果你设置了除默认那俩的其它元素，还需要去定义他们的样式，设置样式的方法可参考[content_css部分](http://tinymce.ax-z.cn/configure/content-appearance.php#content_css)。

**取值：String**

**默认：a[href],code**

> inline_boundaries_selector: 'a[href],code,b,i,strong,em'

### placeholder（占位文本）

5.2.0新增。

Tiny终于开始支持placeholder了，作用是编辑器没内容时，显示一段默认文字。

**取值：String**

```js
placeholder: '在这里输入文字',
```

Copy

### text_color（颜色工具相关配置）

颜色工具包含 文字颜色/背景色 两个按钮。他们又包含一个颜色选择列表和一个调色盘。

**取值：String**

```js
toolbar: 'forecolor backcolor',
```

#### color_cols（颜色选择列表的列数）

指定颜色网格的列数。行数是根据定义的颜色数除以列数计算的。

textcolor_cols和textcolor_rows在TinyMCE 5.0中已被移除。

**取值：Number**

> color_cols: 4

> 注意：该值必须为Number，string是无效的。

#### color_map（自定义颜色选择列表的颜色）

自定义颜色网格中的颜色及颜色名称，该值为一个数组（后面会有例子）。

**取值：Array**

#### custom_colors（调色盘开关）

该设置可禁用颜色工具的调色盘。

**取值：true/false**

**默认：true**

> custom_colors: false

#### 这三个配置的例子

```js
    color_cols: 7,
    custom_colors: false,
    color_map: [
            "000000", "Black",
            "993300", "Burnt orange",
            "333300", "Dark olive",
            "003300", "Dark green",
            "003366", "Dark azure",
            "000080", "Navy Blue",
            "333399", "Indigo",
            "333333", "Very dark gray",
            "800000", "Maroon",
        ]
```

### visual（网格线开关）

用于网格线的开关。

网格线的作用是，如果表格border为0，TinyMCE会在编辑区内的表格周围添加虚线框作为视觉辅助。（so为啥大家都把它汉化成网格线？）

**取值：true/false**

**默认值：true**

> visual: false

### visual_anchor_class（为编辑区锚点指定class）

为编辑区锚点指定class。

**取值：String**

> visual_anchor_class: 'my-custom-class'

### visual_table_class（为编辑区表格指定class）

为编辑区表格指定class。

**取值：String**

> visual_table_class: 'my-custom-class'

## 更改编辑器处理内容HTML的方式，创建干净易读、可维护的代码：

- allow_conditional_comments（允许条件注释）
- allow_html_in_named_anchor（允许name锚点）
- allow_unsafe_link_target（允许不安全的目标链接）
- convert_fonts_to_spans（font标签转span）
- custom_elements（自定义元素）
- doctype
- element_format（元素为XHTML/HTML）
- encoding（转XML）
- entities（实体）
- entity_encoding（实体类型）
- fix_list_elements（修复列表元素）
- forced_root_block（强制根节点块元素）
- forced_root_block_attrs（为“强制根节点块元素”添加属性）
- invalid_elements（无效元素）
- invalid_styles（无效样式）
- keep_styles（保持样式）
- protect（代码保护）
- remove_trailing_brs（删除最尾的br）
- schema（模式）
- valid_children（有效子元素）
- valid_classes（有效class）
- valid_styles（有效样式）
- valid_elements（有效元素）
- extended_valid_elements（扩展有效元素）

### allow_conditional_comments（允许条件注释）

代码内是否保留条件注释，默认不保留。

条件注释被用于针对IE各个版本做不同的处理，但微软IE10及以上版本已经不再支持条件注释，所以，此选项多用于兼容老旧浏览器（IE9以下）。

**取值：true/false**

**默认：false**

> allow_conditional_comments: true

### allow_html_in_named_anchor（允许name锚点）

named anchor就是用name来做标记的锚点，如：<a name="tagId"></a>

这种写法在很早就不推荐使用了，如要实现锚点，请用id="tagId"来实现。

**取值：true/false**

**默认：false**

> allow_html_in_named_anchor: true

### allow_unsafe_link_target（允许不安全的目标链接）

默认下，所有target="_blank"的链接都会加入一个rel="noopener"（禁止该链接打开的子窗口访问window.opener）。这样做是出于安全考虑的，可以防止钓鱼网站利用window.opener读取父窗口信息。

强烈建议该值保持默认，除非你确信将其设为true不会对安全造成影响。

**取值：true/false**

**默认：false**

> allow_unsafe_link_target: true

### convert_fonts_to_spans（font标签转span）

font标签早就被弃用了，我实在想不出该选项还健在的意义……设为false，则代码中的font标签会被保留。

**取值：true/false**

**默认：true**

> convert_fonts_to_spans: false

### custom_elements（自定义元素）

该设置允许你自定义HTML元素，例如在不支持html5的页面中加入header,footer等支持。这样就可以在代码中处理非html元素。

如果希望元素是类span的内联元素而不是类div的块元素，在自定义标记前加英文符号的~。

**取值：String**

```js
extended_valid_elements : 'mycustomblock[id],mycustominline',
custom_elements : 'mycustomblock,~mycustominline',
```

### doctype

设置编辑区iframe的doctype。

修改doctype可以改变对html的解析规则，除非你理解修改它的意义，否则可能会导致布局异常等情况。doctype用法可参考[w3c关于doctype的介绍](https://www.w3.org/wiki/Doctypes_and_markup_styles)。

**取值：String**

```js
doctype: '<!DOCTYPE html>',
```

### element_format（元素为XHTML/HTML）

设置元素是XHTML模式还是HTML模式。如果设置成HTML模式，则<br />将被更改为<br>。

**取值：xhtml/html**

**默认：xhtml**

> element_format: 'html'

### encoding（转XML）

如设置此选项为xml，则提交TinyMCE编辑区的内容时，内容将自动转换成XML字符串，而不是转以后的内容。字符<,>,&,",都将是非转义的。

**默认：该选项为禁用**

**取值：String**

> encoding: 'xml'

### entities（实体）

此选项包含一个将被转义的实体（entity）列表，奇数项是字符code，偶数项是名称。

基本实体<,>,&,',",将始终被转换成其对应的实体。但单引号和双引号只在属性值和被<,>包裹中的文本节点内编码。

此设置仅对高于\u007E (unicode为126)的字符进行编码。

**取值：String**

```js
entities : '160,nbsp,162,cent,8364,euro,163,pound',
```

### entity_encoding（实体类型）

此选项控制TinyMCE如何处理实体/字符的转换方式。

基本实体<,>,&,',",将始终被转换成其对应的实体。但单引号和双引号只在属性值和被<,>包裹中的文本节点内编码。

此设置仅对高于\u007E (unicode为126)的字符进行编码。

| 名称    | 说明                                                         |
| ------- | ------------------------------------------------------------ |
| named   | 字符将根据前面的entities配置来转换实体。例如将空格转换成&nbsp; |
| numeric | 字符将转换为数字实体。如空格将编码为&#160;                   |
| raw     | 所有字符都将以非实体形式保存，除了XML默认实体<,>,&,"         |

**取值：String**

**默认：named**

```js
entity_encoding : "named",
```

### fix_list_elements（修复列表元素）

用于修复列表元素（UL、OL）中非规范的写法和错误。一般是不合规的嵌套或缺失。此选项默认情况下是没有开启的，如果开启可能会导致一些问题。

例如：

```html
<ol>
    <li>a</li>
    <ol>
        <li>b</li>
        <li>c</li>
    </ol>
    <li>e</li>
</ol>
```

将会被修复为：

```html
<ol>
    <li>a<ol>
            <li>b</li>
            <li>c</li>
        </ol>
    </li>
    <li>e</li>
</ol>
```

**取值：true/false**

**默认：false**

```js
fix_list_elements : true,
```

### forced_root_block（强制根节点块元素）

此选项的开启能令所有非块元素或文本节点都被块元素包裹。例如：

<span>文字</span>将会自动在外层增加一个P标签：<p><span>文字</span></p>

如禁用此选项，则输入时将永远不会生成P标签或自动生成br，仅当按shift+回车时生成P标签。

> 提醒：如果不使用P标签，可能会削弱编辑器的功能。（原话是这么说的，具体会怎么削弱没有测试。）

**取值：String/false**

**默认：p**

```js
forced_root_block : 'p'
```

Copy

### forced_root_block_attrs（为“强制根节点块元素”添加属性）

为“forced_root_block”指定的块元素添加属性

**取值：Object**

```js
forced_root_block_attrs: {
        'class': 'myclass',
        'data-something': 'my data',
    }
```

### invalid_elements（无效元素）

当编辑器清理代码时需要删除掉的元素。此选项是一个字符串，多个元素用英文逗号来分隔。

**取值：String**

```js
invalid_elements : 'strong,em',
```

### invalid_styles（无效样式）

此选项用于限制元素的样式。有两种格式：

- String：可简单的定义全局无效的样式。
- Object：更复杂灵活的定义方式，可为某个元素单独指定无效的样式。

#### 简单实现全局定义

**取值：String**

```js
invalid_styles: 'color font-size'
```

#### 特定元素定义

**取值：Object**

```js
invalid_styles: {
        '*': 'color font-size', //全局无效样式
        'a': 'background', // 链接禁用背景样式
    }
```

### keep_styles（保持样式）

当用户按下回车时，新一行将保持当前文本的样式。默认开启。

**取值：true/false**

**默认：true**

```js
keep_styles: false
```

### protect（代码保护）

保护指定的内容不可被编辑器编辑。

该选项可接受一个数组，数组值为正则表达式构成，与正则相匹配的内容将不会出现在编辑区内。（被隐藏起来，HTML源码中依然存在）

**取值：Array**

```js
protect:[
        /\<\/?(if|endif)\>/g, //<if> & </endif>
        /\<xsl\:[^>]+\>/g,    //<xsl:...>
        /<\?php.*?\?>/g,      //php代码
    ]
```

### remove_trailing_brs（删除最尾的br）

删除块元素末尾的<br>。

gecko和webkit浏览器会注入这些元素使插入符号放在空的块元素中。此功能会尝试删除这些元素，并保留用户放置的标签。

**取值：true/false**

**默认：true**

```js
remove_trailing_brs: false
```

### schema（模式）

该选项可指定生成的代码是html4还是html5标准。

该值默认是html5，可选值还有：html4、html5-strict。

html5模式是完整的HTML5规范，它兼容旧的HTML4。html5-strict是HTML5的严格模式，它只允许HTML5规范的元素，不包括已经被移除标准的元素。html4模式则是包括完整的HTML4过渡规范。在需要兼容老旧浏览器时，可能会用到该选项。



**取值：html5/html4/html5-strict**

**默认：html5**

```js
schema: 'html5'
```

### valid_children（有效子元素）

控制指定的父元素中可用存在哪些子元素。

默认TinyMCE会删除或拆分任何非HTML5内容或HTML过渡内容。例如，P不能是另一个P的子元素。此选项的默认值是由当前[schema（模式）](http://tinymce.ax-z.cn/configure/content-filtering.php#schema)控制的。

此选项的语法是：父元素[子元素|子元素|子元素],父元素[子元素|子元素]

父元素前可用“+”或“-”代表从默认中追加或从默认中删除。

**取值：String**

下面这个示例将展示该选项的用法：

```js
valid_children : '+body[style],-body[div],p[strong|a|#text]',
```

> +body[style]：表示追加style为body的子元素

> -body[div]：表示将div从body的子元素中删除

> p[strong|a|#text]：表示强制p的子元素只包含strong、a和纯文本。

### valid_classes（有效class）

限制元素所能拥有的class值。此选项有两种格式

- String：可简单的定义全局有效的class。
- Object：更复杂灵活的定义方式，可为某个元素单独指定有效的class。

#### 简单实现全局定义

**取值：String**

```js
valid_classes: 'class1 class2 class3'
```

#### 特定元素定义

**取值：Object**

```js
valid_classes: {
        '*': 'class1 class2 class3', //全局可以拥有的class值
        'a': 'class4 class5', // 链接可以拥有的class值
    }
```

Copy

### valid_styles（有效样式）

可为每个元素指定允许使用的样式，只有特定的样式才能在style属性中存在，写法同上。

**取值：Object**

```js
valid_styles: {
        '*': 'border,font-size',
        'div': 'width,height'
    }
```

### valid_elements（有效元素）

你可以用它来定义编辑器只保留哪些元素，使用此功能可限制用户提交内容的格式，如留言板，论坛互动等场景，使用该选项可以返回HTML的一个子集。

此选项是一个以英文逗号分隔的元素列表字符串。每一个元素都可指定其允许的属性。该选项的默认规则集是配置选项“schema”的值指定的规范，默认是HTML5。

#### 该配置支持的规则控制符

| 名称       | 说明                                                         |
| ---------- | ------------------------------------------------------------ |
| @          | 为在其后的元素指定此规则。如@[attr1\|attr2]将为所有元素启用属性attr1、attr2。但element1,@[attr1\|attr2],element2,element3则是为element2,element3启用属性attr1、attr2。如在extended_valid_elements中使用此规则，则仅对扩展的元素有效。 |
| ,          | 用于元素间的分隔                                             |
| /          | 分隔同一意义的元素，第一个出现的为有效元素，其它将被第一个替换。如strong和b均为加粗，strong/b表示保留strong将所有b转为strong。 |
| \|         | 用于属性间的分隔                                             |
| [属性]     | 为元素定义属性                                               |
| !属性      | 该属性为元素必须拥有的属性，如果元素没有该属性，则会被编辑器舍弃。如a[!href]表示所有不包含href属性的a将全部舍弃。 |
| 属性=值    | 为属性设置默认值，如：a[target=_blank]                       |
| 属性:值    | 将属性强制指定为指定值，如：border:0                         |
| 属性<值?值 | 验证属性值是否为<后的选项，每个选项用英文?分隔，如：arget<_blank?_self |
| +          | 不存在子节点就将其打开，如：+a                               |
| -          | 移除空元素如：-strong                                        |
| #          | 如果该元素是空的，就填充&nbsp;如：#p                         |
| !          | 删除没有属性的元素，但其内部文本不会被删除。                 |

注：通配符*,+,?可用于元素或属性名称的匹配。

#### 特殊变量

| 名称   | 说明                             |
| ------ | -------------------------------- |
| {$uid} | 生成唯一ID。例如，“p[id:$uid]”。 |

使用\*[\*]可表示所有元素的所有属性，通常在配置invalid_elements时使用。

**取值：String**

```js
valid_elements : 'a[href|target=_blank],strong/b,div[align],br'
```

以上配置告诉TinyMCE只保留a、strong、div、br这几个元素，其它全部舍弃。同时将b元素转换为strong元素，将a的target的默认值设为_blank并保留href属性，保留div的align属性。

> 注意：不要在配置中大量罗列规则以存在的属性，这有可能导致TinyMCE在其它元素重复输出该属性。

### extended_valid_elements（扩展有效元素）

该选项与valid_elements非常相似，区别是该选项被用于扩展现有规则集，而valid_elements是缩小默认规则集。

默认规则集是由schema决定的。

**取值：String**

```js
extended_valid_elements : 'img[class|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name]'
```

该示例将替换现有的img规则（包括全局元素规则）



## 有关格式工具的相关配置：

- formats（格式自定义*）
- formats_empty_lines
- indentation（缩进）
- indent_use_margin（使用margin缩进）

- [indent_use_margin（使用margin缩进）](http://tinymce.ax-z.cn/configure/content-formatting.php#indent_use_margin)

### formats（格式自定义）

该选项可用于覆盖编辑器默认格式，添加自定义格式。

例如，当用户点击编辑器工具栏的“加粗”工具时，如果使用该选项定义了该行为，则TinyMCE会按照定义的行为去执行操作。

#### 内置格式

TinyMCE允许重写的内置格式，如下表所示：

- alignleft
- aligncenter
- alignright
- alignjustify
- bold
- italic
- underline
- strikethrough
- forecolor
- hilitecolor
- fontname
- fontsize
- blockquote
- removeformat
- p
- h1, h2, h3, h4, h5, h6
- div
- address
- pre
- div
- code
- dt, dd
- samp

一些内置格式fontsize、fontname、forecolor、hilitecolor，它们的值使用变量%value代替。此变量将替换为用户选择的值。

#### 格式类型

- block 块操作
- inline 内联操作
- selector 选择器操作

##### block 块操作

更改块元素的默认行为，也就是当前焦点外围标签整体变化的行为。

以下示例改写了默认格式h1，也就是当你使用工具栏指定当前段落为：“标题1”时，原本的默认行为是将当前焦点外围标签变为h1，但现在是将外围标签变为p，并追加一个class值"class1"。

```js
formats:{
        h1:{block:'p',classes:'class1'}
}
```

##### inline 内联操作

以下示例改写了加粗的默认行为，默认行为是用strong包裹当前选中的文本，现在则是用span包裹，并追加一个class值"class1"。

```js
formats:{
        bold: { inline: 'span', classes: 'class1' }
 }
```

##### selector 选择器操作

可使用css3选择器查找选中内容内的元素。它仅将当前格式应用于特定的元素，例如表的奇数行。

```js
formats:{
        bold: { selector: 'strong', styles: {'color':'red'} }
    }
```

#### 格式参数

##### classes

用空格分隔的类列表，追加到选中或新创建的内联或块元素。

**类型：String**

> 例：bold: { inline: 'span', classes: 'class1' }

##### styles

包含名称/值的一个对象。将自定义css样式置入到选中内容中，如上例的加粗变红。

**类型：Object**

> 例：bold: { inline: 'strong', styles: {'color':'red'} }

##### attributes

包含名称/值的一个对象。给html标签添加自定义属性。

**类型：Object**

> 例：bold: { inline: 'strong', attributes: { 'data-style': 'bold' } }

##### exact

可设值为：true，此选项将禁用样式合并功能，用于解决一些css继承问题，例如下划线、删除线。默认为false。

**类型：boolean**

> 例：underline: { inline: 'span', styles: { 'text-decoration': 'underline' }, exact: true } }

##### wrapper

指定当前格式是块元素，例如div或blockquote。

**类型：boolean**

**默认：false**

##### remove

当执行格式操作时，对该元素进行的清理行为。其值可以是：

- none：仅从元素中删除样式、类或属性，不会删除该元素。
- empty：如果元素没有样式、类或属性，则删除该元素。
- all：删除该元素。

> 虽然remove多用在removeformat工具上，但TinyMCE并不限制你将其用在其它地方。

```js
extended_valid_elements: 'span[*]', // Needed to retain spans without attributes these are removed by default
formats: {
        removeformat: [
            // Configures `clear formatting` to remove specified elements regardless of it's attributes
            { selector: 'b,strong,em,i,font,u,strike', remove: 'all' },
            // Configures `clear formatting` to remove the class red from spans and if the element then becomes empty i.e has no attributes it gets removed
            { selector: 'span', classes: 'red', remove: 'empty' },
            // Configures `clear formatting` to remove the class green from spans and if the element then becomes empty it's left intact
            { selector: 'span', classes: 'green', remove: 'none' }
        ],
    }
```

##### block_expand

此选项控制操作选择是否应向上扩展到最接近的匹配块元素。在配置removeformat删除块元素时，这可能很有用。如果选择开始位于匹配块元素的开头部分，那么也将包含该块元素。如果选择的结尾位于匹配块元素的末尾部分，那么也将包含该父元素。

因此，如果在此html内容中选择是从a到b，<h1><b>[a</b></h1><p>b]</p>则即使h1不是实际选择的一部分，也将删除h1。

**取值：true/false**

**默认：false**

##### deep

当设为true时，尝试在选择范围内深度清除当前样式。默认为false，当尝试从类中除去某个类时，可能会存在无法删除的情况。

**取值：true/false**

**默认：false**

比较难理解，上个DEMO试一下：

```js
plugins:'code',
    style_formats: [
        { title: 'deep false', inline: 'span', classes: 'myclass1', deep: false },
        { title: 'deep true', inline: 'span', classes: 'myclass2', deep: true }
    ],
    content_style: '.myclass1{color:red;} .myclass2{font-weight:700;}',
```

##### 格式选项的部分示例：

这个例子覆盖了一些内置格式，告诉TinyMCE使用指定的class而不是创建内联样式。最后还创建了一个自定义格式，它生成一个带title属性且为红色的h1。

```js
formats: {
        alignleft: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'left' },
        aligncenter: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'center' },
        alignright: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'right' },
        alignjustify: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'full' },
        bold: { inline: 'span', classes: 'bold' },
        italic: { inline: 'span', classes: 'italic' },
        underline: { inline: 'span', classes: 'underline', exact: true },
        strikethrough: { inline: 'del' },
        forecolor: { inline: 'span', classes: 'forecolor', styles: { color: '%value' } },
        hilitecolor: { inline: 'span', classes: 'hilitecolor', styles: { backgroundColor: '%value' } },
        custom_format: { block: 'h1', attributes: { title: 'Header' }, styles: { color: 'red' } }
    }
```

##### 自定义格式API

```js
<Tinymce-rich ref="rich" :options="options" width="auto" />
 ...
(注：需要组件加载完成)
//应用一个自定义格式
this.$refs.myRich.tinymce.activeEditor.formatter.apply('bold');
//移除一个自定义格式
this.$refs.myRich.tinymce.activeEditor.formatter.remove('bold');

//注册格式时可以包含变量，在应用时给该变量赋值
//注册一个自定义格式，其中包含变量
this.$refs.myRich.tinymce.activeEditor.formatter.register('custom_format', { inline: 'span', styles: { color: '%value' } });
//应用自定义格式，给变量赋值
this.$refs.myRich.tinymce.activeEditor.formatter.apply('custom_format', { value: 'red' });
```

##### removeformat（参考上面remove的例子）

### indentation（缩进）

设置缩进工具的缩进大小。

**取值：String**

**默认：'30px'**

注意：此缩进并不是首行缩进text-indent，而是padding-left

> indentation : '10px'

### indent_use_margin（使用margin缩进）

默认缩进使用padding，该选项为true时会使用margin代替padding。

**取值：true/false**

**默认：false**

> indent_use_margin : true

## 配置选项列表：

- automatic_uploads
- file_picker_callback（文件上传回调）
- file_picker_types（文件选择器的使用场景）
- images_dataimg_filter
- images_reuse_filename
- images_upload_url（上传实现的URL）
- images_upload_base_path（图片地址基本目录）
- images_upload_credentials
- images_upload_handler（图片上传自定义实现）

### automatic_uploads

开关使用Data URL/Blob URL插入图片和文件到内容区的方式。例如，图像是使用imagetools插件处理后插入到内容区的，此时图像并未真正上传到服务器，而是以Data URL/Blob URL的方式插入在内容中。

该选项默认是开启的，如禁用，则必须配置images_upload_url，即指定接收图片上传的远程地址，如未指定该配置，则禁用无效。

> 也可使用tinymce自带方法 uploadImages 手动上传。

**取值：true / false**

**默认：true**

```js
tinymce.init({
    selector: '#textarea1',
    automatic_uploads: false,
    images_upload_url: 'postAcceptor.php',
});
```

Copy

### file_picker_callback（文件上传回调）

配置此选项将在图片、媒体、链接对话框中加入上传文件功能

当用户点击上传按钮后，TinyMCE将在你自定义的函数中传递三个参数：

- callback：上传成功后执行的回调函数，此函数是由TinyMCE定义的，它的第一个参数是上传结果，第二个参数可以是一个object，其中定义了要填入对话框中的字段键值。
- value：当前受影响的字段值
- meta：为一个包含指定对话框中其它字段值的对象（meta.filetype是当前对话框的文件类型）

注意：file_picker_callback仅为一个自定义钩子，具体上传功能需要自己实现。

**取值：Function**

该功能的演示请参考：[《简介与入门：上传图片和文件》](http://tinymce.ax-z.cn/general/upload-images.php)中的文件上传部分，里面包含完整的上传代码示例。

### file_picker_types（文件选择器的使用场景）

使用空格或逗号分隔，允许的值包括：file,image和media。该选项需配合file_picker_types使用，未指定的对话框则不会出现文件上传按钮。file对应链接对话框，image对应图片对话框，media对应多媒体对话框。

**类型：String**

**取值：'file image media'**

```js
 file_picker_callback: function(){},
 file_picker_types: 'file image media',
```

Copy

### images_dataimg_filter

5.3.0不推荐使用，并于5.3.2被移除

定义一个自定义过滤器处理base64图像转blobs的逻辑。

该函数的参数是一个DOM对象。

**取值：Function**

```js
images_dataimg_filter: function(img) {
        return img.hasAttribute('internal-blob');
    }
```

### images_reuse_filename

TinyMCE默认会给每个上传的文件生成唯一的文件名。有时候我们不希望这么做，例如，automatic_uploads被开启时，尽管当前图片文件没有变，但使用imagetools插件对图像进行每一次操作都会导致文件上传，并且每次都将使用不同的文件名。

将该配置设为true则可以避免此问题，它将告诉TinyMCE使用图片文件实际的文件名，而不是每次随即生成一个新的。

因为img标签的src属性可能是服务器返回来的任何文件名，该文件名将在下次上传时被使用。

> 译者注：该配置目前仅imagetools插件有用。

**取值：true / false**

**默认：false**

```js
automatic_uploads: true,
images_upload_url: 'postAcceptor.php',
images_reuse_filename: true,
```

### images_upload_url（上传实现的URL）

指定接收上传图片的后端地址。调用editor.uploadImages()或utomatically时如果启用automatic_uploads则会触发该配置。

上传程序应按以下格式返回上传后的文件url：

```js
//json格式
{ "location": "folder/sub-folder/new-location.png" }
```

该功能的演示请参考：[《简介与入门：上传图片和文件》](http://tinymce.ax-z.cn/general/upload-images.php)，里面包含完整的上传代码示例。

**取值：string**

> images_upload_url: 'postAcceptor.php'

### images_upload_base_path（图片地址基本目录）

指定一个基本路径，多用于不同目录结构中，修正上传图片功能返回的图片相对地址。

**取值：string**

> images_upload_base_path: '/some/basepath'

### images_upload_credentials

对images_upload_url中指定的地址调用时是否传递cookie等跨域的凭据。

**取值：true / false**

**默认：false**

> images_upload_credentials: true

### images_upload_handler（图片上传自定义实现）

此选项允许你使用自定义函数代替TinyMCE来处理上传操作。该自定义函数可接受四个参数：

- blobInfo
- 成功回调
- 失败回调
- 上传进度（取值1-100）

如果未使用此配置，TinyMCE将使用ajax每次上传一个图片，并在成功返回结果后调用成功回调函数。

> 此函数将完全接管编辑器的图片上传，你需要在上传成功后执行成功回调函数，参数则为图片URL，也可以在第二个参数加入对话框填充数据对象。

**取值：Function**

以下为自定义上传实现的一个代码示例：

```js
images_upload_handler: function (blobInfo, success, failure, progress) {
        var xhr, formData;
        xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.open('POST', 'postAcceptor.php');

        xhr.upload.onprogress = function(e){
            progress(e.loaded / e.total * 100);
        }

        xhr.onload = function() {
            var json;
            if (xhr.status == 403) {
                failure('HTTP Error: ' + xhr.status, { remove: true });
                return;
            }
            if (xhr.status < 200 || xhr.status >= 300 ) {
                failure('HTTP Error: ' + xhr.status);
                return;
            }
            json = JSON.parse(xhr.responseText);
            if (!json || typeof json.location != 'string') {
                failure('Invalid JSON: ' + xhr.responseText);
                return;
            }
            success(json.location);
        };

        xhr.onerror = function () {
            failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
        }

        formData = new FormData();
        formData.append('file', blobInfo.blob(), blobInfo.filename());
        
        xhr.send(formData);
    }
```

## URL处理配置：

- allow_script_urls（允许链接和图像url使用js）
- convert_urls（自动转换URL）
- document_base_url（设置URL的基本目录）
- relative_urls（相对URL）
- remove_script_host（删除URL的域名部分）
- urlconverter_callback（自定义URL转换逻辑）

### allow_script_urls（允许链接和图像url使用js）

开启此选项则允许href="javascript:alert('hello');"这类代码不会被编辑器过滤掉。出于安全考虑，该选项默认关闭，因为从别处复制来的内容中可能会携带js代码。

**取值：true / false**

**默认：false**

> allow_script_urls: true

### convert_urls（自动转换URL）

关闭此选项，TinyMCE将不会自动处理URL，也就是说，插入的URL原本是什么就是什么，不会自动转换相对或绝对路径，这样会导致内容URL极其混乱。所以，默认此选项是开启的。

**取值：true / false**

**默认：true**

> convert_urls: false

### document_base_url（设置URL的基本目录）

它常与下面的relative_urls配合使用，用于统一内容区URL格式。此参数的值必须是一个URL，且必须以/结尾。



**取值：String（必须以/结尾）**

**默认：当前目录**

> document_base_url : "http://tinymce.ax-z.cn/demo/",

### 如何全局定义URL为相对URL、绝对URL或带域名的URL？

### relative_urls（相对URL）

此设置将把当前域名中的所有URL转换为相对URL。相对位置基于[document_base_url](http://tinymce.ax-z.cn/configure/url-handling.php#document_base_url)的配置。

**取值：true / false**

#### 相对URL

```js
relative_urls : true,
document_base_url : "http://tinymce.ax-z.cn/demo/",
```

结果示例：http://tinymce.ax-z.cn/demo/images/1.jpg 将被转换为 images/1.jpg

#### 绝对URL

```js
relative_urls : false,
remove_script_host : true,
document_base_url : "http://tinymce.ax-z.cn/demo/",
```

结果示例：images/1.jpg 将被转换为 /demo/images/1.jpg

#### 带域名的绝对URL

```js
relative_urls : false,
remove_script_host : false,
document_base_url : "http://tinymce.ax-z.cn/demo/",
```

Copy

结果示例：images/1.jpg 将被转换为 http://tinymce.ax-z.cn/demo/images/1.jpg

### remove_script_host（删除URL的域名部分）

**取值：true / false**

**默认：true**

> remove_script_host: false

例子参见上文。

### urlconverter_callback（自定义URL转换逻辑）

使用自定义的URL转换逻辑处理文档中的URL。

该函数有三个参数：

- url：原始url字符串。
- node：url所在的DOM。
- on_save：该值一直为true
- name：正在设置的属性名。

该函数的返回值应是转换后的URL字符串。

此选项的默认值为TinyMCE内部函数convertURL(url:string, name:string, elm:string):string，有关该函数细节需参见文档关于API的部分

**取值：Function**

```js
function myCustomURLConverter(url, node, on_save, name) {
    url = url.substring(3);
    return url;
}
...
urlconverter_callback : 'myCustomURLConverter',

```

Copy

### anchor_top

### anchor_bottom

不知道干嘛用的。

**取值：string / flase**

**默认：anchor_top:'#top' , anchor_bottom:'#bottom'**

## 其它配置

- br_in_pre（pre内回车行为）
- custom_undo_redo_levels（撤销次数）
- end_container_on_empty_block（空元素回车将其拆分）
- nowrap
- object_resizing（调整大小控件开关）
- type_ahead_urls（键入网址判断）

### br_in_pre（pre内回车行为）

控制在pre标签内按回车时的行为。

默认true的行为是：在当前位置插入一个br。

例如：<pre>This is inside <br> a pre tag.</pre>

但如果将其设为false，TinyMCE将在当前位置拆分pre，上例则变为：

<pre>This is inside </pre> <pre>a pre tag.</pre>

**取值：true / false**

**默认：true**

> br_in_pre: false

### custom_undo_redo_levels（撤销次数）

该选项影响撤销、重做工具允许的最大次数，默认为无限次。但对于内存有限的小型系统，定义一个较小的值（例如10）能减少内存开销。

译者注：建议编写较大文章的后台定义此选项，可以设置成30/50什么的，反正没人会撤销那么多次，但内存却实实在在的省下了，况且TinyMCE还有保存草稿的插件。

**取值：Number**

**默认：无限次**

> custom_undo_redo_levels: 10

### end_container_on_empty_block（空元素回车将其拆分）

如果设为true，在空的元素中按下回车键将拆分该元素（这是一个全局配置，也就是所有标签都按此行为执行，暂时没想到该选项的使用场景）。

**取值：true / false**

**默认：false**

> end_container_on_empty_block: true

### nowrap

使可编辑区行为类似于<pre>，并添加水平滚动而不是换行文本。

**取值：true / false**

**默认：false**

> nowrap : true

### object_resizing（调整大小控件开关）

开关图片、表格、媒体对象在编辑区内的调整大小工具。拖拽工具可调整对象大小。

该参数除了传统的布尔值，还允许使用一个css3选择器，被选中的对象才开启调整大小控件。

**取值：true / false / String**

**默认：true**

> object_resizing : false

> object_resizing : 'img'

### typeahead_urls（键入网址判断）

默认开启，当在编辑区内输入网址并回车或按下空格时，TinyMCE会分析出你键入的可能是一个网址，并在自动给其加上链接。

**取值：true / false**

**默认：true**

> typeahead_urls: false

### 更多配置

go [文档资料出处](http://tinymce.ax-z.cn/)