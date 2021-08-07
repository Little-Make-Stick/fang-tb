<template>
  <div class="product-review">
    <div class="title">
      <div class="title-content">宝贝评价</div>
    </div>
    <div class="personal-tags d-flex">
      <div class="personal-tags-label">大家印象：</div>
      <div
        class="tags"
        v-for="(item,i) in tags"
        :key="i"
      >
        <div class="tag">{{item.tag}}({{item.num}})</div>
      </div>
    </div>
    <div class="filter-btns d-flex ai-center jc-between">
      <div class="radios-btn d-flex ai-center">
        <div class="all-radio d-flex ai-center">
          <input
            type="radio"
            value="all"
          >全选
        </div>
        <div class="img-radio d-flex ai-center">
          <input
            type="radio"
            value="img"
          >图片
        </div>
        <div class="add-radio d-flex ai-center">
          <input
            type="radio"
            value="add"
          >追评
        </div>
        <div class="good-radio d-flex ai-center">
          <input
            type="radio"
            value="good"
          >好评
        </div>
        <div class="normal-radio d-flex ai-center">
          <input
            type="radio"
            value="normal"
          >中评
        </div>
        <div class="lost-radio d-flex ai-center">
          <input
            type="radio"
            value="lost"
          >差评
        </div>
      </div>
      <div class="orders-search">
        <select
          name="orders"
          id=""
        >
          <option value="recomment">推荐排序</option>
          <option value="new">最新评价</option>
        </select>
      </div>
    </div>
    <div class="review-module">
      <div
        class="reviews"
        v-for="(item,i) in reviews"
        :key="i"
      >
        <div class="review d-flex">
          <div class="user-info">
            <img
              class="user-photo"
              src="../assets/image/user.jpg"
              width="48"
              height="48"
            />
            <div class="user-name">{{item.user}}</div>
          </div>
          <div class="review-info d-flex flex-col">
            <div class="review-content">{{item.review}}</div>
            <div
              class="review-imgs d-flex"
              v-if="item.imgs.length"
            >
              <div
                class="imgs"
                v-for="(item1,i1) in item.imgs"
                :key="i1"
              >
                <img
                  :src="item1"
                  width="40"
                  height="40"
                  alt=""
                />
              </div>
            </div>
            <div class="more-info d-flex jc-between">
              <div class="left d-flex">
                <div class="review-date">{{item.date}}</div>
                <div class="product type">颜色分类：{{item.type}}</div>
                <div class="product-size">尺码：{{item.size}}</div>
              </div>
              <div class="right">
                <a href="#">有用（0）</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-btns">
        <div class="last-btn">上一页</div>
        <div class="btn1">1</div>
        <div class="btn2">2</div>
        <div class="btn3">3</div>
        <div class="btn4">4</div>
        <div class="next-btn">下一页</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        { tag: "厚薄度很厚实", num: "2" },
        { tag: "面料硬挺", num: "5" },
        { tag: "版型时尚", num: "2" },
        { tag: "超级显瘦", num: "2" },
        { tag: "质量很好", num: "2" },
        { tag: "质量太差了", num: "6" },
      ],
      reviews: [
        {
          user: "曾***意",
          review:
            "刚开始看评价有几个评论说衣服不值这个价 但又确实喜欢这个款式 就还是买了 收到以后感觉质量不错呀 没评论说的那么差",
          date: "2021年07月31日 10:18",
          type: "黑色",
          size: "S",
          imgs: [
            "https://img.alicdn.com/imgextra/i3/0/O1CN01Y3BHgg1hh6wlnZGQV_!!0-rate.jpg_40x40.jpg",
            "https://img.alicdn.com/imgextra/i4/0/O1CN01O6Eg0y1m6XOl2OFW1_!!0-rate.jpg_40x40.jpg",
          ],
          add: {},
        },
        {
          user: "m***廖",
          review: "西装百搭 版型也不错",
          date: "2021年07月15日 11:36",
          type: "黑色",
          size: "S",
          imgs: [],
          add: {},
        },
        {
          user: "s***0",
          review:
            "超级喜欢，价格也特别合适，而且很百搭怎么搭配都很高级，还会继续光顾的，这次非常满意",
          date: "2021年07月10日 13:53",
          type: "黑色",
          size: "S",
          imgs: [],
          add: {},
        },
        {
          user: "阳***子",
          review:
            "衣服版型还不错，只是衣服的质量不怎样，易皱，容易粘毛，没有那种直接西装的垂直感，是个单衣短款略厚，所以单看衣服配不上这个价格。",
          date: "2021年07月12日 20:07",
          type: "黑色",
          size: "S",
          imgs: [
            "https://img.alicdn.com/imgextra/i4/0/O1CN01iAlsg91ueRdqObB1K_!!0-rate.jpg_40x40.jpg",
            "https://img.alicdn.com/imgextra/i1/0/O1CN01yQ0dTq1ueRduN1AaR_!!0-rate.jpg_40x40.jpg",
          ],
          add: {},
        },
        {
          user: "a***爱",
          review: "整体评价：还行吧",
          date: "2021年07月11日 10:06",
          type: "黑色",
          size: "M",
          imgs: [],
          add: {},
        },
        {
          user: "1***s",
          review: "衣服很酷",
          date: "2021年07月10日 21:02",
          type: "黑色",
          size: "S",
          imgs: [],
          add: {},
        },
        {
          user: "余***浓",
          review: "好看！显瘦",
          date: "2021年06月18日 16:40",
          type: "黑色",
          size: "M",
          imgs: [
            "https://img.alicdn.com/imgextra/i3/0/O1CN010dZuMJ1yyNKrZw1J4_!!0-rate.jpg_40x40.jpg",
          ],
          add: {},
        },
        {
          user: "k***笙",
          review: "有一点厚 不太适合夏天穿 173 47穿的正正好",
          date: "2021年07月05日 18:44",
          type: "黑色",
          size: "S",
          imgs: [
            "https://img.alicdn.com/imgextra/i4/0/O1CN01vnwHKC1WiWODDnWLp_!!0-rate.jpg_40x40.jpg",
          ],
          add: {},
        },
        {
          user: "女***机",
          review: "衣服质量和版型都没得说，超级好👍",
          date: "2021年06月11日 16:20",
          type: "黑色",
          size: "S",
          imgs: [
            "https://img.alicdn.com/imgextra/i4/0/O1CN01Dwp4wf1ZF9puAAF19_!!0-rate.jpg_40x40.jpg",
          ],
          add: {},
        },
        {
          user: "阿***m",
          review:
            "发货一点慢 但东西值得等 料子比较厚 夏天是不行了 质量不错 一个主播安利的 挺好看的 配吊带裙什么的 非常好",
          date: "2021年05月21日 12:35",
          type: "黑色",
          size: "S",
          imgs: [],
          add: {},
        },
        {
          user: "o***8",
          review:
            "上身效果：很好看，有气质 整体评价：很喜欢它们家的风格，还会复购",
          date: "2021年05月23日 11:43",
          type: "黑色",
          size: "S",
          imgs: [],
          add: {
            review: "很喜欢",
            date: "确认收货后 23 天追加",
          },
        },
        {
          user: "s***8",
          review: "此用户没有填写评价。",
          date: "2021年04月19日 00:48",
          type: "黑色",
          size: "S",
          imgs: [],
          add: {
            review: "穿上特别像大堂经理 并没有任何针对啊 但是真的像🤔……",
            date: "确认收货后 43 天追加",
          },
        },
        {
          user: "x***2",
          review: "衣服型超好，质量也好，对得起这个价，也不白等，满意！",
          date: "2021年05月29日 16:59",
          type: "黑色",
          size: "M",
          imgs: [],
          add: {},
        },
        {
          user: "丽***你",
          review: "挺厚实，喜欢这种风格的姐妹大胆买吧",
          date: "2021年06月06日 15:29",
          type: "黑色",
          size: "S",
          imgs: [],
          add: {},
        },
        {
          user: "菁***～",
          review: "很好 面料舒服 款式也很满意",
          date: "2021年04月15日 22:40",
          type: "黑色",
          size: "S",
          imgs: [
            "https://img.alicdn.com/imgextra/i2/0/O1CN01EqDR4p1GjrgKfjMq5_!!0-rate.jpg_40x40.jpg",
            "https://img.alicdn.com/imgextra/i1/0/O1CN01qhBmJE1RbaIDdsicG_!!0-rate.jpg_40x40.jpg",
          ],
          add: {},
        },
        {
          user: "y***3",
          review: "不错，就是略厚，夏天可能穿不了",
          date: "2021年06月28日 13:16",
          type: "黑色",
          size: "S",
          imgs: [],
          add: {},
        },
        {
          user: "林***8",
          review: "版型好好 有高级感",
          date: "2021年06月07日 13:57",
          type: "黑色",
          size: "S",
          imgs: [],
          add: {},
        },
        {
          user: "c***3",
          review: "很厚实，质量也不错，挺好看的好评",
          date: "2021年06月02日 14:04",
          type: "黑色",
          size: "S",
          imgs: [],
          add: {},
        },
        {
          user: "t***7",
          review: "老婆！我爱你！",
          date: "2021年05月26日 07:16",
          type: "黑色",
          size: "S",
          imgs: [],
          add: {},
        },
        {
          user: "t***0",
          review:
            "非常好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好",
          date: "2021年06月01日 22:54",
          type: "黑色",
          size: "S",
          imgs: [],
          add: {},
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/tool.scss";
.product-review {
  width: 700px;
  padding: 0 5px;
  .title {
    border-bottom: 1px solid map-get($map: $color, $key: "grey-2");
    margin-top: 8px;
    .title-content {
      display: inline-block;
      padding: 10px 40px;
      margin: 0 5px;
      letter-spacing: 2px;
      font-size: 15px;
      border: 1px solid map-get($map: $color, $key: "grey-2");
      border-bottom-color: map-get($map: $color, $key: "white");
    }
  }
  .personal-tags {
    border: 1px solid map-get($map: $color, $key: "grey-2");
    padding: 10px 30px;
    margin: 5px 0;
    .personal-tags-label {
    }
    .tags {
      .tag {
        background-color: map-get($map: $color, $key: "primary-1");
        color: map-get($map: $color, $key: "white");
        margin: 0 3px;
        padding: 3px 5px;
      }
    }
  }
  .filter-btns {
    border: 1px solid map-get($map: $color, $key: "grey-1");
    padding: 3px 5px;
    margin: 5px 0;
    .radios-btn {
      * {
        margin: 0 3px;
      }
    }
    .orders-search {
    }
  }
  .review-module {
    .reviews {
      .review {
        width: calc(100% - 10px -30px);
        border-bottom: 1px solid map-get($map: $color, $key: "grey-1");
        padding: 10px 10px 10px 30px;
        .user-info {
          margin-right: 8px;
        }
        .review-info {
          width: calc(100% - 48px - 8px);
          .review-content {
            font-size: 15px;
            letter-spacing: 0.5px;
          }
          .review-imgs {
            img {
              padding: 5px;
            }
          }
          .more-info {
            line-height: 30px;
            color: map-get($map: $color, $key: "grey");
            .left {
              * {
                padding: 0 5px;
              }
            }
            .right {
            }
          }
        }
      }
    }
  }
  .page-btns{
      margin: 10px 0;
      text-align: right;
      *{
          display: inline-block;
          padding: 3px 5px;
          margin: 0 5px;
          border: 1px solid map-get($map: $color, $key: 'grey-1');
      }
      .btn1{
          border-color: map-get($map: $color, $key: 'primary-1');
          background-color: map-get($map: $color, $key: 'primary-1');
          color: map-get($map: $color, $key: 'white');
      }
  }
}
</style>