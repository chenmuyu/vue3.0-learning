<template>
  <div>
    <!-- 部分路由全局，部分路由带公共组件 -->
    <Login v-if="route.name === 'login'"/>
    <Register v-else-if="route.name === 'register'"/>
    <div v-else>
      <GlobalHeader :user="{name:1}"/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import Login from "@/Login.vue";
import Register from "@/Register.vue";
import GlobalHeader from "@/components/GlobalHeader.vue";
export default defineComponent({
  components: { Register, Login },
  setup() {
    const route = useRoute();
    return { route };
  },
});
</script>
<style lang='scss' scoped>
</style>
