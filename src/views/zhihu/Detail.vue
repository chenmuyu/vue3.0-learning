<template>
  <div></div>
</template>

<script lang='ts'>
import { useRoute } from "vue-router";
import { defineComponent, getCurrentInstance, onMounted } from "vue";
export default defineComponent({
  setup() {
    // @ts-ignore
    const { proxy } = getCurrentInstance();
    const getData = (id:string) => {
      proxy.$axios
        .get(`/myzhihu/api/columns/${id}`)
        .then((res: any) => {
          console.log(res.data.data)
          // @ts-ignore
        });
    };
    const routes = useRoute()
    onMounted(() => {
      console.log(routes.params)
      getData(routes.params.id as string)
    });
    return {};
  },
});
</script>
<style lang='scss' scoped>
</style>