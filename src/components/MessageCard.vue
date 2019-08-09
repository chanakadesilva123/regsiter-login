<template>
  <v-card width="400" class="mx-auto mt-5">
    <v-card-title class="pb-0">
      <h5>@{{ message.createdAt }} to {{ message.recipients }}</h5>
    </v-card-title>
    <v-card-text>
      <h4>{{ message.text }}</h4>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "MessageCard",
  props: {
    message: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>