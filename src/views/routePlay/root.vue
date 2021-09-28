<template>
  <!-- 带全局组件的公共组件 -->
  <div>
    <div @click="goTopermission">2222222</div>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
// import GlobalHeader from "@/components/GlobalHeader.vue";
export default defineComponent({
  components: {},
  setup() {
    const router = useRouter();
    const goTopermission = () => {
      // 跳转首页
      router.push({
        name: "Home",
      });
    };
    return { router, goTopermission };
  },
});
</script>
<style lang='scss' scoped>
</style>