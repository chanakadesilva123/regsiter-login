<template>
  <!-- Login Module -->
  <v-card width="400" class="mx-auto mt-5">
    <v-card-title class="pb-0">
      <h1 class="display-1">Login</h1>
    </v-card-title>
    <v-form @submit.prevent="login">
      <v-card-text>
        <v-chip v-if="this.error" class="overline mb-5" color="error">{{error}}</v-chip>
        <v-text-field v-model="email" label="Username" prepend-icon="mdi-account-circle" />
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
        <router-link to="/register" class="ma-2" label x-small>Don't have an account - Register here</router-link>
        <v-spacer></v-spacer>
        <v-btn type="submit" color="info">Login</v-btn>
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
      error: null
    };
  },
  methods: {
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