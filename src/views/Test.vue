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
    <DefineComp @change="handleChange" :list="list" name="king" age="12">
      <h1>this is slot</h1>
    </DefineComp>

    <css-var :height="20"></css-var>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import useAxios from "@/hooks/useAxios";
import "bootstrap/dist/css/bootstrap.min.css"; // 使用bootstrap的css
import { DogInterface, getDogs } from "@/api/index";
import useMousePosition from "@/hooks/useMousePosition";
import DefineComp, { DefineCompProps } from "@/components/DefineComp.vue";
import CssVar from "@/components/CssVar.vue";

export interface PersonInterface {
  name: string;
  age: number;
}

export default {
  name: "Test",
  components: {
    CssVar,
    DefineComp
  },
  data() {
    return {
      testData: []
    };
  },
  // mounted() {},
  setup() {
    // console.log("执行setup函数");
    const count = ref<number>(1);
    const dogSrc = ref("");
    const person = ref<PersonInterface>({
      name: "river",
      age: 18
    });
    const list = ref<DefineCompProps[]>([
      {
        id: 1,
        name: "river",
        gender: "male"
      },
      {
        id: 2,
        name: "king",
        gender: "female"
      }
    ]);
    list.value.push({
      id: 3,
      name: "javk",
      gender: "female"
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
      getDogImg,
      list
    };
  },
  methods: {
    handleChange<T>(value: T) {
      console.log("执行了emit", value);
    }
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
