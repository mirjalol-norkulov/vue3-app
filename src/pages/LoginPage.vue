<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.email === "admin@gmail.com" && this.password === "123456") {
        this.$router.push({ name: "dashboard", replace: true });
      }
    },
  },
};
</script>

<template>
  <div>
    <form @submit.prevent="login">
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />

      <button type="submit">Login</button>
    </form>
  </div>
</template>
