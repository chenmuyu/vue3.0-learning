<!--
 * @Description: 
-->
<template>
  <div>
    1111 {{httpResult.message}}
    <img :src="httpResult.message">
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import useAxios from "@utils/http";
export default defineComponent({
  setup() {
    const { result, loading, loaded } = useAxios(
      "https://dog.ceo/api/breeds/image/random"
    );
    const httpResult = reactive(result);
    return {
      httpResult,
    };
  },
});
</script>
<style lang='scss' scoped>
</style>