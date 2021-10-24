<template>
  <div>
    <counter :result="result"></counter>
    <div>
      <cbutton innerText="+" actions="PLUS" @dispatch="dispatch"></cbutton>
      <cbutton innerText="-" actions="MINUS" @dispatch="dispatch"></cbutton>
    </div>
  </div>
</template>
<script>
import counter from "./counter.vue"
import cbutton from "./cbutton.vue"
import dispatch from "../dispatchers/counter"
export default {
  components:{
    counter,
    cbutton
  },
  data() {
    return {
      result : 0
    }
  },
  methods: {
    compute(action){
      switch(action){
        case 'plus':
          this.result+=1;
          break;
        case 'minus':
          this.result-=1;
          break;
        default:
          break
      }
      console.log(this.result)
    },
    dispatch(...args){
      dispatch(this)(...args)
    }
  },
}
</script>
<style lang="scss" scoped>

</style>