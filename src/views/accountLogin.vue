<template>
  <div class="account-login d-flex flex-col ai-center">
    <div class="account-edit d-flex ai-center">
      <i class="iconfont icon-ren"></i>
      <input
        type="text"
        class="flex-1"
        placeholder="会员名/邮箱/手机号"
      >
    </div>
    <div class="password-edit d-flex ai-center">
      <i class="iconfont icon-lock"></i>
      <input
        type="password"
        class="flex-1"
        placeholder="请输入登录密码"
      >
    </div>
    <div class="login-btn">
      <button>登录</button>
    </div>
    <div class="other-login d-flex jc-start">
      <a href="#">微博登录</a>
      <a href="#">支付宝登录</a>
    </div>
    <div class="other-options d-flex jc-end">
      <a href="#">忘记密码</a>
      <a href="#">忘记用户名</a>
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
.account-login {
  .account-edit {
    width: 14vw;
    height: 4vh;
    min-width: 300px;
    min-height: 45px;
    margin: 40px 0 10px 0;
  }
  .password-edit {
    width: 14vw;
    height: 4vh;
    min-width: 300px;
    min-height: 45px;
    margin: 10px 0;
  }
  .login-btn {
    margin: 10px 0;
    button {
      width: 14vw;
      height: 4vh;
      min-width: 300px;
    min-height: 45px;
      background-color: map-get($map: $color, $key: 'primary');
      color: #fff;
      border: none;
    }
  }
  .other-login {
      width: 14vw;
      min-width: 300px;
      font-size: 12px;
      margin-bottom: 30px;
      a{
          padding: 0 5px;
      }
  }
  .other-options {
      width: 15vw;
      min-width: 310px;
      font-size: 12px;
      a{
          padding: 0 5px;
      }
  }
}
</style>