<template>
  <div class="box">
    当前求和 vuex版本
    <div>{{ $store.state.demo1.number }}</div>
    <div class="flex">
      <button @click="add">+</button>
      <button @click="mins">-</button>
      <button @click="addBig">加10</button>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  components: {  },
  data() {
    return {
      result: 1,
    };
  },
  computed: {
    ...mapState(['demo1'])
  },
  mounted() {
  },
  methods: {
    add() {
      this.$store.dispatch("add",this.result);
    },
    mins() {
      this.$store.dispatch("mins",this.result);
    },
    addBig(){
      this.$store.getters.bigSum
    }
  },
};
</script>
<style>
.box {
  width: 200px;
  height: 100px;
  margin: 0 auto;
  text-align: center;
}
.flex {
  display: flex;
}
</style>