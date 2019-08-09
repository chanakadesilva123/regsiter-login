<template>
  <v-card width="400" class="mx-auto mt-5">
    <v-card-title class="pb-0">
      <h1 class="display-1">My Profile</h1>
    </v-card-title>
    <v-form @submit.prevent="updateMyProfile">
      <v-card-text>
        <v-chip v-if="this.messageText" class="overline mb-5" :color="messageColor">{{messageText}}</v-chip>
        <v-text-field v-model="id" disabled label="ID" prepend-icon="mdi-account-circle" />
        <v-text-field v-model="email" label="Email" prepend-icon="mdi-email-outline" />
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
        <v-btn type="submit" color="info">Update</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script>
import axios from "axios";

export default {
  created() {
    axios
      .get("//localhost:3030/users", {
        params: { email: JSON.parse(this.$store.state.user).email }
      })
      .then(response => {
        if (response.data && response.data.total === 1) {
          this.id = response.data.data[0]._id;
          this.email = response.data.data[0].email;
          this.password = JSON.parse(this.$store.state.user).password;
        } else {
          this.$router.push({ name: "home" });
        }
      })
      .catch(error => {
        console.log("error", error);
      });
  },
  data() {
    return {
      id: "",
      email: "",
      password: "",
      showPassword: false,
      messageText: null,
      messageColor: "success"
    };
  },
  methods: {
    updateMyProfile() {
      this.$store
        .dispatch("updateMyProfile", {
          _id: this.id,
          email: this.email,
          password: this.password
        })
        .then(() => {
          //this.$router.push({ name: "dashboard" });
          this.messageText = "Successfully Updated.";
          this.messageColor = "success";
        })
        .catch(err => {
          this.messageColor = "error";
          this.messageText = err.response.data.message;
        });
    }
  }
};
</script>