<template>
  <div class="validate-input-container pb-3">
    <input
      type="text"
      class="form-control"
      :class="{'is-invalid':inputRef.error}"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
    >
    <span v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</span>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted,reactive,PropType } from "vue";
import mitt from "mitt";
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
interface RuleProp {
  type: "required" | "email";
  message: string;
}
export const emitter = mitt();
export type RulesProp = RuleProp[];
// export class NumberArray {
//        [index:number]: RuleProp;      
//        every   
// }
export default defineComponent({
  props: { rules:[], modelValue: String },
  setup(prop, context) {
    const inputRef = reactive({
      val: "",
      error: false,
      message: "",
    });

    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value;
      inputRef.val = targetValue;
      context.emit("update:modelValue", targetValue);
    };
    const validateInput = () => {
      if (prop.rules) {
        // prop.rules as Array<RuleProp>
        // const allPassed = prop.rules.every((rule: any) => {
        //   let passed = true;
        //   inputRef.message = rule.message;
        //   switch (rule.type) {
        //     case "required":
        //       passed = inputRef.val.trim() !== "";
        //       break;
        //     case "email":
        //       passed = emailReg.test(inputRef.val);
        //       break;
        //     default:
        //       break;
        //   }
        //   return passed;
        // });
        // inputRef.error = !allPassed;
      }
    };
    // 将事件发射出去，其实就是把验证函数发射出去
    onMounted(() => {
      // @ts-ignore
      emitter.emit("form-item-created", validateInput);
    });

    return {
      inputRef,
      validateInput,
    };
  },
});
</script>
<style lang='scss' scoped>
</style>