<template>

  <div id="loginPage">
    <div id="login-title">
      留言板
    </div>
    <div id="login-content">
      <form id="login-form" action="">
        <p>
          <label for="user">用户名</label>
          <input class="login-input" type="text" id="user" name="logUser" placeholder="用户名">
        </p>
        <p>
          <label for="password">密码<span>&nbsp;&nbsp;&nbsp;</span></label>
          <input class="login-input" type="password" id="password" name="logPassword" placeholder="密码">
        </p>
        <input type="submit" id="login-button" name="logSubmit" value="登录">
      </form>
      <p class="login-register">
        <button v-on:click="jumpRegister">注册账号</button>
      </p>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Login",
    methods: {
      jumpRegister: function () {
          this.$router.push("/register");
      }

    }
  }
</script>

<style scoped>
  #loginPage {
    text-align: center;
    width: 100%;
    margin-top: 70px;
  }

  #login-title {
    margin: 0 auto;
    height: 45px;
    width: 400px;
    text-align: center;
    background: #77c3f9fc;
    font-size: 24px;
    color: #76768c;
    font-weight: 600;
    line-height: 45px;
  }

  #login-button {
    background: #07BDFF;
    border: 1px solid #34afbb;
    border-radius: 3px;
    width: 235px;
    height: 35px;
  }

  #login-content {
    width: 400px;
    height: 228px;
    background: #f7f5f5;
    margin: 0 auto;
    padding-top: 1px;
    font-size: 18px;
  }

  .login-input {
    width: 164px;
    height: 20px;
  }

  button{
    text-decoration: none;
    text-align: left;
    color: #A6A6A6;
    background: none;
    border: none;
    outline: none;  /**  去掉点击后的边框  */
  }

  #login-form {
    margin-top: 35px;
  }

  .login-register {
    text-align: right;
    margin-right: 10px;
    font-size: 15px;
    margin-top: 19px;
  }
</style>
