<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/homepage" v-if="user"
        ><img src="../assets/logo.png" alt=""
      /></router-link>
      <img src="../assets/logo.png" alt="" v-else>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-if="!user">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item" v-if="!user">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item" v-if="user">
            <router-link class="nav-link" to="/dashboard">Change password</router-link>
          </li>
          <li class="nav-item" v-if="user">
            <a class="nav-link" href="" @click.prevent="logoutUser">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      user: "",
    };
  },

  methods: {
    logoutUser() {
      localStorage.removeItem("activeUser");
      this.$router.push("/login");
      window.location.reload();
    },
  },

  mounted() {
    if (localStorage.activeUser) {
      let activeUser = localStorage.activeUser;
      this.user = JSON.parse(activeUser);
    }
  },
};
</script>

<style>
 img {
  width: 50px;
  height: 50px;
}
</style>