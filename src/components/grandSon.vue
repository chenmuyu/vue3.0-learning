<!--
 * @Description: 
-->
<template>
  <div>我是孙子{{abc.foo}}</div>
</template>

<script lang='ts'>
import { defineComponent, inject, watch } from "vue";
export default defineComponent({
  setup(props) {
    const abc:any = inject("abc");
    const count:any = inject("count");
    console.log("Ssssss",abc)
    watch(abc, () => {
      console.log(abc + "变了");
    });
    watch(count, () => {
      console.log(count + "111变了");
    });
    return {abc};
  },
});
</script>
<style lang='scss' scoped>
</style>