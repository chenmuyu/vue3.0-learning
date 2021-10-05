<template>
  <div>
    <div>
      我是爸爸
      {{userInfo.id}}
      <son
        ref="child"
        data-hash="afJasdHGUHa87d688723kjaghdhja"
        :title="'儿子'"
        v-model:uid="userInfo.id"
        :user-info="userInfo"
        @updateMethods="updateMethods"
      ></son>
      <sonTwo></sonTwo>
    </div>
    <div @click="changeProvide">1111111111111</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref, onMounted, provide } from "vue";
import son from "@/components/communicate/son.vue";
import sonTwo from "@/components/communicate/sonTwo.vue";
interface Member {
  id: number;
  name: string;
}
export default defineComponent({
  components: { son ,sonTwo},
  setup() {
    // @ts-ignore
    const child = ref<HTMLElement>(null);
    const userInfo: Member = reactive({
      id: 1,
      name: "Petter",
    });
    const updateMethods = (name: number) => {
      console.log("sss", name);
    };
    const changeProvide = () => {
      //  试试行不行
      // provide() can only be used inside setup().
      provide("msg", 11111111111111111111111);
    };
    const msg = ref("ssssssssssssssssssssss");
    // provide出去
    provide("msg", msg);
    // provide() can only be used inside setup().
    //  但传入响应式数据会改变
    setTimeout(() => {
      msg.value = "2222222";
    },1000);
    // 请保证视图渲染完毕后再执行操作
    onMounted(() => {
      console.log(child);
      console.log(child.value);

      setTimeout(() => {
        // @ts-ignore
        child.value.name = 12334;
      }, 1000);
    });
    return { userInfo, updateMethods, child, changeProvide };
  },
});
</script>
<style lang='scss' scoped>
</style>