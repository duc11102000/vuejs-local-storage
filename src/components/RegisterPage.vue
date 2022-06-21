<template>
  <div class="register">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-8 col-lg-6">
          <div class="card">
            <div class="card-header">
              <h1>Register</h1>
            </div>
            <div class="card-body">
              <form novalidate @submit.prevent="registerUser()">
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
                <div class="form-group">
                  <input
                    type="password"
                    :class="`form-control ${
                      errors.password2 ? 'is-invalid' : ''
                    }`"
                    placeholder="Confirm password"
                    v-model="password2"
                  />
                  <div class="invalid-feedback">{{ errors.password2 }}</div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    :class="`form-control ${
                      errors.fullName ? 'is-invalid' : ''
                    }`"
                    placeholder="Full name"
                    v-model="fullName"
                  />
                  <div class="invalid-feedback">{{ errors.fullName }}</div>
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    :class="`form-control ${errors.email ? 'is-invalid' : ''}`"
                    placeholder="Email"
                    v-model="email"
                  />
                  <div class="invalid-feedback">{{ errors.email }}</div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    :class="`form-control ${
                      errors.address ? 'is-invalid' : ''
                    }`"
                    placeholder="Address"
                    v-model="address"
                  />
                  <div class="invalid-feedback">{{ errors.address }}</div>
                </div>
                <div class="genderCheckBox">
                  <div class="form-check-inline">
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        name="optradio"
                        checked
                      />Male
                    </label>
                  </div>
                  <div class="form-check-inline">
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        name="optradio"
                      />Female
                    </label>
                  </div>
                </div>
                <button class="btn btn-outline-success form-control">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import validateRegisterInput from "../validation/validateRegisterInput";
export default {
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      email: "",
      fullName: "",
      address: "",
      errors: {},
      users: [],
    };
  },

  methods: {
    registerUser() {
      let user = {
        username: this.username,
        password: this.password,
        password2: this.password2,
        email: this.email,
        fullName: this.fullName,
        address: this.address,
      };

      const { isInvalid, errors } = validateRegisterInput(user);
      if (isInvalid) {
        this.errors = errors;
      } else {
        this.errors = {};

        // Refresh lại ko mất local data
        if (localStorage.users) {
          let lsUser = localStorage.users;
          this.users = JSON.parse(lsUser);
        }

        this.users.push(user);
        // lưu dữ liệu dưới local
        localStorage.setItem("users", JSON.stringify(this.users));
        this.username = '';
        this.password = '';
        this.password2 = '';
        this.email = '';
        this.fullName = '';
        this.address = '';
        this.$router.push('/login')
      }
    },
  },
};
</script>

<style scoped>
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.genderCheckBox {
  /* display: flex; */
  padding: 10px 0 20px 10px;
}

.card-header {
  display: flex;
  justify-content: center;
  align-content: center;
  border: none;
}
</style>