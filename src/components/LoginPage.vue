<template>
  <div class="login">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-8 col-lg-6">
          <div class="card">
            <div class="card-header">
              <h1>Login User</h1>
            </div>
            <div class="card-body">
              <form novalidate @submit.prevent="loginUser">
                <div class="form-group">
                  <input
                    type="text"
                    :class="`form-control ${
                      errors.username ? 'is-invalid' : ''
                    }`"
                    placeholder="Username"
                    v-model="username"
                  />
                  <div class="invalid-feedback">{{ errors.username }}</div>
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    :class="`form-control ${
                      errors.password ? 'is-invalid' : ''
                    }`"
                    placeholder="Password"
                    v-model="password"
                  />
                  <div class="invalid-feedback">{{ errors.password }}</div>
                </div>
                <button class="btn btn-outline-success form-control">
                  Login
                </button>
                <div class="registerRoute">
                  <p class="message">Not registered? <router-link to="/register">Create an account</router-link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import validateLoginInput from "../validation/validateLoginInput";
export default {
  data() {
    return {
      username: "",
      password: "",
      errors: {},
    };
  },
  methods: {
    loginUser() {
      let account = {
        username: this.username,
        password: this.password,
      };

      const { isInvalid, errors } = validateLoginInput(account);

      if (isInvalid) {
        this.errors = errors;
      } else {
        this.errors = {};
        // login code
        let lsUsers = localStorage.users;
        lsUsers = JSON.parse(lsUsers);
        let usernameIndex = lsUsers.findIndex(
          (user) => user.username === account.username
        );
        if (usernameIndex > -1) {
          let passwordIndex = lsUsers.findIndex(
            (user) => user.password === account.password
          );

          if (passwordIndex > -1) {
            let activeUser = lsUsers.find(
              (user) => user.username === account.username
            );
            localStorage.setItem("activeUser", JSON.stringify(activeUser));
            this.$router.push("/homepage");
            window.location.reload();
          } else {
            this.errors.password = "Password does not match!";
          }
        } else {
          this.errors.username = "Username does not exist!";
        }
      }
    },
  },
};
</script>

<style>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.card-header {
  display: flex;
  justify-content: center;
  align-content: center;
  border: none;
}

.registerRoute {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}
</style>
