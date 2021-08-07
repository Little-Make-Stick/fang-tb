<template>
  <div class="login">
    <div class="login-header d-flex jc-between">
      <div class="login-logo">
        <img src="../assets/image/login-logo.png" />
      </div>
      <div class="improve-tip"> "登录页面"改进建议</div>
    </div>
    <div class="login-contain">
      <div class="login-form">
        <transition>
          <div
            class="pc-login"
            v-if="isPc"
          >
            <div
              class="switch-qr-login d-flex"
              @click="isPc = false"
            >
              <div class="tip-bubble d-flex ai-center">
                <div class="qr-login-tip text-primary-1 bg-white-2">扫码登录更安全</div>
                <div class="bubble-tail-border"><span style='font-size:17px;color:rgb(243, 217, 149);font-style:normal;font-weight:bold;'>&#9655;</span></div>
                <div class="bubble-tail"><span style='font-size:16px;color:rgb(254, 252, 238);font-style:normal;font-weight:normal;'>&#9654;</span></div>
              </div>
              <div class="qr-code-icon">
                <i class="iconfont icon-qrcode text-primary-1 qr-login-icon"></i>
                <div class="icon-shade">
                  <span style='font-size:82px;color:#fff;font-style:normal;font-weight:normal;'>&#9699;</span>
                </div>
              </div>
            </div>
            <div class="account-login-content">
              <router-link
                class="account-login-link"
                to="/login/account"
              >账号登录</router-link>
              <router-link
                class="note-login-link"
                to="/login/note"
              >短信登录</router-link>
              <router-view></router-view>
            </div>
          </div>
          <div
            class="qr-code-login"
            v-else
          >
            <div
              class="switch-pc-login"
              @click="isPc = true"
            >
              <div class="pc-icon">
                <i class="iconfont icon-PC text-primary-1 pc-login-icon"></i>
                <div class="icon-shade">
                  <span style='font-size:82px;color:#fff;font-style:normal;font-weight:normal;'>&#9699;</span>
                </div>
              </div>
            </div>
            <div class="qr-login-content d-flex flex-col">
              <div class="qr-login-title">手机扫码，安全登录</div>
              <div class="qr-login-code d-flex jc-center ai-center">
                <img
                  src="../assets/image/qr-code.png"
                  alt="扫码安全登录"
                  width="150px"
                  height="150px"
                >
              </div>
              <div class="qr-login-tip d-flex ai-center jc-center">
                <i class="iconfont icon-saomiao"></i>
                <div class="tip-text">
                  <div class="tip-text-line">打开 淘宝App | 天猫App</div>
                  <div class="tip-text-line">扫一扫登录</div>
                </div>
              </div>
              <div class="other-options d-flex jc-end">
                <router-link to="/login">密码登录</router-link>
                <router-link to="/register">免费注册</router-link>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="login-footer">
      <div class="ali-group-module d-flex">
        <div
          class="ali-groups"
          v-for="(item,i) in aliGroup"
          :key="i"
        >
          <a
            :href="item.href"
            class="ali-group"
          >{{item.name}}</a>
        </div>
      </div>
      <div class="sub-page-module d-flex jc-between">
        <div
          class="sub-pages"
          v-for="(item,i) in subPages"
          :key="i"
        >
          <div class="sub-page">{{item.title}}</div>
        </div>
      </div>
      <div class="record-module d-flex jc-between flex-wrap">
        <div
          class="records"
          v-for="(item,i) in records"
          :key="i"
        >
          <div class="record">{{item}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPc: false,
      aliGroup: [
        {
          name: "阿里巴巴集团",
          href: "https://page.1688.com/shtml/about/ali_group1.shtml",
        },
        { name: "阿里巴巴国际站", href: "https://www.alibaba.com/" },
        { name: "阿里巴巴中国站", href: "https://www.1688.com/" },
        { name: "全球速卖通", href: "https://www.aliexpress.com/" },
        { name: "淘宝网", href: "https://www.taobao.com/" },
        { name: "天猫", href: "https://www.tmall.com/" },
        { name: "聚划算", href: "https://ju.taobao.com/" },
        { name: "一淘", href: "https://www.etao.com/" },
        { name: "阿里妈妈", href: "https://www.alimama.com/" },
        { name: "飞猪", href: "https://www.fliggy.com/" },
        { name: "虾米", href: "http://www.xiami.com/" },
        { name: "阿里云计算", href: "https://www.aliyun.com/" },
        { name: "云OS", href: "https://www.yunos.com/" },
        { name: "万网", href: "https://www.net.cn/" },
        { name: "支付宝", href: "https://www.alipay.com/" },
        { name: "来往", href: "http://www.laiwang.com/" },
      ],
      subPages: [
        { title: "关于淘宝", href: "#" },
        { title: "合作伙伴", href: "#" },
        { title: "营销中心", href: "#" },
        { title: "廉正举报", href: "#" },
        { title: "联系客服", href: "#" },
        { title: "开放平台", href: "#" },
        { title: "诚征英才", href: "#" },
        { title: "联系我们", href: "#" },
        { title: "网站地图", href: "#" },
        { title: "隐私权政策", href: "#" },
        { title: "法律声明", href: "#" },
        { title: "知识产权", href: "#" },
      ],
      records: [
        "© 2003-现在 Taobao.com 版权所有",
        "增值电信业务经营许可证：浙B2-20080224",
        "增值电信业务经营许可证（跨地区）： B2-20150210",
        "浙网文（2019）1033-086号",
        "浙江省网络食品销售第三方平台提供者备案：浙网食A33010001",
        "互联网药品信息服务资格证书（浙）-经营性-2018-0010",
        "短消息类服务接入代码使用证书：号【2016】00154-A01",
        "信息网络传播视听许可证：1109364号",
        "出版物网络交易平台服务经营备案号：新出发浙备字第002号",
        "浙公网安备 33010002000078号",
        "广播电视节目制作经营许可证（浙）字第01012号",
        "市场名称登记证：工商网市字3301004120号",
        "医疗器械网络交易服务第三方平台备案：（浙）网械平台备字[2018]第00004号",
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/tool.scss";
.login {
  .login-header {
    height: 3vh;
    width: 64vw;
    min-width: 1200px;
    min-height: 50px;
    padding: 4vh 18vw;
    .login-logo {
      img {
        width: 4vw;
        height: 4vh;
        min-width: 65px;
        min-height: 40px;
      }
    }
  }
  .login-contain {
    width: 100vw;
    height: 45vh;
    min-width: 1920px;
    min-height: 470px;
    background-image: url("../assets/image/login-bg.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-bottom: 3vh;
    padding-top: 10vh;
    .login-form {
      width: 14vw;
      height: 35vh;
      min-width: 350px;
      min-height: 350px;
      margin: 0 20vw 12vh 60vw;
      padding: 1.3vh 1.3vw;
      background-color: #fff;
      opacity: 0.9;
      font-size: 16px;
      border-radius: 2px;
      .pc-login {
        position: relative;
        .switch-qr-login {
          position: absolute;
          right: -1.3vw;
          top: -0.6vh;
          .tip-bubble {
            position: relative;
            bottom: 10px;
            .qr-login-tip {
              font-size: 12px;
              height: 18px;
              padding: 3px 4px;
              margin-right: 12px;
              border: 1px solid map-get($map: $color, $key: "primary-2");
            }
            .bubble-tail-border {
              position: absolute;
              right: -1.4px;
            }
            .bubble-tail {
              position: absolute;
              right: 1px;
            }
          }
          .qr-code-icon {
            position: relative;
            .qr-login-icon {
              background-color: transparent;
              width: 52px;
              height: 57px;
              font-size: 50px !important;
            }
            .icon-shade {
              position: absolute;
              top: -34px;
              left: -2px;
            }
          }
        }
        .account-login-content {
          padding-top: 25px;
          .account-login-link,
          .note-login-link {
            font-weight: bold;
            padding: 0.3vh 0.4vw 0.3vh 0;
            &:active,
            &:hover {
              border-bottom: 1px solid map-get($map: $color, $key: "black");
            }
          }
        }
      }
      .qr-code-login {
        position: relative;
        .switch-pc-login {
          position: absolute;
          right: -1vw;
          .pc-icon {
            position: relative;
            .pc-login-icon {
              background-color: transparent;
              width: 52px;
              height: 57px;
              font-size: 50px !important;
            }
            .icon-shade {
              position: absolute;
              top: -34px;
              left: -4px;
            }
          }
        }
        .qr-login-content {
          .qr-login-title {
            font-weight: bold;
            font-size: 16px;
            margin: 20px 0;
          }
          .qr-login-code {
            margin: 10px 0;
          }
          .qr-login-tip {
            i {
              background-color: transparent;
              color: map-get($map: $color, $key: "primary");
            }
            font-size: 13px;
          }
          .other-options {
            margin: 25px 0 15px 0;
            a {
              padding: 2px 5px;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
  .login-footer {
    padding: 0 18vw;
    min-width: 1200px;
    .ali-group-module {
      padding: 1vh 0;
      margin: 0.7vh 0;
      border-top: 1px solid map-get($map: $color, $key: "grey-2");
      border-bottom: 1px solid map-get($map: $color, $key: "grey-2");
      .ali-groups {
        padding: 0 0.8vw;
        font-size: 14px;
        white-space: nowrap;
        border-right: 1px solid map-get($map: $color, $key: "grey-1");
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          border-right: 0;
          padding-right: 0;
        }
        .ali-group {
          color: map-get($map: $color, $key: "black-1");
        }
      }
    }
    .sub-page-module {
      height: 2.2vh;
      min-height: 23px;
    }
    .record-module {
      line-height: 20px;
      color: map-get($map: $color, $key: "grey");
    }
  }
}
</style>