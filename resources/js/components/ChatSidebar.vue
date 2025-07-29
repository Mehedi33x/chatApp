<!-- ChatSidebar.vue -->
<script setup>
import { ref, onMounted } from "vue";

const users = ref([]);
const emit = defineEmits(["select-user"]);

onMounted(async () => {
  try {
    const res = await fetch("/api/users", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    users.value = await res.json();
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
});

const selectUser = (user) => {
  emit("select-user", user);
};
</script>

<template>
  <div
    class="p-3 border-end"
    style="width: 25%; background: white; height: 100vh; overflow-y: auto;"
  >
    <h5>Chats</h5>
    <input type="text" class="form-control mb-3" placeholder="Search Friends" />

    <div
      v-for="user in users"
      :key="user.id"
      class="mb-2 p-2 border-bottom hover bg-light cursor-pointer"
      @click="selectUser(user)"
    >
      {{ user.name }}
    </div>
  </div>
</template>

<style scoped>
.hover:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}
</style>
