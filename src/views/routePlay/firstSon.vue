<template>
  <div>first
    <router-link
      class="link"
      :to="{
      name: 'sonson',
      params: {
        id: 123
      }
    }"
    >这是文章的标题</router-link>
    <div @click="gotoRegister">这是文章的标题</div>
    <router-link to="/home" custom v-slot="{ navigate }">
      <span class="link" @click="navigate">首页</span>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter();
    const gotoRegister = () => {
      router.push({
        name: "sonson",
        query: {
          id: 123,
        },
        params: {
          id: 123,
        },
      });
    };
    return { gotoRegister };
  },
});
</script>
<style lang='scss' scoped>
</style>