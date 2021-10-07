<!--
 * @Description: 
-->
<template>
  <div class="column-detail-page w-690">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center">
      <div class="middle_block column-info row mb-4 border-bottom pb-4 align-items-center">
        <div class="col-3 text-center">
          <img :src="authorInfo.avatar.url" class="rounded-circle border w-100" alt="">
        </div>
        <div class="col-9">
          <h4>{{authorInfo.title}}</h4>
          <p class="text-muted">{{authorInfo.description}}</p>
        </div>
      </div>
    </div>
    <div class="post-list">
      <article class="card mb-3 shadow-sm" v-for="(info ,index) in tableData" :key="index">
        <div class="card-body">
          <h4 @click="goToDetail(info)">{{info.title}}</h4>
          <div class="row my-3 align-items-center">
            <div class="col-4">
              <img :src="info.image.url" class="rounded-lg w-100" alt="">
            </div>
            <p class="col-8 text-muted">{{info.excerpt}}</p>
          </div>
          <span class="text-muted" data-v-714b2626="">{{info.createdAt}}</span>
        </div>
      </article>
    </div>
  </div>
</template>

<script lang='ts'>
import { useRoute, useRouter } from "vue-router";
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  reactive,
  toRefs,
} from "vue";

export default defineComponent({
  setup() {
    // @ts-ignore
    const { proxy } = getCurrentInstance();
    const state = reactive({
      authorInfo: {},
      tableData: [],
    });
    const getData = (id: string) => {
      proxy.$axios.get(`/myzhihu/api/columns/${id}`).then((res: any) => {
        state.authorInfo = res;
      });
      proxy.$axios
        .get(`/myzhihu/api/columns/${id}/posts?currentPage=1&pageSize=5`)
        .then((res: any) => {
          state.tableData = res.list;
        });
    };
    const routes = useRoute();
    onMounted(() => {
      console.log(routes.params);
      getData(routes.params.id as string);
    });
    const router = useRouter();
    const goToDetail = (info:any) => {
      router.push({
        name: "articleDetail",
        params: {
          id: info._id,
        },
      });
    };
    return {
      ...toRefs(state),
      goToDetail,
    };
  },
});
</script>
<style scoped>
.author_block {
  margin: 0 auto;
  width: 690px;
}
.middle_block {
  display: flex;
}
</style>