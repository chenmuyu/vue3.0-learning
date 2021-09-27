<template>
  <div>
    <p :class="name">
      {{name}}
      {{activeInfo.name}}
      {{activeList}}
      {{name1}}
      ssssssssssssss
    </p>
    <p :style="[style1,style2]">22222</p>
    <p :class="$style.msg">124144</p>
    <p class="msg">12114144</p>
    <p v-html="content"></p>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref, toRefs, useCssModule } from "vue";
export default defineComponent({
  setup() {
    const activeInfo = reactive({ name1: "red" });
    const activeList = reactive([1, 3, 34, 4]);
    let name = ref<string>("red");

    setTimeout(() => {
      name.value = "blue"; //必须这样读
      // @ts-ignore
      // activeInfo.name = "blue"; //必须这样读
      activeList.push(111);
      // @ts-ignore
      activeInfo.name1 = "ss";
      console.log(activeInfo, "@");
    }, 1000);

    const style1 = reactive({
      color: "yellow",
      textAlign: "center",
    });

    const style2 = {
      fontSize: "29px",
      "line-height": 2,
    };

    // 获取样式
    const style = useCssModule();

    // 编写模板内容
    const content = `<p class="${style.msg}">
      <span class="${style.text}">Hello World! —— from v-html</span>
    </p>`;

    return {
      content,
      name,
      activeInfo,
      activeList,
      style1,
      style2,
      ...toRefs(activeInfo),
    };
  },
});
</script>
<style module>
.red {
  color: red;
}
.blue {
  color: blue;
}
.msg {
  color: #000;
  font-size: 45px;
}
.text {
}
</style>