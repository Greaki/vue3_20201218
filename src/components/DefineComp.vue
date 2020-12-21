<template>
  <div>
    <h1>this is defineComponent</h1>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.name }} {{ item.gender }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export interface DefineCompProps {
  id: number;
  name: string;
  gender: "male" | "female";
}

export default defineComponent({
  name: "DefineComp",
  props: {
    list: {
      type: Array as PropType<DefineCompProps[]>,
      required: true
    }
  },
  data() {
    return {
      message: "this is message"
    };
  },
  setup(props) {
    // setup里面没有this
    console.log("setUp执行了, this 是啥", this);
  },
  mounted() {
    console.log("mounted执行了，this 是啥", this.list);
  }
});
</script>

<style lang="scss" scoped></style>
