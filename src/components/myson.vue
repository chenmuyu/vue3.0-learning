<template>
  <div>我是个孩子
    <grandSon></grandSon>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import grandSon from "@/components/grandSon.vue";
export default defineComponent({
  components: { grandSon },
  setup() {
    // const a:any = null
    // console.log(a.s)
    
    return {};
  },
});
</script>
<style lang='scss' scoped>
</style>