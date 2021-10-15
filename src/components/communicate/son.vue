<template>
  <div>
    <div>我是一个子组件</div>
    <div @click="emitEvent">3333333333333333</div>
    <input type="number" v-model="name">
    {{uida}}
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, inject } from "vue";
import bus from "@/util/EventBus";
export default defineComponent({
  inheritAttrs: false,
  // props: ["title", "userName"],
  props: {
    title: String,
    userInfo: Object,
    uid: [Number, String],
    // 添加一些自定义校验
    userName: {
      type: String,
      required: false,
      default: "ss1",
      // 在这里校验用户名必须至少3个字
      validator: (v: any) => v.length >= 3,
    },
  },
  emits: {
    updateMethods: (name: number) => {
      if (name < 18) {
        console.log(name, "18");
        return false;
      }
      return true;
    },
    // 一些无需校验的，设置为null即可
    "update-name": null,
    "update:uid": null,
  },
  setup(props, { attrs, emit }) {
    let name = ref(1);
    console.log(props);
    let uida = ref(props.uid);

    const msg: any = inject("msg") || "";
    console.log(msg.value, "1");
    setTimeout(() => {
      console.log(msg.value, "setTimeout");
    }, 2500);
    // attrs 是个对象，每个 Attribute 都是它的 key
    console.log(attrs.class);

    // 如果传下来的 Attribute 带有短横线，需要通过这种方式获取
    console.log(attrs["data-hash"]);
    const emitEvent = () => {
      // 调用打招呼事件，传入消息内容
      bus.emit("sayHi", "哈哈哈哈哈哈哈哈哈哈哈哈哈哈");
      emit("updateMethods", name.value);
      emit("update:uid", 123);
    };
    return { emitEvent, name, uida };
  },
});
</script>
<style lang='scss' scoped>
</style>