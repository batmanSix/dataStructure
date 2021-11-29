<template>
  <div class="box">
    当前求和
    <div>{{resault}}</div>
    <div class="flex">
      <button @click="add">+</button>
      <button @click="mins">-</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      resault: 0
    };
  },
  mounted() {
    console.log(this,"here")
  },
  methods: {
    add(){
      this.resault ++
    },
    mins(){
      this.resault--
    }
  },
};
</script>
<style>
.box{
  width: 200px;
  height: 100px;
  margin: 0 auto;
  text-align: center;
}
.flex {
  display: flex;
}
</style>