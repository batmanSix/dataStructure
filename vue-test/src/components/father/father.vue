<template>
  <div>
    这是父组件
    <child
      :name="name"
      :age="age"
      :infoObj="infoObj"
      @updateInfo="updateInfo"
      @delInfo="delInfo"
    />
  </div>
</template>
<script>
import child from "../child/child.vue";
export default {
  components: { child },
  data() {
    return {
      name: 1,
      age: 2,
      infoObj:{
        sex: 1  
      }
    };
  },
  methods: {
    updateInfo() {
      console.log("update info");
    },
    delInfo() {
      console.log("delete info");
    },
  },
};
</script>