<!-- ChatSidebar.vue -->
<template>
  <div class="p-3 border-end" style="width: 25%; background: white; height: 100vh; overflow-y: auto;">
    <h5>Chats</h5>
    <input type="text" class="form-control mb-3" placeholder="Search Friends" />

    <div v-for="user in users" :key="user.id" class="mb-2 p-2 border-bottom hover bg-light cursor-pointer"
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
    };
  },
  emits: ["select-user"],
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
        const currentUserString = localStorage.getItem('user'); // Store this during login
        const currentUser = JSON.parse(currentUserString);
        const currentUserId = currentUser.id;
        console.log(currentUserId);
        

        this.users = allUsers.filter((user) => user.id != currentUserId);
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
