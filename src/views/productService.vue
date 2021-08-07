<template>
  <div class="product-services">
    <div class="services-title">
      <div class="services-title-content">卖家承诺以下服务</div>
    </div>
    <div class="services" v-for="(item,i) in services" :key="i">
      <div class="service d-flex">
        <div class="left">
          <img :src="item.img" alt="" width="48" height="48">
        </div>
        <div class="right">
          <div class="service-title">{{item.title}}</div>
          <div class="service-content" v-html="item.content">{{item.content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      services:[
        {
          img: 'https://img.alicdn.com/tps/i2/T1in3MFMNcXXceU5Yh-48-48.png',
          title: '消费者保障服务',
          content: `该卖家已缴纳 402.97 元保证金。<br/>在确认收货 15 天内，如有商品质量问题、描述不符或未收到货等，您有权申请退款或退货，来回邮费由卖家承担。`
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/tool.scss';
.product-services{
  width: 700px;
  .services-title{
    background-image: url('../assets/image/throughLine-bg.png');
    background-repeat: repeat-x;
    height: 25px;
    background-position: center center;
    text-align: center;
    .services-title-content{
      font-weight: bold;
      background-color: map-get($map: $color, $key: 'white');
      display: inline-block;
      padding: 1px 3px;
      line-height: 25px;
      font-size: 15px;
    }
  }
  .services{
    width: 100%;
    .service{
      padding: 20px 15px;
      .left{
        margin-right: 10px;
      }
      .right{
        line-height: 25px;
        .service-title{
          font-size: 18px;
          font-weight: 700;
          line-height: 25px;
        }
        .service-content{
          font-size: 15px;
        }
      }
    }
  }
}
</style>