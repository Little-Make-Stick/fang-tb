<template>
  <div class="side-card">
    <div class="side-card-label d-flex jc-between">
      <div class="title">{{title}}</div>
      <div class="more" v-if="isMore">更多&gt;</div>
    </div>
    <div class="side-card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    isMore: { type: Boolean, required: false, default: false },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/tool.scss";
.side-card {
  border: 1px solid map-get($map: $color, $key: "grey-1");
  .side-card-label {
    background-color: #3f7fce;
    color: map-get($map: $color, $key: "white");
    padding: 3px 4px 1px 4px;
  }
}
</style>