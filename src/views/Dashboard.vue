<template>
  <div>
    <template v-if="!isLoading">
      <MessageCard v-for="message in messages" :key="message._id" :message="message" />
    </template>
    <p v-else>Loading messages</p>
  </div>
</template>
<script>
import axios from "axios";
import MessageCard from "../components/MessageCard";

export default {
  components: { MessageCard },
  data() {
    return {
      isLoading: true,
      messages: []
    };
  },
  created() {
    axios
      .get("//localhost:3030/sms-telstra")
      .then(({ data }) => {
        this.messages = data.data;
        this.isLoading = false;
      })
      .catch(() => {
        this.$router.push({ name: "home" });
      });
  }
};
</script>
