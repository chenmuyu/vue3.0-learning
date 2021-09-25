<template>
  <div class="hello">{{sonRef}}{{msg}}</div>
</template>

<script lang="ts">
import { defineComponent,ref } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup(props) {
    const handleFunc = () => {
      console.log(props.msg,"s");
    };
    let sonRef =  ref('11HelloWorld')
    handleFunc();
    return { handleFunc ,sonRef};
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
