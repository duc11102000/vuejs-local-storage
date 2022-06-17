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
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Password"
                  />
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
export default {};
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