<template>
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
        <div class="card shadow p-4" style="width: 100%; max-width: 400px;">
            <h3 class="text-center mb-4">Register</h3>
            <form @submit.prevent="register">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input v-model="name" type="text" class="form-control" id="name" placeholder="Enter your name"
                        required />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input v-model="email" type="email" class="form-control" id="email" placeholder="Enter your email"
                        required />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input v-model="password" type="password" class="form-control" id="password"
                        placeholder="Enter your password" required />
                </div>
                <div class="d-grid">
                    <button type="submit" class="btn btn-success">Register</button>
                </div>
                <p class="text-center mt-3">
                    Already have an account?
                    <router-link to="/login">Login here</router-link>
                </p>


                <p v-if="error" class="text-danger text-center mt-3">{{ error }}</p>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Register',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            error: ''
        };
    },
    methods: {
        async register() {
            try {
                const res = await axios.post('api/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password
                });
                this.$alert({
                    type: 'success',
                    title: 'Registered Successfully!',
                    text: 'You can now log in.'
                });
                this.$router.push('/login');
            } catch (err) {
                const errorMsg = err.response?.data
                    ? Object.values(err.response.data)[0][0]
                    : 'Something went wrong';
                this.$alert({
                    type: 'error',
                    title: 'Registration Failed',
                    text: errorMsg
                });
            }
        }
    }

};
</script>

<style scoped>
body {
    background-color: #f8f9fa;
}

.card {
    border-radius: 1rem;
}
</style>
