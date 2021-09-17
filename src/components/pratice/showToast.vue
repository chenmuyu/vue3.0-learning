
    <!-- to 属性就是目标位置  Teleport-->
<template>
  <div>
    <button @click="showToast" class="btn">打开 toast</button>
    <!-- to 属性就是目标位置 -->
    <teleport to="#teleport-target">
      <div v-if="visible" class="toast-wrap">
        <div class="toast-msg">我是一个 Toast 文案</div>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const visible = ref(false);
    let timer:any;
    const showToast = () => {
      visible.value = true;
      clearTimeout(timer);
      timer = setTimeout(() => {
        visible.value = false;
      }, 1000);
    };
    return {
      visible,
      showToast
    }
  },
});
</script>
<style lang='scss' scoped>
</style>