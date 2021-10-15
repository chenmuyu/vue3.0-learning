<!--
 * @Description: 
-->
<template>
  <div>sonttotototototo</div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import bus from "@utils/EventBus";
export default defineComponent({
  setup() {
    // 定义一个打招呼的方法
    const sayHi = (msg = "Hello World!"): void => {
      console.log(msg,"2");
    };

    // 启用监听
    // @ts-ignore
    bus.on("sayHi", sayHi);
    return {};
  },
});
</script>
<style lang='scss' scoped>
</style>