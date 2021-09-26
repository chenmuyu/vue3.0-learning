<template>
  <div>
    <HelloWorld ref="sonRef"/>
  </div>
</template>

<script lang='ts'>
import HelloWorld from "@/components/HelloWorld.vue";
import {
  defineComponent,
  Ref,
  ref,
  reactive,
  toRefs,
  toRef,
  onMounted,
} from "vue";
interface Member {
  id: number;
  name: string;
  age: number;
  gender: string;
}
export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    // 1 组件使用ref
    const sonRef = ref<typeof HelloWorld | null>(null);
    // 1 ref响应式api
    let nihao = ref<string>("Hello 2World!");

    setTimeout(() => {
      nihao.value = "123"; //必须这样读
    }, 1000);

    // 2 响应式reactive
    let activeValue = reactive([1, 2, 4, 5, 6, 78, 9]);
    setTimeout(() => {
      activeValue.push(222);
    }, 2000);

    setTimeout(() => {
      // 不失去响应式
      // activeValue.length = 0;
      //  失去响应式
      activeValue = reactive([1, 2, 4, 5, 6, 78, 9]);
      activeValue = [];
    }, 4000);

    // 1 定义一个reactive对象
    const userInfo: Member = reactive({
      id: 1,
      name: "Petter",
      age: 18,
      gender: "male",
    });

    // 3 toRef 与 toRefs
    // const name = toRef(userInfo, "name");
    const userInfos = toRefs(userInfo);
    // console.log(name);
    // 之后读取和赋值就使用name.value，会同时更新userinfo和name
    // 或者const userInfoRefs: Member = toRefs(userInfo);
    setTimeout(() => {
      userInfos.id = ref(2);
      userInfos.name = ref("2");
      userInfos.age = ref(2);
    }, 2000);
    onMounted(() => {
      // console.log(child.value?.sonRef, "ssssss");
    });

    // 使用解构return时需要注意同名情况
    return { activeValue, ...userInfos };
  },
});
</script>
<style lang='scss' scoped>
</style>