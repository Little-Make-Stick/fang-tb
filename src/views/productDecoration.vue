<template>
  <div class="product-decoration">
    <div class="params-grid">
      <!-- 666 -->
      <div
        class="params"
        v-for="(item,i) in params"
        :key="i"
      >
        <div class="param d-flex">
          <div class="k">{{item.k}}：</div>
          <div class="v">{{item.v}}</div>
        </div>
      </div>

    </div>
    <div
      class="decoration"
      v-for="(item,i) in decorationImg"
      :key="i"
    >
      <img
        :src="item"
        alt=""
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: [
        { k: "品牌", v: "other/其他" },
        { k: "尺码", v: "S M" },
        { k: "风格", v: "原创设计" },
        { k: "衣门襟", v: "无扣" },
        { k: "颜色分类", v: "黑色" },
        { k: "年份季节", v: "2020年夏季" },
        { k: "袖长", v: "长袖" },
        { k: "衣长", v: "短袖" },
        { k: "服装版型", v: "修身" },
      ],
      decorationImg: [
        "https://img.alicdn.com/imgextra/i1/2598715035/O1CN01zlYbZa1n44qe4OO62_!!2598715035.png",
        "https://img.alicdn.com/imgextra/i2/2598715035/O1CN01I5a8lH1n44qh6z0KP_!!2598715035.png",
        "https://img.alicdn.com/imgextra/i3/2598715035/O1CN01lQmI3N1n44qgNT0Tb_!!2598715035.png",
        "https://img.alicdn.com/imgextra/i1/2598715035/O1CN015MKMob1n44qk0quhq_!!2598715035.png",
        "https://img.alicdn.com/imgextra/i3/2598715035/O1CN01o3upQn1n44qe4MueT_!!2598715035.png",
        "https://img.alicdn.com/imgextra/i3/2598715035/O1CN01JqX4aE1n44qfGc40L_!!2598715035.png",
        "https://img.alicdn.com/imgextra/i2/2598715035/O1CN01YAG0Aj1n44qe4POW4_!!2598715035.png",
        "https://img.alicdn.com/imgextra/i3/2598715035/O1CN01ovtLVZ1n44qe4PjIl_!!2598715035.png",
        "https://img.alicdn.com/imgextra/i2/2598715035/O1CN01nxmkEj1n44qf1MwXF_!!2598715035.png",
        "https://img.alicdn.com/imgextra/i4/2598715035/O1CN01zK5kk01n44qVWWZYX_!!2598715035.png",
        "https://img.alicdn.com/imgextra/i4/2598715035/O1CN01zK5kk01n44qVWWZYX_!!2598715035.png",
        "https://img.alicdn.com/imgextra/i4/2598715035/O1CN01uqZKFx1n44qiUbGIt_!!2598715035.png",
        "https://img.alicdn.com/imgextra/i2/2598715035/O1CN01vwdAXM1n44qc6N9Dd_!!2598715035.png",
        "https://img.alicdn.com/imgextra/i3/2598715035/O1CN01qnHtEw1n44qbTWdDN_!!2598715035.png",
        "https://img.alicdn.com/imgextra/i3/2598715035/O1CN01qnHtEw1n44qbTWdDN_!!2598715035.png",
        "https://img.alicdn.com/imgextra/i4/2598715035/O1CN01uCiDYG1n44qbTXdZG_!!2598715035.png",
        "https://img.alicdn.com/imgextra/i1/2598715035/O1CN01V01ss31n44qe4Oeob_!!2598715035.png",
        "https://img.alicdn.com/imgextra/i1/2598715035/O1CN01qZgfcI1n44qiUcwIj_!!2598715035.png",
        "https://img.alicdn.com/imgextra/i3/2598715035/O1CN01zehuqR1n44qhVi5n1_!!2598715035.png",
        "https://img.alicdn.com/imgextra/i1/2598715035/O1CN01n2fWDm1n44qf1Op24_!!2598715035.png",
        "https://img.alicdn.com/imgextra/i4/2598715035/O1CN01HrSlxJ1n44qj7Nx1d_!!2598715035.png",
        "https://img.alicdn.com/imgextra/i1/2598715035/O1CN01xSCn5T1n44qbTXEhX_!!2598715035.png",
        "https://img.alicdn.com/imgextra/i1/2598715035/O1CN01xSCn5T1n44qbTXEhX_!!2598715035.png",
        "https://img.alicdn.com/imgextra/i2/2598715035/O1CN01MOth4O1n44qk0rWGU_!!2598715035.png",
        "https://img.alicdn.com/imgextra/i3/2598715035/O1CN01hS1Ktr1n44qh6zTaY_!!2598715035.png",
      ],
    };
  },
};
</script>

<style lang="scss">
@import '../assets/scss/tool.scss';
.product-decoration {
  width: 700px;
  padding: 0 3px;
  .params-grid {
    line-height: 25px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-bottom: 1px solid map-get($map: $color, $key: 'grey-2');
  }
  .decoration {
    margin-top: 22px;
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>