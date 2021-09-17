<template>
  <div class="home">
    <showToast></showToast>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import showToast from "@/components/pratice/showToast.vue"; // @ is an alias to /src
export default defineComponent({
  name: "Home",
  components: {
    showToast,
  },
  setup() {
    return {};
  },
});
</script>
