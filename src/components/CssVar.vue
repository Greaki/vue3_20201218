<template>
  <div class="css-var" :style="styleVar"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface StyleVarInterface {
  [propertiies: string]: string;
}
export default defineComponent({
  name: "CssVar",
  props: {
    height: {
      type: Number,
      require: true
    }
  },
  computed: {
    styleVar: function(): StyleVarInterface {
      return {
        "--box-height": this.height + "px"
      };
    }
  }
});
</script>

<style lang="scss" scoped>
.css-var {
  background: red;
  height: var(--box-height);
}
</style>
