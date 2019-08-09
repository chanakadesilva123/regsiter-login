<template>
  <!-- RegisterUser Module -->
  <v-card width="400" class="mx-auto mt-5">
    <v-card-title class="pb-0">
      <h1 class="display-1">Registration</h1>
    </v-card-title>
    <v-form @submit.prevent="register">
      <v-card-text>
        <v-chip v-if="this.messageText" class="overline mb-5" :color="messageColor">{{messageText}}</v-chip>
        <v-text-field v-model="email" label="Email" prepend-icon="mdi-account-circle" />
        <v-text-field
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <router-link to="/loginuser" class="ma-2" label x-small>I have an account - Login here</router-link>

        <v-spacer></v-spacer>
        <v-btn type="submit" color="info">Register</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      messageText: null,
      messageColor: "success"
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("register", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          //this.$router.push({ name: "dashboard" });
          this.messageText = "Successfully Created. Please login..";
          this.messageColor = "success";
          this.login();
        })
        .catch(err => {
          this.messageColor = "error";
          this.messageText = err.response.data.message;
        });
    },
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password,
          strategy: "local"
        })
        .then(() => {
          this.$router.push({ name: "dashboard" });
        })
        .catch(err => {
          this.error = err.response.data.message;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>