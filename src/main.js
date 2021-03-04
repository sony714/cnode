// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'


Vue.config.productionTip = false
Vue.prototype.$http = Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.filter('formation', function (str) {
  let oldDate = new Date(str);
  let newDate = new Date();
  var dayNum = "";
  var getTime = (newDate.getTime() - oldDate.getTime()) / 1000;
  //  console.log(getTime); 
  if (getTime < 60 * 5) {
    return "刚刚";
  } else if (getTime >= 60 * 5 && getTime < 60 * 60) {
    return parseInt(getTime / 60) + "分钟前";
  } else if (getTime >= 3600 && getTime < 3600 * 24) {
    return parseInt(getTime / 3600) + "小时前";
  } else if (getTime >= 3600 * 24 && getTime < 3600 * 24 * 30) {
    return parseInt(getTime / 3600 / 24) + "天前";
  } else if (getTime >= 3600 * 24 * 30 && getTime < 3600 * 24 * 30 * 12) {
    return parseInt(getTime / 3600 / 24 / 30) + "个月前";
  } else if (getTime >= 3600 * 24 * 30 * 12) {
    return parseInt(getTime / 3600 / 24 / 30 / 12) + "年前";
  }
})

Vue.filter('tabFormatter', function (post) {
  if (post.good === true) {
    return '精华'
  } else if (post.top === true) {
    return '置顶'
  } else if (post.tab === 'ask') {
    return '问答'
  } else if (post.tab == 'share') {
    return '分享'
  } else {
    return '招聘'
  }
})