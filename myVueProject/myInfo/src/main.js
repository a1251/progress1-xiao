// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import store from '@/store'
import common from '../static/js/common.js'

Vue.prototype.common = common;
Vue.config.productionTip = false
Vue.use(VueI18n);
Vue.prototype.store = store;
const i18n = new VueI18n({
  locale: store.state.lang,
  messages: {
    'zh': require('./assets/language/zh.json'),
    'en': require('./assets/language/en.json')
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
    // components: {App},
    // template: '<App\>'
    render: (h) => {
      return h(App)
    },
    created(){

    },
    mounted (){
      this.$nextTick(function(){
        this.$router.replace({path: '/gate'}).catch(err => err)
      })
    }
})
