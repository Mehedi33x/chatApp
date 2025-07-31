<template>
    <header class="flex items-center justify-between px-6 py-3 bg-white shadow">
        <div class="w-1/3"></div>
        <div class="w-1/3 text-center font-bold text-lg">MyChatApp</div>
        <div class="w-1/3 flex justify-end space-x-4">
            <button @click="goToProfile" class="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-700">
                Profile
            </button>
            <button @click="logout" class="px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white">
                Logout
            </button>
        </div>
    </header>
</template>

<script>
export default {
    name: "AppHeader",
    methods: {
        logout() {
            console.log('achi');
            
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            this.$router.push("/login");
        },
        goToProfile() {
            this.$router.push("/profile");
        },
    },
};
</script>

<style scoped>
</style>
