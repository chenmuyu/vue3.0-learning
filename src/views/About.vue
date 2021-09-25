<!--
 * @Description: 
-->
<!--
 * @Description: 
-->
<template>
  <div>
    sss
    {{nihao}}
    <div @click="changeNum">diandianwo</div>
    <myson></myson>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  provide,
  ref,
  toRef,
  reactive,
  onErrorCaptured,
  watchEffect,
  watch,
} from "vue";
// import { useRouter } from "vue-router";
import myson from "@/components/myson.vue";
export default defineComponent({
  components: { myson },
  setup() {
    const state = reactive({
      foo: 2,
      bar: "2",
    });
    const abc = toRef(state, "foo");
    provide("abc", state);

    const changeNum = () => {
      console.log("1232131233");
      state.foo = Math.random() * 10; // ={number:"222222www2222222222"};
    };
    watch(
      () => state.foo,
      (count, prevCount) => {
        console.log(count, "log log");
      }
    );

    const count = ref(0);
    provide("count", count);
    watch(count, (count: any, prevCount: any) => {
      /* ... */
      console.log(count, prevCount, "223");
    });
    // watcheffect
    watchEffect(() => console.log(count.value, "log"));

    setTimeout(() => {
      count.value++;
      state.foo++;
      // -> logs 1  watchEffect会执行
    }, 2000);
    setTimeout(() => {
      // count.value++;
      // state.foo++;

      nihao.value = "123";
      // -> logs 1  watchEffect会执行
    }, 4000);
    const msg = ref<string>("Hello World!");
    let nihao = ref<string>("Hello 2World!");
    // let nihao = ""// error

    // 错误监听
    onErrorCaptured((err: any, instance: any, info: any) => {
      console.log("123");
      console.log(err);
      console.log(instance);
      console.log(info);
      return false;
    });
    // const router = useRouter();
    // const list = computed(() => store.state.columns);
    return { changeNum, nihao };
  },
});
</script>
<style lang='scss' scoped>
</style>