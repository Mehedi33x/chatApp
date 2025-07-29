<script setup>
import { ref } from "vue";
import ChatSidebar from '../components/ChatSidebar.vue';
import ChatMain from '../components/ChatMain.vue';

const selectedUser = ref(null);
</script>

<template>
  <div class="d-flex">
    <ChatSidebar @select-user="selectedUser = $event" />
    <ChatMain v-if="selectedUser" :receiver="selectedUser" />
    <div v-else class="p-5">Select a user to start chatting.</div>
  </div>
</template>