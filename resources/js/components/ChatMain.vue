<template>
  <div class="d-flex flex-column flex-grow-1" style="height: 100vh;">
    <!-- Top bar -->
    <div class="p-3 bg-white border-bottom d-flex justify-content-between align-items-center">
      <h6 class="mb-0">
        {{ receiver.name }} <span class="badge bg-success">Online</span>
      </h6>
      <button class="btn btn-sm btn-outline-danger" @click="logout">Logout</button>
    </div>

    <!-- Messages display -->
    <div ref="messageContainer" class="flex-grow-1 p-3 overflow-auto" style="background-color: #e9eff6;">
      <div v-for="(item, index) in messages" :key="index" class="mb-3"
        :class="{ 'text-end': item.sender_id === user.id }">
        <div class="rounded p-2 d-inline-block"
          :class="item.sender_id === user.id ? 'bg-primary text-white' : 'bg-light'">
          {{ item.message }}
        </div>
      </div>
    </div>

    <!-- Message input -->
    <div class="p-3 bg-white border-top">
      <div class="input-group">
        <input v-model="newMessage" type="text" class="form-control" placeholder="Write something..."
          @keyup.enter="sendMessage" />
        <button class="btn btn-primary" @click="sendMessage">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ChatMain",
  props: {
    receiver: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      newMessage: "",
      messages: [],
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
  watch: {
    receiver: {
      immediate: true,
      handler() {
        if (this.receiver?.id) {
          this.fetchMessages();
        }
      },
    },
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.$router.push("/login");
    },

    async fetchMessages() {
      try {
        const res = await axios.get(`/api/messages/${this.receiver.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        this.messages = res.data;
        this.scrollToBottom();
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    },

    async sendMessage() {
      if (!this.newMessage.trim()) return;

      try {
        const res = await axios.post(
          "/api/messages",
          {
            receiver_id: this.receiver.id,
            message: this.newMessage,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        this.messages.push(res.data);
        this.newMessage = "";
        this.scrollToBottom();
      } catch (error) {
        console.error("Error sending message:", error);
      }
    },

    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.messageContainer;
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
      });
    },
  },
};
</script>
