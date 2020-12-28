<template>
  <div class="test">
    <h1>this is test page, px: {{ px }}, py: {{ py }}</h1>
    <h1>this person name is {{ person.name }}</h1>
    <div>
      {{ count }}
      <button type="button" @click="increase">+1</button>
    </div>
    <input value="" @change="e => changePersonName(e.target.value)" />

    <h1 v-if="loading">loading......</h1>
    <img :src="result && result.message" alt="" v-else class="dog-img" />
    <hr />
    <img :src="dogSrc" alt="" v-if="dogSrc" class="dog-img" />
    <button type="button" class="btn btn-success" @click="getDogImg">
      重新请求一张图片
    </button>
    <div class="row">
      <div
        v-for="item in [1, 2, 3, 4, 5, 6]"
        :key="item"
        class="col-sm-3 col-md-6"
      >
        {{ item }}
      </div>
    </div>
    <!-- <DefineComp :list="[1, 2, 3]" /> -->
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import useMousePosition from "@/hooks/useMousePosition";
import useAxios from "@/hooks/useAxios";
import DefineComp, { DefineCompProps } from "@/components/DefineComp.vue";
import "bootstrap/dist/css/bootstrap.min.css"; // 使用bootstrap的css
import { DogInterface, getDogs } from "@/api/index";


export interface PersonInterface {
  name: string;
  age: number;
}

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
    const dogSrc = ref("");
    const person = ref<PersonInterface>({
      name: "river",
      age: 18
    });
    const changePersonName = (name: string) => {
      person.value.name = name;
    };
    const increase = () => {
      count.value++;
    };
    const { px, py } = useMousePosition();
    const { result, loading, error } = useAxios<DogInterface>(
      "https://dog.ceo/api/breeds/image/random"
    );
    if (result.value) {
      console.log(result.value.message);
    }
    /**
     * 通过axios来获取数据
     */
    const getDogImg = () => {
      getDogs().then(res => {
        dogSrc.value = res.data.message;
      });
    };
    return {
      px,
      py,
      count,
      increase,
      person,
      changePersonName,
      result,
      loading,
      error,
      dogSrc,
      getDogImg
    };
  }
};
</script>

<style lang="scss" scoped>
.dog-img {
  height: 300px;
  width: 300px;
  object-fit: contain;
  background: red;
}
</style>
