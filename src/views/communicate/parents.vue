<template>
  <div>
    <div>我是爸爸
      <son 
      :title="'儿子'"
      :user-info="userInfo"></son>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import son from "@/components/communicate/son.vue";
interface Member {
  id: number;
  name: string;
}
export default defineComponent({
  components: { son },
  setup() {
    const userInfo: Member = {
      id: 1,
      name: "Petter",
    };
    return { userInfo };
  },
});
</script>
<style lang='scss' scoped>
</style>