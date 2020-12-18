import { ref, onMounted, onUnmounted } from "vue";

function useMousePosition() {
  const px = ref(0);
  const py = ref(0);
  const handleClick = (e: MouseEvent) => {
    px.value = e.pageX
    py.value = e.pageY
  }
  onMounted(() => {
    document.addEventListener("click", handleClick)
  })
  onUnmounted(() => {
    document.removeEventListener("click", handleClick)
  })
  return {
    px,
    py
  }
}

export default useMousePosition
