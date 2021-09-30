<template>
  <div>
    <div>我是一个子组件</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  // props: ["title", "userName"],
  props: {
    title: String,
    userInfo: Object,
    uid: [Number, String],
    // 添加一些自定义校验
    userName: {
      type: String,
      required: false,
      default: "ss",
      // 在这里校验用户名必须至少3个字
      validator: (v: any) => v.length >= 3,
    },
  },
  setup(props, { attrs }) {
    console.log(props);
    // attrs 是个对象，每个 Attribute 都是它的 key
    console.log(attrs.class);

    // 如果传下来的 Attribute 带有短横线，需要通过这种方式获取
    console.log(attrs["data-hash"]);
    
    return {};
  },
});
</script>
<style lang='scss' scoped>
</style>