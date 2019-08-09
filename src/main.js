import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./vuex/store";
import vuetify from "./plugins/vuetify";
import axios from "axios";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  created() {
    const userString = localStorage.getItem("user");
    const tokenString = localStorage.getItem("token");
    if (userString) {
      const userData = JSON.parse(userString);
      const tokenData = JSON.parse(tokenString);
      this.$store.commit("SET_USER_DATA", userData);
      this.$store.commit("SET_TOKEN_DATA", tokenData);
    }
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401) {
          this.$store.dispatch("logout");
        }
        return Promise.reject(error);
      }
    );
  },
  render: h => h(App)
}).$mount("#app");
