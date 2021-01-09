<template>
  <div :class="$style.home" class="main">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld
      :msg="1111"
      :personInfo="{
        id: '11',
        name: 10
      }"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>

<style module>
.home {
  background: yellow;
}
</style>

<style scoped>
.main {
  color: red;
}
</style>
