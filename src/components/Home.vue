<template>
  <div id="home">
    <div id="home-container">
      <div id="home-top">
      </div>
      <div id="home-post-message">
        <form action="">
          <p><label for="post-message">发表你的留言：</label></p>
          <textarea name="postMessage" id="post-message" cols="130" rows="10" placeholder="评论展开区域"></textarea>
          <p>
            <button class='message-button' v-on:click="">发表</button>
            <button class='message-button' v-on:click="">取消</button>
          </p>
        </form>
      </div>
      <div id="home-message">
        <h3>留言（）</h3>
        <ul>
          <li class="message">

            <div class="message-content">
              <div class="author-info">
                <p class="author-p">
                  <img src="../assets/logo.png" width="70px" height="70px" alt="图片未加载">
                </p>
                <p class="author-p">
                  留言人
                </p>
                <p class="author-p">
                  性别
                </p>
              </div>
              <div class="content-right">
                <div class="content-right-top">
                  <p class="time">发表时间： </p><span>回复</span>
                </div>
                <p class="content">
                  DE的VS debug的功能简直就是立竿见影。它可以加断点，单步调试。
                  单步调试可以让我们对代码逻辑，执行顺序，以及各种中间结果更加清晰。
                  至于本身容易出错的BUG，用IDE调试简直是再合适不过了。
                </p>

              </div>
            </div>
            <ul>
              <li class="reply">
                <img src="../assets/logo.png" width="50px" height="50px" alt="图片未加载">
                <div class="reply-message">
                  {回复人}回复：
                  <p class="time">回复时间</p>
                </div>

              </li>
            </ul>
            <div class="comment">
              <textarea name="" id="" cols="30" rows="2" placeholder="评论："></textarea>
            </div>
          </li>
          <div class="message-bottom">
            <span>上一页</span>
            <ul class="page-ul">
              <li>
                第几页
              </li>
            </ul>
            <span>下一页</span>
            <label for="jumpPage">跳转</label>
            <textarea name="" id="jumpPage" cols="2" rows="1"></textarea>
            <span>页</span>
            <button class="sure-button">确定</button>
            <button class="sure-button">
              我要留言
            </button>
          </div>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Home"
  }
</script>
<!--background-color: #62C7D9;-->
<style scoped>
  #home {
    width: 100%;
    background: #F6F6F6;
  }

  #home-container {
    width: 70%;
    margin: 0 auto;
    background: #FFFFFF;
    padding: 30px 30px 0px 30px;
    border: 1px solid #DDDDDD;
  }

  #home-top {
    width: 934px;
    height: 168px;
    margin: 0 auto;
    background-image: url("../assets/messageBorad.jpg");
  }

  #home-post-message {
    width: 934px;
    height: 250px;
    margin: 0 auto;
  }

  #post-message {
    max-width: 934px;
    max-height: 200px;
  }

  .message-button {
    background: #169BD5;
    width: 90px;
    height: 30px;
    color: white;
    border: none;
    border-radius: 3px;
    margin-left: 10px;
  }

  #home-message {
    width: 934px;
    margin: 0 auto;
  }

  .message {
    width: 934px;
    border-top: 1px solid;
    padding-top: 11px;
    font-size: 15px;
  }

  .message-content {
    width: 900px;
    height: 250px;

    position: relative;
  }

  .author-info {
    width: 82px;
    height: 150px;
    display: inline-block;
    text-align: center;
    position: absolute;
    top: 24px;
    left: 18px;
  }

  .author-p {
    margin: 5px 0;
  }

  .content-right {
    width: 700px;
    height: 150px;
    display: inline-block;
    position: absolute;
    left: 157px;
    overflow: hidden;
  }

  .content-right-top {
    width: 700px;
    height: 50px;
    text-align: right;
  }

  .content {

  }

  .reply {
    width: 641px;
    margin: 12px 174px;
    position: relative;
  }

  .reply-message {
    display: inline-block;
    width: 550px;
    position: absolute;
    left: 77px;
  }

  .comment {
    width: 641px;
    margin: 0 174px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  .time {
    color: #918989dd;
    display: inline-block;
    width: 126px;
  }

  .message-bottom{
    width: 778px;
    margin: 29px 0px 0px 68px;
    border-top: 1px solid #a99191;
    padding-top: 12px;
    height: 100px;
    line-height: 100px;
  }

  .page-ul{
    display: inline-block;
  }

  .sure-button {
    background: blue;
    width: 120px;
    height: 30px;
    border: none;
    border-radius: 3px;
    color: white;
  }
</style>
