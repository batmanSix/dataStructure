<template>
  <div>这是孙子组件 {{ $attrs }} --- {{ $listeners }}</div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: ["weight"],
  created() {
    console.log(this.$attrs); // age, infoObj, height
    console.log(this.$listeners); // updateInfo: f, delInfo: f, addInfo: f
    this.$emit("updateInfo"); // 可以触发 father 组件中的updateInfo函数
  },
};
</script>