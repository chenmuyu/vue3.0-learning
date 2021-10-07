<!--
 * @Description: 
-->
<template>
    <div>Login
        <div class="w-690">
            <div class="validate-input-container pb-3">
                {{email}}
                邮箱
                <input type="text" class="form-control" v-model="email">
                密码
                <input type="text" class="form-control" v-model="val">
            </div>
            <button @click="confirm">sss</button>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, getCurrentInstance } from "vue";
export default defineComponent({
  setup() {
    let state = reactive({
      email: "",
      val: "",
    });
    // @ts-ignore
    const { proxy } = getCurrentInstance();
    const confirm = () => {
      console.log(state);
      proxy.$axios
        .post(`/myzhihu/api/user/login`, {
          email: state.email,
          password: state.val,
        })
        .then((res: any) => {
          console.log(res);
          localStorage.setItem("token", res.token);
        });
    };
    return {
      ...toRefs(state),
      confirm,
    };
  },
});
</script>
<style lang='scss' scoped>
</style>