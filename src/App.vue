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
    <router-link to="/root">root</router-link> -->
    <Login v-if="route.name === 'login'"/>
    <Register v-else-if="route.name === 'register'"/>
    <div v-else>
      <GlobalHeader :user="{name:1}"/>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import GlobalHeader from "@/components/GlobalHeader.vue";
export default defineComponent({
  components: { Register, Login, GlobalHeader },
  setup() {
    const route = useRoute();
    console.log(route,"routeeeeee")
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
</style>
