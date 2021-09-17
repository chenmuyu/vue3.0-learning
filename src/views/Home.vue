<!--
 * @Description: 
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="fooRef"/>
    <showToast></showToast>
    {{fooRef.foo}}s
    {{fooRef.bar}}s
    {{fooRef}}s
    <div @click="clickMe">clikc me</div>
    <div @click="clickMe">clikc me</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRef } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import showToast from "@/components/pratice/showToast.vue"; // @ is an alias to /src
export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,showToast
  },
  setup(props, ctx) {
    const count = ref(0);
  
    const state = reactive({
      foo: "2",
      bar: "2",
    });
    const fooRef = toRef(state, "foo");
    const clickMe = () => {
      state.foo = "12"; // = { foo: "22222" };
      console.log("ss");
    };
    return {
      fooRef,
      clickMe,
    };
  },
});
</script>
