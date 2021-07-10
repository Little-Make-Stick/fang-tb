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
        <div class="filter d-flex">
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
        <div class="good-card-list" v-for="(item,i) in goodList" :key="i">
          <good-card :product="item"></good-card>
        </div>
      </div>
      <div class="page-controll d-flex jc-around">
        <div class="last-page">
          <button class="page-btn"><span >&lt;</span>上一页</button>
        </div>
        <div>……</div>
        <div class="next-page">
           <button  class="page-btn">下一页<span>&gt;</span></button>
        </div>
        <div class="first-page">
           <button  class="page-btn">首页</button>
        </div>
      </div>
    </div>
    <!-- end of main-hander -->
    <div class="main-footer">
      footer
    </div>
    <!-- end of main-hander -->
  </div>
</template>

<script>
import goodCard from '../src/components/productCard';

export default {
  name: "App",
  data() {
    return {
      lowPrice: "￥",
      highPrice: "￥",
      goodList: [],
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
      const result = await this.$http.get('/search.json')
      console.log(result.data);
      this.goodList = result.data;
    },
  },
  created() {
    this.fetchGoodList();
  },
  components:{
    goodCard,
  }
};
</script>

<style lang="scss">
@import "../src/assets/scss/tool.scss";
#app {
  .main-header {
    height: 20vh;
    .info-navs-line {
      padding: 1.2vh 25vw;
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
            border: 0.4vh solid map-get($map: $color, $key: "red");
            height: 3vh;
            width: 30vw;
          }
          .search-button {
            border: 0;
            width: 4vw;
            height: 4.1vh;
            // color: map-get($map: $color, $key: 'white');
            color: #fff;
          }
        }
        .search-tags-line {
          width: 32vw;
          padding-right: 4.5vw;
        }
      }
    }
  }
  .main-contain {
    width: 60vw;
    padding: 1.2vh 20vw;
    .filter-list {
      border: 1px solid map-get($map: $color, $key: "grey-1");
      width: 62vw;
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
          color: map-get($map: $color, $key: "black-1");
        }
      }
    }
    .good-list{
      width: 63vw;
      padding: 3vh 0;
    }
    .page-controll{
      width: 21vw;
      padding: 0 19.5vw;
      .page-btn{
        padding: 1.2vh 1.2vw;
        font-size: 16px;
        background-color: #fff;
        border: 1px solid map-get($map: $color, $key: grey-1);
      }
    }
  }
  .main-footer {
  }
}
</style>
