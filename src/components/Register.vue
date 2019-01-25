<template>
  <div id="register-page">
    <div id="register-title">
      留言板
    </div>
    <div id="register-content">
      <div id="avatar">
        <div>
          <img src="../assets/logo.png" width="50px" height="50px" alt="图片未加载">
        </div>

        <span>更换头像</span>
      </div>
      <div id="register-info">
        <form action="">
          <p>
            <label for="name">昵称</label>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <input class="regInput" type="text" id="name" placeholder="昵称">
          </p>
          <p>
            <label>性别</label>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <input type="radio" name="sex" value="男" checked="true" id="man">
            <label for="man">男</label>
            <input type="radio" name="sex" value="女" id="woman">
            <label for="woman">女</label>
          </p>
          <p>
            <label for="user">用户名 </label>
            <span></span>
            <input class="regInput" type="text" id="user" name="regUser" placeholder="用户名">
          </p>
          <p>
            <label for="password">密码</label>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <input class="regInput" type="password" id="password" name="regPassword" placeholder="密码">
          </p>
          <p id="p-submit">
            <input type="submit" id="register-submit" name="regSubmit" value="注册">
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Register"
  }
</script>

<style scoped>
  #register-page {
    width: 100%;
    margin-top: 25px;
    /*text-align: center;*/
  }

  #register-title {
    margin: 0 auto;
    height: 45px;
    width: 500px;
    text-align: center;
    background: #07C8CF;
    font-size: 24px;
    color: #76768c;
    font-weight: 600;
    line-height: 45px;
  }

  #register-content {
    width: 500px;
    height: 300px;
    background: #f7f5f5;
    margin: 0 auto;
    position: relative;
  }

  #register-submit {
    background: #07BDFD;
    border: 1px solid #34afbb;
    border-radius: 3px;
    width: 82px;
    height: 35px;
    color: white;
  }

  .regInput {
    width: 164px;
    height: 20px;
  }

  #register-info {
    font-size: 18px;
    width: 300px;
    position: absolute;
    display: inline-block;
    right: 10px;
    margin-top: 22px;
  }

  #avatar {
    width: 180px;
    height: 250px;
    position: absolute;
    left: 61px;
    top: 43px;
  }

  #p-submit{
    text-align: center;
    padding-left: 24px;
    padding-top: 11px;
  }
</style>
