import tinymce_rich from './src/components/tinymce_rich/index'
 
import _Vue from 'vue'

Main.install = Vue => {
if (!Vue) {
window.Vue = Vue = _Vue
}
Vue.component(Main.name, Main)
}
export default tinymce_rich;