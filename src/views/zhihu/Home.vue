<!--
 * @Description: 
-->

<template>
  <div class="home-page container-md">
    <ColumnList :list="tableData" @updateMethods="updateMethods"></ColumnList>
  </div>
</template>

<script lang='ts'>
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList from "@/components/ColumnList.vue"; // @ is an alias to /src
import {
  defineComponent,
  onMounted,
  getCurrentInstance,
  reactive,
  toRefs,
} from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {
    ColumnList,
  },
  setup() {
    // @ts-ignore
    const { proxy } = getCurrentInstance();
    // let List: Array<any> = reactive([]);
    const state = reactive({
      loading: false,
      tableData: [], // 数据列表
      multipleSelection: [], // 选中项
      total: 0, // 总条数
      currentPage: 1, // 当前页
      pageSize: 10, // 分页大小
      type: "add", // 操作类型
    });
    const router = useRouter();

    const updateMethods = (id: number) => {
      router.push({
        name: "recommendDetail",
        params:{
          id:id
        }
      });
    };
    const getData = () => {
      proxy.$axios
        .get("/myzhihu/api/columns?currentPage=1&pageSize=10")
        .then((res: any) => {
          // console.log(res.data.data.list as Array<any>);
          console.log(res,"resress")
          // @ts-ignore
          if (res.list) {
            // res.data.data.list.forEach((element: any) => {
            //   // // @ts-ignore
            //   List.push(element)
            // });
            state.tableData = res.list;
          }
        });
    };
    onMounted(() => {
      getData();
    });

    return {
      ...toRefs(state),updateMethods
    };
  },
});
</script>
<style lang='scss' scoped>
</style>