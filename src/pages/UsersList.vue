<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      const response = await fetch("http://localhost:8080/users");
      this.users = await response.json();
    },
  },
};
</script>

<template>
  <div>
    <h1>Users list</h1>

    <table>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>
            <router-link
              :to="{ name: 'users-details', params: { id: user.id } }"
            >
              {{ user.name }}
            </router-link>
          </td>
          <td>{{ user.lastName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
