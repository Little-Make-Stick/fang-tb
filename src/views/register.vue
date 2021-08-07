<template>
  <div class="register">
    <div class="register-header">
      <top-navs :isAddress='false'></top-navs>
      <div class="register-logo d-flex ai-center">
        <div class="logo-img">
          <img
            src="../assets/image/product-logo.png"
            alt=""
            width="106px"
            height="50px"
          >
        </div>
        <div class="register-text">用户注册</div>
      </div>
    </div>
    <div class="register-contain d-flex ai-center jc-center">
      <div class="register-form d-flex flex-col ai-end">
        <div class="form-item d-flex ai-center">
          <div class="form-item-label">手机号码</div>
          <div class="edit-box d-flex ai-center">
            <div class="phone-area-num">中国大陆&nbsp;+86</div>
            <input v-model="phoneNumber" type="text" class="phonenum-edit" />
          </div>
        </div>
        <div class="form-item d-flex ai-center">
          <div class="form-item-label">验证码</div>
          <div class="edit-box d-flex ai-center">
            <input v-model="validatedCode" type="text" class="validated-code-edit" />
            <div class="validated-code-get">获取验证码</div>
          </div>
        </div>
        <div class="form-submit">
          <div class="form-submit-btn">
            <button>同意协议并注册</button>
          </div>
          <div class="agree-protocols">
            <div class="protocols d-flex">
              已阅读并同意以下协议{{protocols.map((e)=>{return e.title}).join('、')}}
            </div>
          </div>
        </div>
        <div class="register-business-account">切换为企业账户注册</div>
      </div>
    </div>
    <div class="register-footer">
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
      <div class="record-module d-flex jc-between">
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
import topNavs from "../components/topNavs.vue";
export default {
  data() {
    return {
      protocols: [
        {
          href: "https://terms.alicdn.com/legal-agreement/terms/TD/TD201609301342_19559.html",
          title: "淘宝平台服务协议",
        },
        {
          href: "https://terms.alicdn.com/legal-agreement/terms/suit_bu1_taobao/suit_bu1_taobao201703241622_61002.html",
          title: "隐私权政策",
        },
        {
          href: "https://terms.alicdn.com/legal-agreement/terms/suit_bu1_taobao/suit_bu1_taobao201811121436_80276.html",
          title: "法律声明",
        },
        {
          href: "https://render.alipay.com/p/f/fd-jm7jym6r/alipay/multi-agreement.html",
          title: "支付宝及客户端服务协议",
        },
      ],
      aliGroup: [
        { name: "阿里巴巴集团",href: "https://page.1688.com/shtml/about/ali_group1.shtml"},
        { name: "阿里巴巴国际站", href: "https://www.alibaba.com/" },
        { name: "阿里巴巴中国站", href: "https://www.1688.com/" },
        { name: "全球速卖通", href: "https://www.aliexpress.com/" },
        { name: "淘宝网", href: "https://www.taobao.com/" },
        { name: "天猫", href: "https://www.tmall.com/" },
        { name: "聚划算", href: "https://ju.taobao.com/" },
        { name: "一淘", href: "https://www.etao.com/" },
        { name: "阿里妈妈", href: "https://www.alimama.com/" },
        { name: "阿里云计算", href: "https://www.aliyun.com/" },
        { name: "云OS", href: "https://www.yunos.com/" },
        { name: "万网", href: "https://www.net.cn/" },
        { name: "支付宝", href: "https://www.alipay.com/" },
      ],
      subPages: [
        { title: "关于淘宝", href: "#" },
        { title: "合作伙伴", href: "#" },
        { title: "营销中心", href: "#" },
        { title: "联系客服", href: "#" },
        { title: "开放平台", href: "#" },
        { title: "诚征英才", href: "#" },
        { title: "联系我们", href: "#" },
        { title: "网站地图", href: "#" },
        { title: "法律声明及隐私权政策", href: "#" },
      ],
      records: [
        "© 2021 Taobao.com 版权所有",
        "网络文化经营许可证：文网文[2010]040号",
        "增值电信业务经营许可证：浙B2-20080224-1",
        "信息网络传播视听节目许可证：1109364号",
      ],
    };
  },
  components: {
    topNavs,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/tool.scss";
.register {
  .register-header {
    width: 100vw;
    min-width: 1480px;
    .register-logo {
      padding: 3vh 23vw;
      font-size: 22px;
      word-spacing: 0.3vw;
      .register-text {
        margin: 0 1vw;
      }
    }
  }
  .register-contain {
    width: 100vw;
    height: 50vh;
    min-width: 1480px;
    min-height: 500px;
    .register-form {
      .form-item{
        margin: 2.5vh 0;
        font-size: 14px;
        .form-item-label{
          width: 3vw;
          min-width: 80px;
          text-align: right;
        }
        .edit-box{
          height: 3.6vh;
          min-height: 36px;
          width: 16vw;
          min-width: 290px;
          margin-left: 0.5vw;
          border: 1px solid map-get($map: $color, $key: 'grey-1');
          input{
            border: 0;
            height: 3.3vh;
            min-height: 34px;
            flex: 1;
          }
          .phonenum-edit{
            border-left: 1px solid map-get($map: $color, $key: 'grey-1');
          }
          .phone-area-num{
            padding: 0 0.5vw;
          }
          .validated-code-get{
            padding: 0 0.5vw;
          }
        }
      }
      .form-submit{
        padding-left: 3.5vw;
        .form-submit-btn{
          button{
            width: 16vw;
            height: 3.7vh;
            min-width: 290px;
            min-height: 36px;
            white-space: 0.5vw;
            font-size: 14px;
            border: 0;
            background: linear-gradient(to right, map-get($color,'primary-1') 45%,map-get($color,'primary'));
            opacity: 0.4;
            color: #fff;
          }
        }
        .agree-protocols{
          width: 16vw;
          min-width: 290px;
          margin: 0.6vh 0;
          white-space: 0.3vw;
          .protocols{
            height: 5vh;
            min-height: 50px;
          }
        }
      }
      .register-business-account{
        width: 16vw;
        padding-left: 3.5vw;
        text-align: right;
        margin-top: 3vh;
      }
    }
  }
  .register-footer {
    padding: 0 23vw;
    min-width: 1000px;
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
  }
}
</style>