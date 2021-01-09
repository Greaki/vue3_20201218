<template>
  <div class="about">
    <h1>This is an about page</h1>
    <UseJsx />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UseJsx from "@/components/UseJsx.vue";

export default defineComponent({
  components: {
    UseJsx
  }
});
</script>
