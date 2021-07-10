<template>
  <div id="app">
    <div class="main-header ">
      <div class="info-navs-line bg-white-1 d-flex jc-center">
        <div class="info-navs d-flex jc-between">
          <div class="header-info d-flex jc-around">
            <div class="login">亲，请登录</div>
            <div class="register">免费注册</div>
            <div class="phone">手机看淘宝</div>
          </div>
          <div class="header-navs d-flex jc-around">
            <div
              class="navs-list"
              v-for="(item , i) in navs"
              :key="i"
            >
              <div class="nav-item">{{item.title}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="logo-search d-flex">
        <div class="logo">
          <img src="../src/assets/image/logo.jpg" />
        </div>
        <div class="search d-flex flex-col jc-around ai-center">
          <div class="search-edit d-flex ai-center">
            <input
              type="text"
              class="search-input"
            >
            <button class="search-button bg-red text-white">搜索</button>
          </div>
          <div class="search-tags-line d-flex jc-around">
            <div
              class="search-tags"
              v-for="(item,i) in searchTags"
              :key="i"
            >
              <a
                class="search-tag text-grey"
                :href="item.href"
              >{{item.tag}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end of main-hander -->
    <div class="main-contain">
      <div class="filter-list d-flex">
        <div class="filter d-flex ai-center">
          <div class="filter-label">价格区间</div>
          <div class="filter-content">
            <input
              class="low-price"
              :value="lowPrice"
            />-
            <input
              class="high-price"
              :value="highPrice"
            />
          </div>
        </div>
      </div>
      <div class="good-list d-flex flex-wrap">
        <div
          class="good-card-list"
          v-for="(item,i) in goodList"
          :key="i"
        >
          <good-card :product="item"></good-card>
        </div>
      </div>
      <div class="page-controll d-flex jc-around">
        <div class="last-page">
          <button class="page-btn"><span>&lt;</span>上一页</button>
        </div>
        <div>……</div>
        <div class="next-page">
          <button class="page-btn">下一页<span>&gt;</span></button>
        </div>
        <div class="first-page">
          <button class="page-btn">首页</button>
        </div>
      </div>
    </div>
    <!-- end of main-contain -->
    <div class="main-footer">
      <div class="guess-search d-flex">
        <div class="guess-search-label">您是不是想找:</div>
        <div
          class="guess-search-tags"
          v-for="(item,i) in guessSearchTags"
          :key="i"
        >
          <div class="guess-search-tag">{{item}}</div>
        </div>
      </div>
      <div class="link-record d-flex">
        <div
          class="links"
          v-for="(item,i) in links"
          :key="i"
        >
          <a
            class="link"
            :href="item.href"
          >{{item.title}}</a>
        </div>
        <div
          class="records"
          v-for="(item,i) in records"
          :key="i"
        >
          <a
            class="record"
            :href="item.href"
          >{{item.title}}</a>
        </div>
      </div>
      <div class="ali-group-list d-flex flex-wrap">
        <div
          class="ali-group"
          v-for="(item,i) in aliGroup"
          :key="i"
        >
          <a class="text-grey" :href="item.href">{{item.name}}</a>
        </div>
      </div>
    </div>
    <!-- end of main-footer -->
  </div>
</template>

<script>
import goodCard from "../src/components/productCard";

export default {
  name: "App",
  data() {
    return {
      lowPrice: "￥",
      highPrice: "￥",
      goodList: [],
      guessSearchTags: [
        "vivo",
        "安踏",
        "卫衣男",
        "项链女",
        "洗衣液",
        "新款女装",
        "女装",
        "彪马",
        "笔袋",
        "女外套",
      ],
      links: [
        { title: "联系客服", href: "https://help.alimama.com/" },
        { title: "开放平台", href: "https://open.taobao.com/" },
        {
          title: "法律声明",
          href: "https://terms.alicdn.com/legal-agreement/terms/suit_bu1_ali_mama_division/suit_bu1_ali_mama_division201709111812_13128.html",
        },
        { title: "廉正举报", href: "https://jubao.alibaba.com/" },
      ],
      records: [
        { title: "Taobao.com版权所有 2003-现在", href: "#" },
        { title: "增值电信业务经营许可证：浙B2-20070195", href: "#" },
        {
          title: "浙公网安备 33010002000075号",
          href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010002000075",
        },
      ],
      aliGroup: [
        {
          name: "阿里巴巴集团",
          href: "http://www.alibabagroup.com/cn/global/home",
        },
        { name: "淘宝网", href: "https://www.taobao.com/" },
        { name: "天猫", href: "https://www.tmall.com/" },
        { name: "聚划算", href: "https://ju.taobao.com/" },
        { name: "全球速卖通", href: "https://www.aliexpress.com/" },
        { name: "阿里巴巴国际交易市场", href: "https://www.alibaba.com/" },
        { name: "1688", href: "https://www.1688.com/" },
        { name: "阿里妈妈", href: "https://www.alimama.com/" },
        { name: "飞猪", href: "https://www.fliggy.com/" },
        { name: "阿里云计算", href: "https://www.aliyun.com/" },
        { name: "AliOS", href: "http://www.alios.cn/" },
        { name: "阿里通信", href: "https://aliqin.tmall.com/" },
        { name: "高德", href: "http://www.autonavi.com/" },
        { name: "UC", href: "http://www.uc.cn/" },
        { name: "友盟", href: "https://www.umeng.com/" },
        { name: "虾米", href: "https://www.xiami.com/" },
        { name: "阿里星球", href: "https://www.alibabaplanet.com/" },
        {
          name: "钉钉",
          href: "https://www.dingtalk.com/?lwfrom=20150130163937547",
        },
        { name: "支付宝", href: "https://www.alipay.com/" },
        { name: "达摩院", href: "https://damo.alibaba.com/" },
      ],
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
      searchTags: [
        {
          href: "https://www.etao.com/cjfl/flash.htm?spm=a2e0b.20350158.1998559106.1.7244468adBBObL&pid=mm_26632258_3504122_32538762&union_lens=recoveryid%3A201_11.11.100.114_3244297_1625796841863%3Bprepvid%3A201_11.11.100.114_3244297_1625796841863&clk1=66623ed4f784e5aa4ad2b7361b91f399",
          tag: "一淘限时抢",
        },
        {
          href: "https://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&keyword=%E6%89%8B%E8%A1%A8&clk1=66623ed4f784e5aa4ad2b7361b91f399&upsId=66623ed4f784e5aa4ad2b7361b91f399",
          tag: "手表",
        },
        {
          href: "https://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&keyword=%E6%96%9C%E8%B7%A8%E5%A5%B3%E5%8C%85&clk1=66623ed4f784e5aa4ad2b7361b91f399&upsId=66623ed4f784e5aa4ad2b7361b91f399",
          tag: "斜跨女包",
        },
        {
          href: "https://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&keyword=%E5%A5%B3%E8%A1%AC%E8%A1%AB&clk1=66623ed4f784e5aa4ad2b7361b91f399&upsId=66623ed4f784e5aa4ad2b7361b91f399",
          tag: "女衬衫",
        },
        {
          href: "https://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&keyword=%E9%9E%8B%E5%AD%90&clk1=66623ed4f784e5aa4ad2b7361b91f399&upsId=66623ed4f784e5aa4ad2b7361b91f399",
          tag: "鞋子",
        },
        {
          href: "https://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&keyword=%E9%A1%B9%E9%93%BE&clk1=66623ed4f784e5aa4ad2b7361b91f399&upsId=66623ed4f784e5aa4ad2b7361b91f399",
          tag: "项链",
        },
        {
          href: "https://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&keyword=%E5%A5%B3%E8%A3%A4%E4%BC%91%E9%97%B2&clk1=66623ed4f784e5aa4ad2b7361b91f399&upsId=66623ed4f784e5aa4ad2b7361b91f399",
          tag: "女裤休闲",
        },
        {
          href: "https://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&keyword=%E6%B2%99%E5%8F%91&clk1=66623ed4f784e5aa4ad2b7361b91f399&upsId=66623ed4f784e5aa4ad2b7361b91f399",
          tag: "沙发",
        },
        {
          href: "https://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&keyword=%E6%B2%90%E6%B5%B4%E9%9C%B2&clk1=66623ed4f784e5aa4ad2b7361b91f399&upsId=66623ed4f784e5aa4ad2b7361b91f399",
          tag: "沐浴露",
        },
        {
          href: "https://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&keyword=%E6%B4%97%E8%A1%A3%E6%B6%B2&clk1=66623ed4f784e5aa4ad2b7361b91f399&upsId=66623ed4f784e5aa4ad2b7361b91f399",
          tag: "洗衣液",
        },
        {
          href: "https://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&keyword=%E8%BF%9E%E8%A1%A3%E8%A3%99&clk1=66623ed4f784e5aa4ad2b7361b91f399&upsId=66623ed4f784e5aa4ad2b7361b91f399",
          tag: "连衣裙",
        },
      ],
    };
  },
  methods: {
    async fetchGoodList() {
      const result = await this.$http.get("/search.json");
      console.log(result.data);
      this.goodList = result.data;
    },
  },
  created() {
    this.fetchGoodList();
  },
  components: {
    goodCard,
  },
};
</script>

<style lang="scss">
@import "../src/assets/scss/tool.scss";
#app {
  .main-header {
    height: 20vh;
    min-height: 130px;
    .info-navs-line {
      padding: 1.2vh 25vw;
      min-height: 20px;
      .info-navs {
        width: 55vw;
        min-width: 900px;
        .header-info {
          width: 220px;
        }
        .header-navs {
          width: 500px;
        }
      }
    }
    .logo-search {
      margin: 3vh 20vw;
      .search {
        .search-edit {
          .search-input {
            border: 3px solid map-get($map: $color, $key: "red");
            height: 3vh;
            width: 30vw;
            min-width: 595px;
            min-height: 33px;
          }
          .search-button {
            border: 0;
            width: 4vw;
            height: 4.1vh;
            min-width: 95px;
            min-height: 41px;
            // color: map-get($map: $color, $key: 'white');
            color: #fff;
          }
        }
        .search-tags-line {
          width: 32vw;
          min-width: 595px;
          padding-right: 4.5vw;
        }
      }
    }
  }
  .main-contain {
    width: 60vw;
    min-width: 1200px;
    padding: 1.2vh 20vw;
    .filter-list {
      border: 1px solid map-get($map: $color, $key: "grey-1");
      width: 62vw;
      min-width: 1200px;
      .filter {
        border-right: 1px solid map-get($map: $color, $key: "grey-1");
        padding: 1vh 2vw;
        .filter-label {
          margin-right: 2.5vw;
        }
        input {
          border: 1px solid map-get($map: $color, $key: "grey-1");
          width: 3vw;
          height: 2vh;
          min-width: 48px;
          min-height: 24px;
          color: map-get($map: $color, $key: "black-1");
        }
      }
    }
    .good-list {
      width: 63vw;
      padding: 3vh 0;
    }
    .page-controll {
      width: 21vw;
      padding: 0 19.5vw;
      .page-btn {
        padding: 1.2vh 1.2vw;
        font-size: 16px;
        background-color: #fff;
        border: 1px solid map-get($map: $color, $key: grey-1);
      }
    }
  }
  .main-footer {
    width: 60vw;
    margin: 0 20vw;
    .guess-search {
      padding: 1.2vh 1.3vw;
      margin: 2vh 0;
      background-color: map-get($map: $color, $key: "white-1");
      border: 1px solid map-get($map: $color, $key: "grey-2");
      font-size: 12px;
      .guess-search-label {
      }
      .guess-search-tag {
        padding: 0 0.5vw;
        border-right: 1px solid map-get($map: $color, $key: "black");
      }
    }
    .link-record {
      margin: 4vh 0 1vh 0;
      padding-right: 8vw;
      a {
        padding: 1.2vh 0.6vw;
        color: map-get($map: $color, $key: "grey");
      }
    }
    .ali-group-list{
      width: 50vw;
      .ali-group{
        margin: 1.2vh 0;
        padding: 0 0.6vw;
        border-right: 1px solid map-get($map: $color, $key: "grey");
      }
    }
  }
}
</style>
