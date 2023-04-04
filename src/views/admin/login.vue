<template>
  <div class="main">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <el-form-item prop="username">
        <el-input
          ref="userName"
          v-model="loginForm.username"
          placeholder="Username"
          name="userName"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          ref="password"
          v-model="loginForm.password"
          type="password"
          placeholder="Password"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
      </el-form-item>

      <el-button
        type="primary"
        style="width:100%;margin-bottom:30px;"
        @click.native.prevent="handleLogin"
      >Login</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        userName: '',
        password: '',
      },
      loginRules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    }
  },
  methods: {
    handleLogin() {
      this.$store.dispatch('user/login', this.loginForm).then(() => {
        this.$router.push({ path: '/admin' })
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.main {
  background-color: #2d3a4b;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-form {
    width: 30%;
  }
}
</style>
