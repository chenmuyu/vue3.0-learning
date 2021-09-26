<template>
  <div>{{fullname}}</div>
</template>

<script lang='ts'>
import {
  defineComponent,
  ref,
  watch,
  watchEffect,
  computed,
  ComputedRef,
} from "vue";
export default defineComponent({
  setup() {
    const name = ref<string>("petter");
    const name1 = ref<string>("petter1");
    setTimeout(() => {
      name.value = "Tom";
    }, 2000);

    watch(name, () => {
      console.log("监听整个 ref ", name.value);
    });
    // 同时监听多个
    const getUserInfo = (): void => {
      console.log({
        name: name.value,
        name1: name1.value,
      });
    };
    watchEffect(getUserInfo);

    // 定义基本的数据
    const firstName = ref<string>("Bill");
    const lastName = ref<string>("Gates");

    // 使用computed可以直接获得响应式数据
    // 不需要响应式可以
    // const name = ():string => `${firstName.value} ${lastName.value}`;
    const fullname: ComputedRef<string> = computed(() => {
      return `${firstName.value} ${lastName.value}`;
    });
    setTimeout(() => {
      firstName.value = "Petter";
    }, 2000);
    return { fullname };
  },
});
</script>
<style lang='scss' scoped>
</style>