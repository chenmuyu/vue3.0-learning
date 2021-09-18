<template>
  <li class="dropdown-option" :class="{'is-disabled': disabled}">
    <slot></slot>
  </li>
</template>

<script lang='ts'>
import "bootstrap/dist/css/bootstrap.min.css";
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
});
</script>
<style scoped>
.dropdown-option.is-disabled * {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>