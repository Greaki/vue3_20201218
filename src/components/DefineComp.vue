<template>
  <div>
    <h1 ref="title">this is defineComponent</h1>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.name }} {{ item.gender }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, onMounted } from "vue";

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
  setup(props, context) {
    const title = ref<HTMLElement | null>(null);
    onMounted(() => {
      console.log("refs", title.value);
    });
    context.emit("change", "this is from defineComp context");
    return {
      title
    };
  },
  mounted() {
    this.changeValue<number>(1);
  },
  methods: {
    changeValue<T>(value: T) {
      console.log("执行了", value);
    }
  }
});
</script>

<style lang="scss" scoped></style>
