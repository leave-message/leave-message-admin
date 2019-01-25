<template>
  <div id="top">
    <div id="nav">
      <div id="nav-left">
        <img id='logo'src="../assets/logo.png" width="50px" height="50px" alt="图片未加载">
        <span id="title">留言板</span>
        <div class="a-home">
          <router-link  :to="{name: 'homeLink'}">主页</router-link>
        </div>
      </div>
      <div id="nav-right">
        <router-link  :to="{name:'loginLink'}">登录</router-link>
        <router-link  :to="{name: 'registerLink'}">注册</router-link>
      </div>

    </div>
  </div>

</template>

<script>
    export default {
        name: "Top"
    }
</script>

<style scoped>
  #top{
    width:100%;
    background-color: #62C7D9;
  }
  #nav{
    width:672px;
    height: 80px;
    margin: auto;
    position: relative;
  }
#logo{
  padding: 15px 0;
}

  #nav-left{
    height: 80px;
    line-height: 80px;
    width:500px;
    display: inline-block;
  }
  .a-home{
    height: 80px;
    line-height: 80px;
    display: inline-block;
    position: absolute;
    left: 159px;

  }

  #title{
    font-size: 23px;
    font-weight: 600;
    position: absolute;
    left: 64px;
  }

  a{
    text-decoration: none;
    color:black;
    font-size: 20px;
  }

  #nav-right{
    height: 80px;
    position: absolute;
    line-height: 80px;
    display: inline-block;
  }

  #nav-right a{
    margin-left: 20px;
  }
</style>
