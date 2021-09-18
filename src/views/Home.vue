<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="fooRef"/>
    <ColumnList :list="testData"></ColumnList>
    <GlobalHeader :user="user"></GlobalHeader>
    <Dropdown :title="'你好呀'">
      <DropdownItem closeAfterClick>
        <a href="#" class="dropdown-item">新建文章</a>
      </DropdownItem>
      <DropdownItem>
        <a href="#" class="dropdown-item">新建文章</a>
      </DropdownItem>
      <DropdownItem>
        <a href="#" class="dropdown-item">新建文章</a>
      </DropdownItem>
      <DropdownItem>
        <a href="#" class="dropdown-item">新建文章</a>
      </DropdownItem>
    </Dropdown>
    <showToast></showToast>
    <!-- <commonForm @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validateInput
          :rules="emailRule"
          v-model="formData.email"
          placeholder="请输入邮箱地址"
          type="text"
        ></validateInput>
      </div>
    </commonForm> -->
    <div @click="clickMe">clikc me</div>
  </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import { defineComponent, reactive, ref, toRef } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import ColumnList from "@/components/ColumnList.vue"; // @ is an alias to /src
import DropdownItem from "@/components/DropdownItem.vue"; // @ is an alias to /srcDropdownItem
import Dropdown from "@/components/Dropdown.vue"; // @ is an alias to /src
// import commonForm from "@/components/common/commonForm.vue"; // @ is an alias to /src
// import validateInput from "@/components/common/validateInput.vue"; // @ is an alias to /src
import GlobalHeader from "@/components/GlobalHeader.vue"; // @ is an alias to /src
import showToast from "@/components/pratice/showToast.vue"; // @ is an alias to /src
export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
interface RuleProp {
  type: "required" | "email";
  message: string;
}

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
    showToast,
    ColumnList,
    GlobalHeader,
    Dropdown,
    DropdownItem,
    // commonForm,
    // validateInput,
  },
  setup(props, ctx) {
    const count = ref(0);
    const emailRules: Array<RuleProp> = [
      { type: "required", message: "电子邮箱地址不能为空" },
      { type: "email", message: "请输入正确的电子邮箱格式" },
    ];

    const emailRule: Array<RuleProp> = reactive(emailRules);
    const formData = reactive({
      email:""
    });
    
    const state = reactive({
      foo: "2",
      bar: "2",
    });
    const fooRef = toRef(state, "foo");
    const clickMe = () => {
      state.foo = "12"; // = { foo: "22222" };
      console.log("ss");
    };
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
    let user = {
      isLogin: true,
      name: "string",
      id: 1,
    };
    return {
      user,
      fooRef,
      clickMe,
      testData,
      formData,
      emailRule,
    };
  },
});
</script>
