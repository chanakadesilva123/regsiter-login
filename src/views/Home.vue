<template>
  <LoginUser v-if="!loggedIn" />
</template>

<script>
import LoginUser from "../views/LoginUser.vue";
import { authComputed } from "../vuex/helpers.js";
export default {
  components: {
    LoginUser
  },
  data() {
    return {};
  },
  computed: {
    ...authComputed
  }
};
</script>
