
<template>
  <div class="post-detail-page w-690">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/zhihu/recommend">Home</a>
      </li>
      <li class="breadcrumb-item">
        <a href="/zhihu/recommend/recommendDetail">recommendDetail</a>
      </li>
      <li class="active breadcrumb-item">Data</li>
    </ol>
    <article class="mb-5 pb-3">
      <img
        src="http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5e912f4c7f24af242a382b8c.png?x-oss-process=image/resize,w_850"
        alt="currentPost.title"
        class="rounded-lg img-fluid my-4"
      >
      <h2 class="mb-4">{{article.title}}</h2>
      <div
        class="user-profile-component border-top border-bottom py-3 mb-5 align-items-center row g-0"
      >
        <div class="col">
          <div class="user-profile-component">
            <div class="d-flex align-items-center">
              <img
                src="http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e3a17c305b1070f455202.jpg?x-oss-process=image/resize,m_pad,h_50,w_50"
                alt="Delphine"
                class="rounded-circle img-thumbnail"
              >
              <div class="detail ml-2">
                <h6 class="d-block mb-0">{{article.author.nickName}}</h6>
                <span class="text-truncate text-muted d-block">{{article.author.description}}</span>
              </div>
            </div>
          </div>
        </div>
        <span class="text-muted col text-right font-italic">{{article.createdAt}}</span>
      </div>
      <div v-html="article.content"></div>
    </article>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  getCurrentInstance,
  onMounted,
  toRefs,
} from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  setup() {
    // /api/posts/5f3fade0c9875c2cd848a2cb
    // @ts-ignore
    const { proxy } = getCurrentInstance();
    const state = reactive({
      article: {
        author:{}
      },
      tableData: [],
    });
    const getData = (id: string) => {
      proxy.$axios.get(`/myzhihu/api/posts/${id}`).then((res: any) => {
       console.log(res)
       state.article  = res
      });
    };
    const routes = useRoute();
    onMounted(() => {
      console.log(routes.params);
      getData(routes.params.id as string);
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style  scoped>
.breadcrumb {
  background-color: #fefefe;
}
</style>