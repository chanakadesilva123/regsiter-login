<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>Login-Register Dashboard</v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if="loggedIn">
      <v-btn text rounded @click="dashboard">Dashboard</v-btn>
      <v-btn text rounded @click="myProfile">My Profile</v-btn>
      <v-btn text rounded @click="logout">Logout</v-btn>
    </div>
    <router-link v-else to="/">
      <v-btn text rounded>Login</v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
import { authComputed } from "../vuex/helpers.js";
export default {
  computed: {
    ...authComputed
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push({ name: "home" });
      });
    },
    myProfile() {
      this.$router.push({ name: "myprofile" });
    },
    dashboard() {
      this.$router.push({ name: "dashboard" });
    }
  }
};
</script>
