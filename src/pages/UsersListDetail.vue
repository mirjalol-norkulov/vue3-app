<script>
export default {
  name: "UsersListDetail",
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      const response = await fetch(
        `http://localhost:8080/users/${this.$route.params.id}`
      );

      this.user = await response.json();
    },
  },
};
</script>

<template>
  <div v-if="user">
    <h1>{{ user.name }}</h1>
    <h1>{{ user.lastName }}</h1>
  </div>
  <div v-else>Loading...</div>
</template>
