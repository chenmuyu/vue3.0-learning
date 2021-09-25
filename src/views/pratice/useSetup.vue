<template>
  <div>
    <div>使用setup refs</div>
    <HelloWorld ref="sonRef"/>
    <div @click="changeHandle">changeHandle</div>
    {{name}}
    {{x}}
    {{y}}
  </div>
</template>

<script lang="ts">
import {
  onMounted,
  reactive,
  toRefs,
  watch,
  computed,
  defineComponent,
  ref,
} from "vue";
import useXY from "@/hooks/pratice/userHooks.ts";
import HelloWorld from "@/components/HelloWorld.vue";
export default defineComponent({
  components: {
    HelloWorld,
  },
  setup(props, context) {
    // props，响应式，前提不可以解构，或者解构之后使用ref，refs进行响应式。
    console.log(props);
    // put
    console.log(context);
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
      if (sonRef.value) {
        console.log(sonRef.value.sonRef, "ssssss");
      }
    }

    // 4  使用watch
    // watch 简单应用
    watch(state, (newVal: any) => {
      document.title = "updated " + state.name;
    });

    watch(x, (newVal: any) => {
      document.title = "updated " + newVal;
    });

    // 5 组件使用ref
    const sonRef = ref<typeof HelloWorld | null>(null);
    // 5 ref响应式api
    let nihao = ref<string>("Hello 2World!");

    setTimeout(() => {
      nihao.value = "123"; //必须这样读
    }, 1000);
    
    onMounted(() => {
      // console.log(child.value?.sonRef, "ssssss");
    });
    // 需要给template用的数据，函数就放这里return
    return {
      x,
      y,
      name,
      age,
      changeHandle,
      sonRef,
    };
  },
});
</script>
<style lang='scss' scoped>
</style>