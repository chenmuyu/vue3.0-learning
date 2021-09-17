<template>
  <div>
    <div>使用setup refs</div>
    <div @click="changeHandle">changeHandle</div>
    {{name}}
    {{x}}
    {{y}}
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, watch, computed } from "vue";
import useXY from "@/hooks/pratice/userHooks.ts";
export default {
  setup() {
    // 1 使用reactive 实现数据的响应式
    let state = reactive({
      name: "lisi",
      age: 10,
    });

    // 2 使用解构
    let { name, age } = toRefs(state);

    // 3 使用hooks
    let { x, y } = useXY();
    console.log(state.name);
    function changeHandle() {
      state.name = "wangwu";
      console.log("state.name");
    }

    // 4  使用watch
    // watch 简单应用
    watch(state, (newVal: any) => {
      console.log("sss")
      document.title = "updated " + state.name;
    });

    watch(x, (newVal: any) => {
      document.title = "updated " + newVal;
    });
    return {
      x,
      y,
      name,
      age,
      changeHandle,
    };
  },
};
</script>
<style lang='scss' scoped>
</style>