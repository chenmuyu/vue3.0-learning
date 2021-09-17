import { onBeforeUnmount, onMounted, ref } from "vue";
export default function() {
  const x = ref("0");
  const y = ref("0");
  const pageHandle = function(e:any) {
    x.value = e.pageX;
    y.value = e.pageY;
  };
  // 需要使用生命周期函数，页面加载完成
  onMounted(() => {
    window.addEventListener("click", pageHandle);
  });

  // 在页面即将卸载时，移除事件的监听
  onBeforeUnmount(() => {
    window.removeEventListener("click", pageHandle);
  });
  return { x, y };
}
