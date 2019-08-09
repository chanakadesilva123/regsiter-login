<template>
  <v-app id="app">
    <app-nav />
    <v-content>
      <router-view />
    </v-content>
    <v-footer color="primary lighten-1" padless>
      <v-layout justify-center wrap>
        <router-link to="/">
          <v-btn text rounded>Home</v-btn>
        </router-link>
        <router-link to="/dashboard">
          <v-btn text rounded>Dashboard</v-btn>
        </router-link>
        <router-link to="/myprofile">
          <v-btn text rounded>MyProfile</v-btn>
        </router-link>
        <v-flex primary lighten-2 py-4 text-center white--text xs12>
          {{ new Date().getFullYear() }} —
          <strong>Login-Register Dashboard</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import AppNav from "./components/AppNav";

export default {
  components: { AppNav }
};
</script>


