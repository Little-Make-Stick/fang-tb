<template>
  <div class="top-navs">
    <div class="info-navs-line bg-white-1 d-flex jc-center">
      <div class="info-navs d-flex jc-between">
        <div class="header-info d-flex jc-around">
          <div
            class="address"
            v-if="isAddress"
          >中国大陆</div>
          <router-link class="login" to="/login">亲，请登录</router-link>
          <router-link class="register" to="/register">免费注册</router-link>
          <div class="phone">手机看淘宝</div>
        </div>
        <div class="header-navs d-flex jc-around">
          <div
            class="navs-list"
            v-for="(item) in navs"
            :key="item.title"
          >
            <div class="nav-item">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { isAddress: { type: Boolean, default: false, required: true } },
  data() {
    return {
      navs: [
        { title: "淘宝网首页", icon: "", link: "" },
        {
          title: "我的淘宝",
          icon: "",
          link: "",
          child: [
            "已买到的宝贝",
            "我的足迹",
            "我的上新",
            "爱逛街",
            "淘宝达人",
            "新欢",
          ],
        },
        { title: "购物车", icon: "", link: "", child: [""] },
        {
          title: "收藏夹",
          icon: "",
          link: "",
          child: ["收藏的宝贝", "收藏的店铺"],
        },
        { title: "商品分类", icon: "", link: "" },
        {
          title: "卖家中心",
          icon: "",
          link: "",
          child: [
            "免费开店",
            "已卖出的宝贝",
            "出售中的宝贝",
            "卖家服务市场",
            "卖家培训中心",
          ],
        },
        { title: "联系客服", icon: "", link: "" },
        { title: "网站导航", icon: "", link: "", child: [""] },
      ],
    };
  },
};
</script>

<style lang="scss">
.top-navs {
  .info-navs-line {
    padding: 1.2vh 25vw;
    min-height: 20px;
    .info-navs {
      width: 55vw;
      min-width: 900px;
      .header-info {
        width: 300px;
      }
      .header-navs {
        width: 500px;
      }
    }
  }
}
</style>