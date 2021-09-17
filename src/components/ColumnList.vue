<template>
  <ul>
    <li></li>
  </ul>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import { defineComponent, PropType, computed } from "vue";
export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}
export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      // 这里特别有一点，我们现在的 Array 是没有类型的，
      // 只是一个数组，我们希望它是一个 ColomnProps 的数组，
      // 那么我们是否可以使用了类型断言直接写成 ColomnProps[]，
      // 显然是不行的 ，因为 Array 是一个数组的构造函数不是类型，
      // 我们可以使用 PropType 这个方法，它接受一个泛型，讲 Array 构造函数返回传入的泛型类型。
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },
  setup(props) {
    const testData: ColumnProps[] = [
      {
        id: 1,
        title: "test1的专栏",
        description: "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧",
        avatar:
          "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
      },
      {
        id: 2,
        title: "test2的专栏",
        description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
        avatar:
          "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
      },
    ];
    
    const columnList = computed(() => {
      return props.list.map((column) => {
        if (!column.avatar) {
          column.avatar = require("@/assets/column.jpg");
        }
        return column;
      });
    });

    return {
      columnList,
    };
  },
});
</script>
<style lang='scss' scoped>
</style>