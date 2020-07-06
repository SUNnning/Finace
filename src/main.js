import Vue from 'vue'
import App from './App.vue'
import router from './js/router/index'
import store from './store/index'
import 'amfe-flexible'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
//单是 RTMP 的话不需要第三方库，如果是 HLS 的话需要引入videojs-contrib-hls，看具体情况而定。
import 'videojs-contrib-hls'

Vue.use(VideoPlayer);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
