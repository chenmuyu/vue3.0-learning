<template>
    <div>
        <!-- 2 使用异步组件 -->
        <Suspense>
            <template #default>
                <useSuspense/>
            </template>
            <template #fallback>
                <h1>Loading !...</h1>
            </template>
        </Suspense>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import useSuspense from "@/components/pratice/useSuspense.vue";
export default defineComponent({
  components: {useSuspense},
  setup() {
    return {};
  },
});
</script>
<style lang='scss' scoped>
</style>