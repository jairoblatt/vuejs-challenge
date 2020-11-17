<template>
  <div class="row">
    <div class="col-sm-12 col-lg-5 login-form-container">
      <!-- Title -->
      <div class="login-title">
        <h2>
          Hello, <span>{{ form.userName }}</span>
        </h2>
      </div>

      <!-- Form -->
      <div class="login-form-group">
        <div class="login-form-input">
          <s-text-field 
            label="Username"
            v-model="form.userName" 
          />
        </div>
        <div class="login-form-input">
          <s-text-field
            label="Password"
            type="password"
            v-model="form.password"
          />
        </div>
      </div>

      <!-- Actions -->
      <div class="login-form-actions">
        <s-button :to="{ name: 'PasswordRecovery' }" text
          >Forgot password?</s-button
        >
        <s-button :loading="loading" @click="login">Login</s-button>
      </div>

      <!-- Footer -->
      <div class="login-footer">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quidem
          fuga natus. Pariatur sit amet consectetur adipisicing elit. Ipsa
          quidem fuga natus. Pariatur amet debitis aperiam mollitia amet debitis
          aperiam mollitia
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  layout: "auth",

  data: () => ({
    loading: false,
    form: {
      userName: "sophia",
      password: "test123",
    }
  }),

  methods: {
    login() {
      this.loading = true;
      // simulating a promise
      setTimeout((_) => this.$router.push({ name: "Feed" }), 1000);
    },
  },
};
</script>
<style lang="scss" src="@/assets/styles/login.scss"/>