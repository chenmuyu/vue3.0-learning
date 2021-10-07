<!--
 * @Description: 
-->
<!--
 * @Description: 
-->
<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>-->
  <!-- 部分路由全局，部分路由带公共组件 -->
  <div>
    <!-- <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link to="/login">login</router-link>|
    <router-link to="/register">register</router-link>
    <router-link to="/root">root</router-link>-->
    <Login v-if="route.name === 'login'"/>
    <Register v-else-if="route.name === 'register'"/>
    <div v-else>
      <GlobalHeader :user="{name:1}"/>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import GlobalHeader from "@/components/GlobalHeader.vue";
import "bootstrap/dist/css/bootstrap.min.css";
export default defineComponent({
  components: { Register, Login, GlobalHeader },
  setup() {
    const route = useRoute();
    console.log(route, "routeeeeee");
    return { route };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.yellow {
  color: yellow !important ;
}
.red {
  color: red !important;
}
.card-body img[data-v-f3dad582] {
  width: 50px;
  height: 50px;
}
.description[data-v-f3dad582] {
  line-height: 20px;
  height: 60px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: break-all;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
}
.validate-input-container .error-message {
  bottom: -5px;
}
.w-330 {
  max-width: 330px;
}
.post-list h4 a[data-v-714b2626] {
  text-decoration: none;
  color: #1a1a1a;
}
.post-list h4 a[data-v-714b2626]:hover {
  color: #0d6efd;
}
.w-690 {
  width: 690px;
  margin: 0 auto;
}
.create-post-page .file-upload-container {
  height: 200px;
  cursor: pointer;
  overflow: hidden;
}
.create-post-page .file-upload-container img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
.uploaded-area {
  position: relative;
}
.uploaded-area:hover h3 {
  display: block;
}
.uploaded-area h3 {
  display: none;
  position: absolute;
  color: #999;
  text-align: center;
  width: 100%;
  top: 50%;
}
.user-profile-component img {
  width: 50px;
  height: 50px;
}
.circle {
  width: 200px;
  height: 200px;
  border-radius: 200px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #efefef;
}
.dropdown-option.is-disabled * {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
.loading-container {
  background: hsla(0, 0%, 100%, 0.5);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
}
</style>
