<template>
  <div class="login">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-8 col-lg-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title"><h1>Login User</h1></div>
            </div>
            <div class="card-body">
              <form novalidate @submit.prevent="loginUsers">
                <div class="form-group">
                  <input
                    type="text"
                    :class="`form-control ${errors.username ? 'is-invalid' : ' '} `"
                    placeholder="Username"
                  />
                  <div class="invalid-feedback">{{ errors.username }}</div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    :class="`form-control ${errors.password ? 'is-invalid' : ' '} `"
                    placeholder="Password"
                  />
                  <div class="invalid-feedback">{{ errors.password }}</div>
                </div>
                <!-- <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Username">
                                </div> -->
                <button class="btn btn-outline-success form-control">
                  Login
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
import validateLoginInput from '../validation/validateLoginInput'
export default {
  data() {
    return {
      username: '',
      password: '',
      errors: {}
    }
  },

  methods: {
    loginUsers() {
      let account = {
        username: this.username,
        password: this.password
      }
      const {isInvalid, errors} = validateLoginInput(account)

      if(isInvalid) {
        this.errors = errors;
      } else {
        this.errors = {}
      }
    }
  }
};
</script>

<style scoped>
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
}
</style>