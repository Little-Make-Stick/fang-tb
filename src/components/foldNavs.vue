<template>
 <div class="fold-navs">
     <div class="fold-main-navs d-flex ai-center">
         <div class="main-navs-title">{{mainTitle}}</div>
         <button class="fold-btn" @click="isFold=isFold ?false:true" v-if="subTitle.length!=0">
             <span style='font-size:12px;color:rgb(0, 0, 0);font-style:normal;font-weight:normal;'>&#709;</span>
         </button>
     </div>
     <div class="fold-sub-navs" v-if="isFold">
         <div class="subs-navs" v-for="(item,i) in subTitle" :key="i">
             <div class="sub-navs">{{item}}</div>
         </div>
     </div>
 </div>
</template>
<script>
export default {
  data() {return {isFold: true}},
  methods: {},
  components: {},
  props:{
      mainTitle:{type:String,required:true},
      subTitle:{type:Array,required:true}
  }
}
</script>

<style>

</style>
