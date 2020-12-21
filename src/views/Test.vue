<template>
  <div class="test">
    <h1>this is test page, px: {{ px }}, py: {{ py }}</h1>
    <div>
      {{ count }}
      <button type="button" @click="increase">+1</button>
    </div>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-success">Success</button>
    <div class="row">
      <div v-for="item in [1, 2, 3, 4, 5, 6]" :key="item" class="col-sm-3 col-md-6">
        {{ item }}
      </div>
    </div>
    <!-- <DefineComp :list="[1, 2, 3]" /> -->
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import useMousePosition from "@/hooks/useMousePosition";
import DefineComp, { DefineCompProps } from "@/components/DefineComp.vue";
import "bootstrap/dist/css/bootstrap.min.css"; // 使用bootstrap的css

export default {
  name: "Test",
  components: {
    DefineComp
  },
  data() {
    return {
      testData: []
    };
  },
  mounted() {
    // console.log("-----", this.testData);
  },
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
