<template>
  <div class="product-detail">
    <!-- https://item.taobao.com/item.htm?id=620608317909 -->
    <div class="product-detail-header ">
      <!-- <div class="info-navs-line bg-white-1 d-flex jc-center">
        <div class="info-navs d-flex jc-between">
          <div class="header-info d-flex jc-around">
            <div class="address">中国大陆</div>
            <router-link class="login" to="/login">亲，请登录</router-link>
            <router-link class="register" to="/register">免费注册</router-link>
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
      </div> -->
      <top-navs :isAddress="true"></top-navs>
      <div class="logo-search d-flex jc-between ai-center">
        <div class="logo">
          <img src="../assets/image/product-logo.png" />
        </div>
        <div class="more-markets flex-1">
          更多市场
        </div>
        <div class="search d-flex jc-around ai-center">
          <input
            type="text"
            class="search-input"
          >
          <button class="taobao-button bg-red text-white">搜淘宝</button>
          <button class="shop-button bg-red text-white">搜本店</button>
        </div>
      </div>
    </div>
    <!-- end of product-detail-hander -->
    <div class="product-detail-contain">
      <div class="main-brand-navs">
        <div class="brand">LaLuneDuCi</div>
        <div class="navs d-flex">
          <div class="nav-item">所有分类</div>
          <div class="nav-item">首页</div>
        </div>
      </div>
      <div class="main-info d-flex">
        <div class="product-info d-flex">
          <div class="product-info-left">
            <div class="img-module"></div>
            <div class="add-collection d-flex ai-center">
              <span style='font-size:25px;color:rgb(250, 123, 77);font-style:normal;font-weight:normal;'>&#128970;</span>
              <div class="collect-label"> 收藏宝贝</div>
              <div class="collect-num">(32610人气)</div>
            </div>
          </div>
          <div class="product-info-right">
            <div class="product-title product-detail-line">{{product.title}}</div>
            <div class="product-price-comment-sale product-detail-line d-flex ai-center">
              <div class="product-price-label product-label">价格</div>
              <div class="product-price  flex-1">￥{{product.price}}</div>
              <div class="product-comment">
                <div class="comment-num">{{product.comment}}</div>
                <div class="comment-label">累计评论</div>
              </div>
              <div class="product-sale">
                <div class="sale-num">{{product.sale}}</div>
                <div class="comment-label">交易成功</div>
              </div>
            </div>
            <div class="product-discount product-detail-line">
              <div
                class="discounts"
                v-for="(item,i) in product.discount"
                :key="i"
              >
                <div class="discount d-flex ai-center jc-around">
                  <div class="discount-label product-label">优惠</div>
                  <div class="discount-icon d-flex">
                    <div class="discount-type">店铺</div>
                    <div class="discount-txt">优惠券</div>
                  </div>
                  <div class="discount-content">{{item}}</div>
                  <a
                    href="#"
                    class="flex-1"
                  >领取</a>
                </div>

              </div>
            </div>
            <div class="product-deliver product-detail-line d-flex ai-center jc-between">
              <div class="deliver-label product-label">配送</div>
              <div class="deliver-from">{{product.deliver.from}}</div>
              <div class="deliver-to">{{product.deliver.to}}</div>
              <div class="deliver-money">{{product.deliver.money}}</div>
              <div class="deliver-send">{{product.deliver.send}}</div>
            </div>
            <div class="product-size product-detail-line d-flex">
              <div class="size-label product-label">尺码</div>
              <div
                class="sizes"
                v-for="(item ,i) in product.size"
                :key="i"
              >
                <div class="size">{{item}}</div>
              </div>
            </div>
            <div class="product-type product-detail-line d-flex">
              <div class="color-label product-label">颜色分类</div>
              <div
                class="colors"
                v-for="(item ,i) in product.type"
                :key="i"
              >
                <div class="color">{{item}}</div>
              </div>
            </div>
            <div class="selectnum-stock product-detail-line d-flex ai-center">
              <div class="selectnum-label product-label">数量</div>
              <div class="reduce-btn">-</div>
              <div class="select-num">{{product.selectNum}}</div>
              <div class="add-btn">+</div>
              <div class="unit">{{product.unit}}</div>
              <div class="stock">(库存{{product.stock}}{{product.unit}})</div>
            </div>
            <div class="step-pay product-detail-line d-flex">
              <div class="step-pay-label product-label">花呗分期</div>
              <div class="step-pay-content d-flex flex-wrap">
                <div
                  class="steps-fee"
                  v-for="(item,i) in product.stepPay"
                  :key="i"
                >
                  <div class="step-fee">
                    <div class="step">{{item.step}}</div>
                    <div class="fee">{{item.fee}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="buy-addtocar product-detail-line d-flex">
              <div class="buy-btn">立即购买</div>
              <div class="addtocar-btn">进入购物车</div>
            </div>
            <div class="commission-payways product-detail-line">
              <div class="product-commission d-flex">
                <div class="commission-label product-label">承诺</div>
                <div
                  class="commissions"
                  v-for="(item,i) in product.commission"
                  :key="i"
                >
                  <div class="commission">{{item}}</div>
                </div>
              </div>
              <div class="product-payways d-flex">
                <div class="payways-label product-label">支付</div>
                <div
                  class="payways"
                  v-for="(item,i) in product.payways"
                  :key="i"
                >
                  <div class="payway">{{item}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="shopInfo-userHistory d-flex flex-col">
          <div class="shop-info">
            <div class="king-seller-img">
              <div class="king-years">连续{{shop.kingYears}}期</div>
              <img src="../assets/image/king-seller-icon.png" />
            </div>
            <div class="shop-age"></div>
            <div class="shop-name">{{shop.name}}</div>
            <div class="shop-credit d-flex shop-info-line">
              <div class="credit-label shop-label">信誉：</div>
              <div
                class="credits"
                v-for="i in shop.credit"
                :key="i"
              >
                <div class="credit"></div>
              </div>
            </div>
            <div class="shop-seller d-flex shop-info-line">
              <div class="seller-label shop-label">掌柜：</div>
              <div class="seller">{{shop.seller}}</div>
            </div>
            <div class="shop-contact d-flex shop-info-line">
              <div class="contact-label shop-label">联系：</div>
              <div class="contact"></div>
            </div>
            <div class="shop-intelligence d-flex shop-info-line">
              <div class="intelligence-label shop-label">资质：</div>
              <div class="seller-icon"></div>
              <div class="deposit-icon"></div>
              <div class="deposit-money">{{shop.deposit}}</div>
            </div>
            <div class="shop-marks shop-info-line">

            </div>
            <div class="shop-btns d-flex jc-center shop-info-line">
              <button class="entershop-btn">进入店铺</button>
              <button class="collectshop-btn">收藏店铺</button>
            </div>

          </div>
          <div class="user-history flex-1">
            <div class="user-history-label">看了又看</div>
            <div class="history-products-module d-flex flex-wrap jc-around">
              <div
                class="history-products"
                v-for="(item,i) in shop.history"
                :key="i"
              >
                <div class="history-product">
                  <a :href="item.href">
                    <img
                      :src="item.img"
                      alt=""
                    />
                    <div class="price">{{item.price}}</div>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="other-info d-flex">
        <div class="other-info-left">
          <div class="search-from-shop d-flex ai-center">
            <input
              class="search-input flex-1"
              placeholder="搜本店"
            />
            <button class="search-btn"><i class="iconfont icon-sousuo-copy"></i></button>
          </div>
          <side-card
            class="filter-from-shop"
            title="本店搜索"
          >
            <div class="keyword  d-flex ai-center">
              <div class="keyword-label">关键词</div>
              <div class="keyword-edit">
                <input type="text">
              </div>
            </div>
            <div class="price-range d-flex ai-center">
              <div class="price-range-label">价格</div>
              <div class="price-range-edit">
                <input type="text">
                <input type="text">
              </div>
            </div>
            <div class="filter d-flex ai-center">
              <div class="filter-label"></div>
              <button class="filter-btn">搜索</button>
            </div>
          </side-card>
          <side-card
            class="product-category"
            title="宝贝分类"
          >
            <div
              class="fold-navs"
              v-for="(item,i) in categories"
              :key="i"
            >
              <fold-navs
                :mainTitle="item.mainTitle"
                :subTitle="item.subTitle"
              ></fold-navs>
            </div>
          </side-card>
          <side-card
            class="product-rank"
            title="宝贝排行榜"
          >
            <div class="rank-navs d-flex ai-center">
              <div class="sale-rank-navs">销售量</div>
              <div class="collect-rank-navs">收藏数</div>
            </div>
            <div
              class="sale-rank"
              v-if="isSaleRank"
            >
              <div
                class="sale-rank-products"
                v-for="(item,i) in saleRank"
                :key="i"
              >
                <a :href="item.href">
                  <div class="sale-rank-product d-flex">
                    <div class="product-left">
                      <img
                        :src="item.img"
                        alt=""
                      >
                    </div>
                    <div class="product-right flex-1">
                      <div class="product-title">{{item.title}}</div>
                      <div class="product-price">{{item.price}}</div>
                      <div class="sale-num">已售出{{item.saleNum}}件</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              class="collect-rank"
              v-else
            >
              <div
                class="collect-rank-products"
                v-for="(item,i) in collectRank"
                :key="i"
              >
                <a :href="item.href">
                  <div class="collect-rank-product d-flex">
                    <div class="product-left">
                      <img
                        :src="item.img"
                        alt=""
                      >
                    </div>
                    <div class="product-right flex-1">
                      <div class="product-title">{{item.title}}</div>
                      <div class="product-price">{{item.price}}</div>
                      <div class="collect-num">已收藏{{item.collectNum}}笔</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </side-card>
          <side-card
            class="product-recomment"
            title="宝贝推荐"
            :isMore="true"
          >
            <div
              class="products"
              v-for="(item,i) in recomment"
              :key="i"
            >
              <div class="product">
                <a
                  class="product-link"
                  :href="item.href"
                >
                  <img
                    class="product-img"
                    :src="item.img"
                    alt=""
                  >
                  <div class="product-title">{{item.title}}</div>
                  <div class="product-price">{{item.price}}</div>
                </a>
              </div>
            </div>
          </side-card>
        </div>
        <div class="other-info-center">
          <div class="product-decoration-navs">
            <router-link :to="`/product/detail/`+this.$route.params.id+`/decoration`">宝贝详情</router-link>
            <router-link :to="`/product/detail/`+this.$route.params.id+`/review`">累计评价</router-link>
            <router-link :to="`/product/detail/`+this.$route.params.id+`/service`">专享服务</router-link>
          </div>
          <div class="product-decoration-view">
            <router-view></router-view>
          </div>
          <div class="fixed-decoration">
            <div class="price-decoration">
              <div class="title">价格说明</div>
              <div class="sub-title1">划线价格</div>
              <div class="sub-content1">指商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，并非原价，仅供参考。</div>
              <div class="sub-title2">未划线价格</div>
              <div class="sub-content2">
                指商品的实时标价，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分等发生变化，最终以订单结算页价格为准。<br/><br/>

                商家详情页（含主图）以图片或文字形式标注的一口价、促销价、优惠价等价格可能是在使用优惠券、满减或特定优惠活动和时段等情形下的价格，具体请以结算页面的标价、优惠条件或活动规则为准。<br/><br/>

                此说明仅当出现价格比较时有效，具体请参见《淘宝价格发布规范》。若商家单独对划线价格进行说明的，以商家的表述为准。</div>
            </div>
            <div class="tips">
              <div class="tip1 d-flex">
                <div class="label1">安全提示：</div>
                <div class="content1">
                  交易中请勿使用阿里旺旺以外的聊天工具沟通，不要接收可疑文件和不要点击不明来源的链接，支付前核实好域名和支付详情。 淘宝不会以订单有问题，让您提供任何银行卡、密码、手机验证码！遇到可疑情况可在钱盾“诈骗举报”中进行举报, 安全推荐<br />

                  推荐安全软件： 钱盾钱盾 UC浏览器UC浏览器
                </div>
              </div>
              <div class="tip2 d-flex">
                <div class="label2">内容申明：</div>
                <div class="content2">淘宝为第三方交易平台及互联网信息服务提供者，淘宝（含网站、客户端等）所展示的商品/服务的标题、价格、详情等信息内容系由店铺经营者发布，其真实性、准确性和合法性均由店铺经营者负责。淘宝提醒用户购买商品/服务前注意谨慎核实。如用户对商品/服务的标题、价格、详情等任何信息有任何疑问的，请在购买前通过阿里旺旺与店铺经营者沟通确认；淘宝存在海量店铺，如用户发现店铺内有任何违法/侵权信息，请立即向淘宝举报并提供有效线索。</div>
              </div>
            </div>
          </div>
        </div>
        <div class="other-info-right">
          
        </div>
      </div>
    </div>
    <div class="product-detail-footer">
      <div class="ali-group-list"></div>
      <div class="services"></div>
      <div class="records"></div>
      <div class="credentials"></div>
    </div>
  </div>
</template>

<script>
import topNavs from "../components/topNavs.vue";
import sideCard from "../components/sideCard.vue";
import foldNavs from "../components/foldNavs.vue";
export default {
  data() {
    return {
      isSaleRank: true,
      product: {
        pictures: [],
        title: "【LaluneDuCiel】LLDC 设计感特殊版型各种穿法短款小西装外套女",
        price: "389.00",
        comment: "1442",
        sale: "72",
        discount: [
          "30元店铺优惠券，满998元可用",
          "20元店铺优惠券，满698元可用",
        ],
        deliver: {
          from: "浙江杭州",
          to: "广东深圳龙岗区",
          money: "快递 ￥10.00",
          send: "付款后45天内发货",
        },
        size: ["S", "M"],
        type: ["黑色"],
        selectNum: "1",
        unit: "件",
        stock: "2491",
        stepPay: [
          { step: "￥129.66x3期", fee: "(0手续费)" },
          { step: "￥64.83x6期", fee: "(0手续费)" },
          { step: "￥34.84x12期", fee: "(含手续费)" },
          { step: "￥18.63x24期", fee: "(含手续费)" },
        ],
        commission: ["7天无理由"],
        payways: ["蚂蚁花呗", "信用卡支付", "集分宝"],
      },
      shop: {
        kingYears: "10",
        name: "LaLuneDuCiel",
        seller: "莫莫莫莫莫0327",
        credit: 3,
        deposit: "1012元",
        marks: {
          description: {
            mark: 4.8,
            equal: true,
            add: false,
            reduce: false,
          },
          service: {
            mark: 4.8,
            equal: false,
            add: false,
            reduce: true,
          },
          logistics: {
            mark: 4.8,
            equal: false,
            add: false,
            reduce: true,
          },
        },
        history: [
          {
            img: "http://img.alicdn.com/bao/uploaded/O1CN01DymBBW1n44t4DdfLj_!!0-item_pic.jpg_80x80.jpg",
            href: "https://item.taobao.com/item.htm?id=636104255869&scm=1007.12144.95220.42296_0_0&pvid=46f9b909-1772-44c3-b50b-ef9d81ee075b&utparam=%7B%22x_hestia_source%22%3A%2242296%22%2C%22x_object_type%22%3A%22item%22%2C%22x_hestia_subsource%22%3A%22default%22%2C%22x_mt%22%3A0%2C%22x_src%22%3A%2242296%22%2C%22x_pos%22%3A1%2C%22wh_pid%22%3A-1%2C%22x_pvid%22%3A%2246f9b909-1772-44c3-b50b-ef9d81ee075b%22%2C%22scm%22%3A%221007.12144.95220.42296_0_0%22%2C%22x_object_id%22%3A636104255869%7D",
            price: "￥285.00",
          },
          {
            img: "http://img.alicdn.com/bao/uploaded/O1CN01RR0LQu1n44sym1POF_!!0-item_pic.jpg_80x80.jpg",
            href: "https://item.taobao.com/item.htm?id=648014243343&scm=1007.12144.95220.42296_0_0&pvid=46f9b909-1772-44c3-b50b-ef9d81ee075b&utparam=%7B%22x_hestia_source%22%3A%2242296%22%2C%22x_object_type%22%3A%22item%22%2C%22x_hestia_subsource%22%3A%22default%22%2C%22x_mt%22%3A0%2C%22x_src%22%3A%2242296%22%2C%22x_pos%22%3A2%2C%22wh_pid%22%3A-1%2C%22x_pvid%22%3A%2246f9b909-1772-44c3-b50b-ef9d81ee075b%22%2C%22scm%22%3A%221007.12144.95220.42296_0_0%22%2C%22x_object_id%22%3A648014243343%7D",
            price: "￥385.00",
          },
          {
            img: "http://img.alicdn.com/bao/uploaded/O1CN013nQL251n44szbNrlJ_!!0-item_pic.jpg_80x80.jpg",
            href: "https://item.taobao.com/item.htm?id=638499154653&scm=1007.12144.95220.42296_0_0&pvid=46f9b909-1772-44c3-b50b-ef9d81ee075b&utparam=%7B%22x_hestia_source%22%3A%2242296%22%2C%22x_object_type%22%3A%22item%22%2C%22x_hestia_subsource%22%3A%22default%22%2C%22x_mt%22%3A0%2C%22x_src%22%3A%2242296%22%2C%22x_pos%22%3A3%2C%22wh_pid%22%3A-1%2C%22x_pvid%22%3A%2246f9b909-1772-44c3-b50b-ef9d81ee075b%22%2C%22scm%22%3A%221007.12144.95220.42296_0_0%22%2C%22x_object_id%22%3A638499154653%7D",
            price: "￥359.00",
          },
          {
            img: "http://img.alicdn.com/bao/uploaded/O1CN01DETqpf1n44t4DcrUq_!!0-item_pic.jpg_80x80.jpg",
            href: "https://item.taobao.com/item.htm?id=625840278088&scm=1007.12144.95220.42296_0_0&pvid=46f9b909-1772-44c3-b50b-ef9d81ee075b&utparam=%7B%22x_hestia_source%22%3A%2242296%22%2C%22x_object_type%22%3A%22item%22%2C%22x_hestia_subsource%22%3A%22default%22%2C%22x_mt%22%3A0%2C%22x_src%22%3A%2242296%22%2C%22x_pos%22%3A4%2C%22wh_pid%22%3A-1%2C%22x_pvid%22%3A%2246f9b909-1772-44c3-b50b-ef9d81ee075b%22%2C%22scm%22%3A%221007.12144.95220.42296_0_0%22%2C%22x_object_id%22%3A625840278088%7D",
            price: "￥329.00",
          },
        ],
      },
      categories: [
        {
          mainTitle: "查看所有宝贝",
          subTitle: ["按销量", "按新品", "按价格", "按收藏"],
        },
        { mainTitle: "La Lune Du Ciel", subTitle: ["VOL1"] },
        { mainTitle: "毛衣/针织衫", subTitle: [] },
        { mainTitle: "长袖T/打底衫", subTitle: [] },
        { mainTitle: "开衫/外套", subTitle: [] },
        { mainTitle: "吊带/背心", subTitle: [] },
        { mainTitle: "裙装", subTitle: [] },
        { mainTitle: "裤装", subTitle: [] },
        { mainTitle: "风衣", subTitle: [] },
        { mainTitle: "棉服/羽绒服", subTitle: [] },
        { mainTitle: "衬衣/衬衫", subTitle: [] },
        { mainTitle: "短袖T恤", subTitle: [] },
        { mainTitle: "卫衣", subTitle: [] },
        { mainTitle: "配饰", subTitle: [] },
        { mainTitle: "套装", subTitle: [] },
        { mainTitle: "西装", subTitle: [] },
      ],
      saleRank: [
        {
          href: "https://item.taobao.com/item.htm?spm=2013.1.w4023-22731342712.3.51025bb9taxCuO&id=642220726213",
          title: "【La lune Du Ciel】LLDC 设计感不规则黑色性感露肩开叉连衣裙女",
          img: "https://img.alicdn.com/bao/uploaded/i1/2598715035/O1CN014STeu61n44rXXBWVP_!!2598715035.jpg_40x40.jpg",
          price: "￥349.00",
          saleNum: "372",
        },
        {
          href: "https://item.taobao.com/item.htm?spm=2013.1.w4023-22731342712.6.51025bb9taxCuO&id=641495436482",
          title: "【La lune Du Ciel】LLDC 小众设计拼接撞色格纹抹胸连衣裙仙女裙",
          img: "https://img.alicdn.com/bao/uploaded/i3/2598715035/O1CN01iWG2EA1n44rXeu7VD_!!2598715035.jpg_40x40.jpg",
          price: "￥358.00",
          saleNum: "332",
        },
        {
          href: "https://item.taobao.com/item.htm?spm=2013.1.w4023-22731342712.9.51025bb9taxCuO&id=643339165703",
          title: "【LaluneDuCiel】LLDC 小众设计感不规则单肩系带背心女性感上衣",
          img: "https://img.alicdn.com/bao/uploaded/i4/2598715035/O1CN01izNdp71n44rsq5m4B_!!2598715035.jpg_40x40.jpg",
          price: "￥158.00",
          saleNum: "319",
        },
        {
          href: "https://item.taobao.com/item.htm?spm=2013.1.w4023-22731342712.12.51025bb9taxCuO&id=638732949431",
          title: '【LaluneDuCiel】LLDC "戴燕妮"同款设计感白色露肩绑带连衣裙女',
          img: "https://img.alicdn.com/bao/uploaded/i3/2598715035/O1CN01srl8sJ1n44qm5j3SV_!!2598715035.jpg_40x40.jpg",
          price: "￥368.00",
          saleNum: "288",
        },
        {
          href: "https://item.taobao.com/item.htm?spm=2013.1.w4023-22731342712.15.51025bb9taxCuO&id=639071162444",
          title: "【LaluneDuCiel】LLDC 设计感小碎花短款衬衫女早春新款复古上衣",
          img: "https://img.alicdn.com/bao/uploaded/i3/2598715035/O1CN01XvH0t81n44qxM4fJL_!!2598715035.jpg_40x40.jpg",
          price: "￥269.00",
          saleNum: "285",
        },
      ],
      collectRank: [
        {
          href: "#",
          title: "【La lune Du Ciel】LLDC原创设计早春高级芥末绿小众毛边短外套",
          img: "https://img.alicdn.com/bao/uploaded//i1/2598715035/O1CN01Q81nkp1n44t0QlvM0_!!0-item_pic.jpg_120x120.jpg",
          price: "￥388.00",
          collectNum: "45216",
        },
        {
          href: "#",
          title: "【La lune Du Ciel】LLDC 进口超柔软毛呢盐系蓝白格高腰半身短裙",
          img: "https://img.alicdn.com/bao/uploaded//i4/2598715035/O1CN01cCNuIb1n44szr41gj_!!0-item_pic.jpg_120x120.jpg",
          price: "￥339.00",
          collectNum: "41402",
        },
        {
          href: "#",
          title: "【LaluneDuCiel】LLDC 设计感特殊版型各种穿法短款小西装外套女",
          img: "https://img.alicdn.com/bao/uploaded//i1/2598715035/O1CN0116FIx21n44szvMHdz_!!0-item_pic.jpg_120x120.jpg",
          price: "￥389.00",
          collectNum: "32972",
        },
        {
          href: "#",
          title: "【LaluneDuCiel】LLDC 韩剧女主角轻薄透气显白衬衫女碎花上衣春",
          img: "https://img.alicdn.com/bao/uploaded//i3/2598715035/O1CN010OekI81n44sxEgPn1_!!0-item_pic.jpg_120x120.jpg",
          price: "￥258.00",
          collectNum: "32532",
        },
        {
          href: "#",
          title: "【La lune Du Ciel】LLDC 早春手工毛边高级成衣抹胸裙女连衣裙子",
          img: "https://img.alicdn.com/bao/uploaded//i1/2598715035/O1CN01b1Fx4X1n44t1XEAQW_!!0-item_pic.jpg_120x120.jpg",
          price: "￥329.00",
          collectNum: "31190",
        },
      ],
      recomment: [
        {
          href: "https://item.taobao.com/item.htm?id=617619121548",
          img: "https://img.alicdn.com/bao/uploaded/i1/2598715035/O1CN01SpM45e1n44nNb8v2K_!!2598715035.jpg_180x180.jpg",
          title: "现货【La lune Du Ciel】LLDC ins风性感紧身网纱时尚显瘦套装女",
          price: "318.00",
        },
        {
          href: "https://item.taobao.com/item.htm?id=617620129992",
          img: "https://img.alicdn.com/bao/uploaded/i3/2598715035/O1CN01RMFqgB1n44no5m0wU_!!2598715035-0-lubanu-s.jpg_180x180.jpg",
          title: "现货【La lune Du Ciel】LLDC气质挂脖 塑身骑行裤性感开叉裙套装",
          price: "229.00",
        },
        {
          href: "https://item.taobao.com/item.htm?id=620608317909",
          img: "https://img.alicdn.com/bao/uploaded/i4/2598715035/O1CN01ifKICS1n44nlJ110q_!!2598715035.jpg_180x180.jpg",
          title: "【LaluneDuCiel】LLDC 设计感特殊版型各种穿法短款小西装外套女",
          price: "389.00",
        },
        {
          href: "https://item.taobao.com/item.htm?id=620608837009",
          img: "https://img.alicdn.com/bao/uploaded/i3/2598715035/O1CN01hSxC6z1n44nj71nc2_!!2598715035.jpg_180x180.jpg",
          title: "【LaluneDuCiel】LLDC 立体裁剪高腰直筒西装裤女春夏休闲长裤子",
          price: "329.00",
        },
        {
          href: "https://item.taobao.com/item.htm?id=620880086134",
          img: "https://img.alicdn.com/bao/uploaded/i3/2598715035/O1CN01vNxSzP1n44ntZ6DjH_!!2598715035-0-lubanu-s.jpg_180x180.jpg",
          title: "【LaluneDuCiel】LLDC 高级小众抹胸裙子显瘦夏款仙女连衣裙子",
          price: "349.00",
        },
        {
          href: "https://item.taobao.com/item.htm?id=620880246264",
          img: "https://img.alicdn.com/bao/uploaded/i1/2598715035/O1CN0123Ogeo1n44nXqszdy_!!2598715035.jpg_180x180.jpg",
          title: "现货【LaluneDuCiel】LLDC原创设计两色夏季bi备刺绣Logo背心短款",
          price: "149.00",
        },
        {
          href: "https://item.taobao.com/item.htm?id=620881370675",
          img: "https://img.alicdn.com/bao/uploaded/i1/2598715035/O1CN01HVD1b41n44nQacBcR_!!2598715035.jpg_180x180.jpg",
          title: "现货【LaluneDuCiel】LLDC 设计感甜美可爱碎花泡泡袖上衣短款",
          price: "219.00",
        },
        {
          href: "https://item.taobao.com/item.htm?id=621148219841",
          img: "https://img.alicdn.com/bao/uploaded/i3/2598715035/O1CN01dWBZmx1n44nkZyd0O_!!2598715035.jpg_180x180.jpg",
          title: "现货【LaluneDuCiel】LLDC 白色夏日透气拼接高腰阔腿裤女休闲裤",
          price: "289.00",
        },
        {
          href: "https://item.taobao.com/item.htm?id=621149403645",
          img: "https://img.alicdn.com/bao/uploaded/i3/2598715035/O1CN01VQeyIH1n44nXsTXx4_!!2598715035.jpg_180x180.jpg",
          title: "现货【LaluneDuCiel】LLDC 小众设计感独家修身性感两穿吊带裙",
          price: "389.00",
        },
        {
          href: "https://item.taobao.com/item.htm?id=622494936879",
          img: "https://img.alicdn.com/bao/uploaded/i2/2598715035/O1CN01qdAh7e1n44nlLHu1D_!!2598715035.jpg_180x180.jpg",
          title: "现货【LaluneDuCiel】LLDC 重工设计夏天的最后一条小白裙可爱裙",
          price: "398.00",
        },
        {
          href: "https://item.taobao.com/item.htm?id=622496284325",
          img: "https://img.alicdn.com/bao/uploaded/i1/2598715035/O1CN01lcGSgs1n44nnOa2A6_!!2598715035.jpg_180x180.jpg",
          title: "现货【LaluneDuCiel】LLDC 设计感茶艺大赛冠军无辜可爱蓬蓬裙",
          price: "398.00",
        },
        {
          href: "https://item.taobao.com/item.htm?id=622496764156",
          img: "https://img.alicdn.com/bao/uploaded/i4/2598715035/O1CN01Bmy5cQ1n44nn5aQVO_!!2598715035.jpg_180x180.jpg",
          title: "【LaluneDuCiel】LLDC 韩剧女主角轻薄透气显白衬衫女碎花上衣春",
          price: "258.00",
        },
        {
          href: "https://item.taobao.com/item.htm?id=623357915382",
          img: "https://img.alicdn.com/bao/uploaded/i1/2598715035/O1CN01nRVwi61n44npwrYBI_!!2598715035.jpg_180x180.jpg",
          title: "【LaluneDuCiel】LLDC 超嗲百搭两件套有弹力超薄透气长袖打底衫",
          price: "228.00",
        },
        {
          href: "https://item.taobao.com/item.htm?id=624236584037",
          img: "https://img.alicdn.com/bao/uploaded/i3/2598715035/O1CN01BNjC5M1n44ntr1LvG_!!2598715035-0-lubanu-s.jpg_180x180.jpg",
          title: "【LaluneDuCiel】LLDC 透视斜扣多穿法弹力贴身短款长袖打底衫",
          price: "199.00",
        },
        {
          href: "https://item.taobao.com/item.htm?id=624544481366",
          img: "https://img.alicdn.com/bao/uploaded/i1/2598715035/O1CN01zHsMyl1n44oIGcBbU_!!2598715035-0-lubanu-s.jpg_180x180.jpg",
          title: "【LaluneDuCiel】LLDC小众设计感复古os版型袖中开叉帅过男友西装",
          price: "419.00",
        },
        {
          href: "https://item.taobao.com/item.htm?id=624545445768",
          img: "https://img.alicdn.com/bao/uploaded/i1/2598715035/O1CN01bmv3vT1n44oAWXAdC_!!2598715035-0-lubanu-s.jpg_180x180.jpg",
          title: "【LaluneDuCiel】LLDC小众设计立体镂空剪裁暗黑先锋西装夹克外套",
          price: "399.00",
        },
      ],
      
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
  methods: {},
  components: {
    topNavs,
    sideCard,
    foldNavs,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/tool.scss";
.product-label {
  width: 3.5vw;
  min-width: 55px;
}
.product-detail-line {
  padding: 10px 8px;
}
.shop-info-line {
  padding: 5px 10px;
}
.shop-label {
  width: 2vw;
  min-width: 28px;
}
.product-detail {
  .product-detail-header {
    top-navs {
    }
    .logo-search {
      width: 61vw;
      height: 8vh;
      padding: 0 310px;
      min-width: 1300px;
      min-height: 80px;
      .logo {
        img {
          width: 100px;
          height: 45px;
        }
      }
      .more-markets {
        font-size: 13px;
        margin: auto 20px;
      }
      .search {
        input {
          width: 10vw;
          height: 3.1vh;
          min-width: 200px;
          min-height: 29px;
          border: 1px solid map-get($map: $color, $key: "primary");
        }
        button {
          height: 3.6vh;
          min-height: 33px;
          padding: 0 15px;
          white-space: 1px;
          &.taobao-button {
            border: 1px solid map-get($map: $color, $key: "primary");
            background-color: map-get($map: $color, $key: "primary");
            color: #fff;
          }
          &.shop-button {
            border: 1px solid map-get($map: $color, $key: "primary-1");
            background-color: map-get($map: $color, $key: "primary-2");
            color: #f22e00;
            margin-left: 8px;
          }
        }
      }
    }
  }
  .product-detail-contain {
    .main-brand-navs {
      background-image: url("../assets/image/brand-navs.png");
      background-repeat: repeat-x;
      width: calc(100vw - 200px * 2);
      padding: 0 200px;

      .brand {
        height: 120px;
        padding: 0 200px;
        line-height: 120px;
        font-weight: bold;
        font-size: 24px;
        white-space: 1.5px;
      }
      .navs {
        height: 30px;
        line-height: 30px;
        padding: 0 200px;

        .nav-item {
          padding: 0 20px;
          border-right: 0.5px solid #b1c8d7;
          color: #fff;
          &:first-child {
            padding-left: 0;
          }
        }
      }
    }
    .main-info {
      .product-info {
        border: 1px solid map-get($map: $color, $key: "grey-1");
        margin-top: 40px;
        margin-left: 380px;
        padding: 30px;
        width: 38vw;
        min-width: 940px;
        .product-info-left {
          .img-module {
            min-width: 400px;
            min-height: 469px;
          }
          .add-collection {
            .collect-label {
              padding: 0 15px;
            }
          }
        }
        .product-info-right {
          min-width: 518px;
          font-size: 12px;
          line-height: 25px;
          .product-title {
            font-size: 16px;
            font-weight: 700;
            white-space: 5px;
            line-height: 20px;
          }
          .product-price-comment-sale {
            background-color: #fff2e8;
            .product-price {
              font-weight: bold;
              font-size: 24px;
              color: map-get($map: $color, $key: "primary");
              white-space: 2px;
            }
            .product-comment {
              text-align: center;
              width: 2.5vw;
              min-width: 70px;
              .comment-num {
                font-size: 18px;
              }
            }
            .product-sale {
              text-align: center;
              width: 2.5vw;
              min-width: 70px;
              .sale-num {
                font-size: 18px;
              }
            }
          }
          .product-discount {
            background-color: #fff9f5;
            .discount-icon {
              line-height: 14px;
              color: map-get($map: $color, $key: "primary");
              .discount-type {
                padding: 1px;
                border-style: solid dashed;
                border-width: 1px;
                border-color: map-get($map: $color, $key: "primary");
              }
              .discount-txt {
                padding: 1px;
                border-style: solid dashed;
                border-width: 1px;
                border-color: map-get($map: $color, $key: "primary");
              }
            }
            .discount-content {
              padding: 0 5px;
            }
            a {
              color: map-get($map: $color, $key: "primary");
              text-decoration: underline;
            }
          }
          .product-size {
            .size {
              border: 1px solid map-get($map: $color, $key: "grey-1");
              padding: 0 5px;
              margin: 0 5px;
            }
          }
          .product-type {
            .color {
              border: 2px solid map-get($map: $color, $key: "primary");
              color: map-get($map: $color, $key: "primary");
              padding: 0 5px;
            }
          }
          .selectnum-stock {
            .reduce-btn,
            .add-btn {
              border: 1px solid map-get($map: $color, $key: "grey-1");
              width: 30px;
              text-align: center;
              background-color: map-get($map: $color, $key: "grey-2");
            }
            .select-num {
              border: 1px solid map-get($map: $color, $key: "grey-1");
              width: 50px;
              text-align: center;
            }
            .unit {
              margin: 0 3px;
            }
          }
          .step-pay {
            .step-fee {
              width: 180px;
              padding: 15px 0;
              text-align: center;
              margin: 8px 10px;
              border: 1px solid map-get($map: $color, $key: "black");
            }
          }
          .buy-addtocar {
            font-size: 16px;
            white-space: 10px;
            .buy-btn {
              border: 1px solid map-get($map: $color, $key: "primary-1");
              background-color: map-get($map: $color, $key: "primary-2");
              color: #f22e00;
              padding: 5px 20px;
              margin-right: 20px;
            }
            .addtocar-btn {
              border: 1px solid map-get($map: $color, $key: "primary");
              background-color: map-get($map: $color, $key: "primary");
              padding: 5px 20px;
              color: #fff;
            }
          }
          .commission-payways {
            .product-payways {
              .payway {
                margin: 0 5px;
                &:first-child {
                  margin-left: 0;
                }
              }
            }
          }
        }
      }
      .shopInfo-userHistory {
        width: 10.25vw;
        min-width: 198px;
        margin-top: 40px;
        .shop-info {
          border: 1px solid #ffe2a3;
          padding: 0 0 20px 0;
          .king-seller-img {
            background-image: url("../assets/image/king-seller-bg.png");
            min-width: 200px;
            min-height: 62px;
            background-size: 200px 62px;
            background-position: cover;
            background-repeat: no-repeat;
            position: relative;
            img {
              position: absolute;
              right: 5px;
              top: -10px;
            }
            .king-years {
              color: map-get($map: $color, $key: "white");
              padding: 1px 4px;
              background-color: map-get($map: $color, $key: "primary");
              border-radius: 5px;
              display: inline-block;
              position: absolute;
              right: 50px;
              top: 10px;
            }
          }
          .shop-age {
          }
          .shop-name {
            padding: 5px 10px;
            font-weight: bold;
          }
          .shop-credit {
            .credit {
              background: url("../assets/image/credit-icon-gif.gif") no-repeat -1px -4px;
              width: 20px;
              height: 16px;
            }
          }
          .shop-seller {
          }
          .shop-contact {
            .contact {
              background: url("../assets/image/spirit-icons-gif.gif") no-repeat -1px -4px;
              width: 66px;
              height: 16px;
            }
          }
          .shop-intelligence {
            .seller-icon {
              background: url("../assets/image/spirit-icons.png") no-repeat 0 -20px;
              width: 16px;
              height: 16px;
              margin-right: 5px;
            }
            .deposit-icon {
              background: url("../assets/image/spirit-icons.png") no-repeat -280px -80px;
              width: 16px;
              height: 16px;
            }
            .deposit-money {
              border: 1px solid #00ba97;
              color: #00ba97;
            }
          }
          .shop-marks {
          }
          .shop-btns {
            button {
              border: 1px solid #e9e9e9;
              background-color: #fafafa;
              padding: 4px 16px;
              font-size: 12px;
              &:first-child {
                margin-right: 8px;
              }
            }
          }
        }
        .user-history {
          border: 1px solid map-get($map: $color, $key: "grey-1");
          .user-history-label {
            padding: 5px 4px;
            font-weight: bold;
          }
        }
      }
    }
    .other-info {
      margin: 20px 380px;
      .other-info-left {
        width: 10.42vw;
        min-width: 190px;
        .search-from-shop {
          border: 1px solid map-get($map: $color, $key: "grey-1");
          background-color: map-get($map: $color, $key: "grey-2");
          height: 35px;
          padding: 3px 5px;
          input {
            height: 22px;
            width: 50px;
          }
          button {
            height: 28px;
            border: 0;
            background-color: map-get($map: $color, $key: "primary");
            i {
              all: unset;
              background-color: map-get($map: $color, $key: "primary");
              color: #fff;
            }
          }
        }
        .filter-from-shop {
        }
        .product-category {
        }
        .product-rank {
        }
        .product-recomment {
        }
      }
      .other-info-center {
        .product-decoration-navs{
          background-color: map-get($map: $color, $key: 'white-1');
          a{
            padding: 10.5px 20px;
            line-height: 40px;
            font-size: 15px;
            border-right: 1px solid map-get($map: $color, $key: 'grey-2');
            &:active{
              border-top: 1px solid map-get($map: $color, $key: 'primary');
              background-color: map-get($map: $color, $key: 'white');
            }
          }
        }
        .product-decoration-view{}
        .fixed-decoration{
          width: 700px;
          .price-decoration{
            font-size: 12px;
            font-weight: 300;
            line-height: 20px;
            padding: 5px 10px;
            .title{
              font-size: 16px;
              font-weight: 600;
              padding: 5px 10px;
              border-bottom: 1px solid map-get($map: $color, $key: 'grey-2');
            }
            .sub-title1,.sub-title2{
              color: map-get($map: $color, $key: 'primary');
            }
            .sub-content1,.sub-content2{}
          }
          .tips{
            margin: 5px 10px;
            padding: 12px 8px;
            border: 1px solid map-get($map: $color, $key: 'primary-1');
            background-color: map-get($map: $color, $key: 'white-2');
            line-height: 25px;
            word-spacing: 2px;
            .tip1,.tip2{
              .label1,.label2{
                white-space: nowrap;
              }
              .content1,.content2{}
            }
          }
        }
      }
      .other-info-right {
      }
    }
  }
  .product-detail-footer {
    .ali-group-list {
    }
    .services {
    }
    .records {
    }
    .credentials {
    }
  }
}
</style>