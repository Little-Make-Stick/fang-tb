<template>
  <div class="note-login d-flex flex-col jc-center">
    <div class="phone-num-edit d-flex ai-center">
      <i class="iconfont icon-shouji"></i>
      <div class="phone-area-num">+86</div>
      <input
        type="text"
        placeholder="请输入手机号"
        class="flex-1"
      >
    </div>
    <div class="verification-code-edit d-flex ai-center">
      <i class="iconfont icon-yanzhengma"></i>
      <input
        type="text"
        placeholder="请输入验证码"
        class="flex-1"
      >
      <div class="verification-code-get">获取验证码</div>
    </div>
    <div class="login-btn">
      <button>登录</button>
    </div>
    <div class="other-login">
      <a href="#">微博登录</a>
      <a href="#">支付宝登录</a>
    </div>
    <div class="other-options d-flex jc-end">
      <a href="/register">免费注册</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../assets/scss/tool.scss";
input {
  border-color: transparent;
  height: 4vh;
  width: auto;
}
i {
  color: #fff;
  background-color: map-get($map: $color, $key: "grey-2");
  width: 40px;
  height: 40px;
  font-size: 25px !important;
  line-height: 40px;
  text-align: center;
  min-width: 35px;
  min-height: 40px;
}
.note-login {
  padding: 3px 17px;
  .phone-num-edit {
    width: 14vw;
    height: 4vh;
    min-width: 300px;
    min-height: 40px;
    margin: 40px 0 10px 0;
    font-size: 13px;
    .phone-area-num {
      padding: 11px;
    }
  }
  .verification-code-edit {
    width: 14vw;
    height: 4vh;
    min-width: 300px;
    min-height: 40px;
    margin: 10px 0;
    white-space: nowrap;
    font-size: 13px;
  }
  .login-btn {
    button {
      width: 14.8vw;
      height: 4vh;
      min-width: 300px;
      min-height: 40px;
      margin: 10px 0;
      background-color: map-get($map: $color, $key: "primary");
      color: #fff;
      border: 0;
    }
  }
  .other-login {
    width: 14vw;
    min-width: 300px;
    font-size: 12px;
    font-weight: 100;
    a {
      margin: 0 3px;
    }
  }
  .other-options {
    width: 14vw;
    min-width: 300px;
    margin-top: 20px;
    font-size: 12px;
  }
}
</style>