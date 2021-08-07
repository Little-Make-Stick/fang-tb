<template>
  <div class="product-card">
    <div class="product-img">
        <img :src="product.src" width="194px" height="198px">
      </div>
      <div class="product-title">{{product.title}}</div>
      <div class="product-price d-flex">
        <div class="new-price text-red">￥{{product.newPrice}}</div>
        <div class="old-price">￥{{product.oldPrice}}</div>
      </div>
      <div class="product-shop">{{product.shop}}</div>
      <div class="product-sale">{{product.sale}}</div>
  </div>
</template>
<script>
export default {
  props: {
      product:{ type:Object,required:true }
    // src: { type: String, required: true },
    // title: { type: String, required: true },
    // newPrice: { type: Number, required: true },
    // oldPrice: { type: Number, required: true },
    // shop: { type: String, required: true },
    // sale: { type: Number, required: true },
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/scss/tool.scss';
.product-card{
    width: 194px;
    height: 344px;
    padding: 22px 20px 0 20px;
    border: 1px solid map-get($map: $color, $key: 'grey-1');
    color: map-get($map: $color, $key: 'grey');
    &:hover{
      border-color: map-get($map: $color, $key: 'primary');
    }
    .product-img{
    }
    .product-title{
        padding: 5px;
        height: 40px;
        line-height: 22px;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
    }
    .product-price{
        padding: 8px 0;
        .new-price{
            font-size: 18px;
            margin-right: 8px;
        }
        .old-price{
            font-size: 14px;
            text-decoration-line: line-through;
        }
    }
    .product-shop{
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 5px 0;
        border-bottom: 1px solid map-get($map: $color, $key: 'grey-1');
    }
    .product-sale{
        font-size: 12px;
        text-align: right;
    }
}
</style>

