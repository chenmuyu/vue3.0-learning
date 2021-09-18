<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang='ts'>
import validateInput from "@/components/common/validateInput.vue";
import { defineComponent, reactive, onUnmounted } from "vue";
import mitt from "mitt";

type ValidateFunc = () => boolean;
export const emitter = mitt();
export default defineComponent({
  components: { validateInput },
  emits: ["form-submit"],
  setup(props, ctx) {
    let funcArr: ValidateFunc[] = [];
    const submitFormm = () => {
      const result = funcArr.map((func) => func()).every((result) => result);
      ctx.emit("form-submit", result);
    };
    const callback = (func: ValidateFunc) => {
      funcArr.push(func);
    };
    // @ts-ignore
    emitter.on("form-item-creted", callback);
    onUnmounted(() => {
      // @ts-ignore
      emitter.off("form-item-created", callback);
      funcArr = [];
    });

    const submitForm = () => {
      ctx.emit("form-submit", true);
    };

    return {  submitForm };
  },
});
</script>
<style lang='scss' scoped>
</style>