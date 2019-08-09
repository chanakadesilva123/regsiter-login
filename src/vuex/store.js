import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_TOKEN_DATA(state, userToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
      localStorage.setItem("token", JSON.stringify(userToken));
    },
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
    },
    CLEAR_USER_TOKEN_DATA(state) {
      localStorage.removeItem("user");
      state.user = null;
      axios.defaults.headers.common["Authorization"] = null;
      location.reload;
    }
  },
  actions: {
    register({ commit }, credentials) {
      return axios.post("//localhost:3030/users", credentials).then(response => {
        commit("SET_USER_DATA", response.data);
      });
    },
    updateMyProfile({ commit }, credentials) {
      return axios.patch("//localhost:3030/users/" + credentials._id, credentials).then(response => {
        commit("SET_USER_DATA", response.data);
      });
    },
    login({ commit }, credentials) {
      return axios.post("//localhost:3030/authentication", credentials).then(response => {
        commit("SET_USER_DATA", response.config.data);
        commit("SET_TOKEN_DATA", response.data.accessToken);
      });
    },
    logout({ commit }) {
      commit("CLEAR_USER_TOKEN_DATA");
    }
  },
  getters: {
    loggedIn(state) {
      return !!state.user;
    }
  }
});
