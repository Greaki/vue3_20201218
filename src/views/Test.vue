<template>
  <div class="test">
    <h1>this is test page, px: {{ px }}, py: {{ py }}</h1>
    <div>
      {{ count }}
      <button type="button" @click="increase">+1</button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import useMousePosition from "@/hooks/useMousePosition";

export default {
  name: "Test",
  components: {},
  setup() {
    // console.log("执行setup函数");
    const count = ref<number>(1);
    const increase = () => {
      count.value++;
    };
    const { px, py } = useMousePosition();
    return {
      px,
      py,
      count,
      increase
    };
  }
};
</script>

<style lang="scss" scoped></style>
