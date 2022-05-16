<template>
  <div>{{ count }}</div>
  <button @click="add">加</button>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/store/user";
import { countStore } from "@/store/count";

// storeToRefs 定义响应式数据
const counter = countStore();
let { count } = storeToRefs(counter);

const add = () => {
  counter.count += 1;
};
console.log(count, "user");
</script>
