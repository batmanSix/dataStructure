<template>
  <div>
    这是子组件
    <gson
      :height="height"
      :weight="weight"
      @addInfo="addInfo"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </div>
</template>
<script>
import gson from "../gson/gson.vue";
export default {
  components: { gson },
  data() {
    return {
      height: 1,
      weight: 20
    }
  },
  props: {
  },
  methods: {
    addInfo(){

    }
  },
  mounted() {
    console.log(this.$attrs); // 结果：age, infoObj, 因为父组件共传来name, age, infoObj三个值，由于name被 props接收了，所以只有age, infoObj属性
    console.log(this.$listeners); // upd
  },
};
</script>