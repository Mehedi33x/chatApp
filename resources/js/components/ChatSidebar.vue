<template>
  <div class="p-3 border-end" style="width: 25%; background: white; height: 100vh; overflow-y: auto;">
    <h5>Chats</h5>
    <input type="text" class="form-control mb-3" placeholder="Search Friends" v-model="searchTerm" />
    <div v-for="user in filteredUsers" :key="user.id" class="mb-2 p-2 border-bottom hover bg-light cursor-pointer"
      @click="selectUser(user)">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatSidebar",
  data() {
    return {
      users: [],
      searchTerm: "",
    };
  },
  emits: ["select-user"],
  computed: {
    filteredUsers() {
      if (!this.searchTerm) return this.users;
      return this.users.filter((user) =>
        user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  methods: {
    selectUser(user) {
      this.$emit("select-user", user);
    },
    async fetchUsers() {
      try {
        const res = await fetch("/api/users", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const allUsers = await res.json();
        const currentUser = JSON.parse(localStorage.getItem("user"));
        this.users = allUsers.filter((user) => user.id !== currentUser.id);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
.hover:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}
</style>
