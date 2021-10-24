<template>
    <div>
      <button :actions="actions" @click="compute">
        {{innerText}}
      </button>
    </div>
</template>
<script>
export default {
  name: "cbutton",
  props:{
    actions:{
      type: String,
    },
    innerText:{
      type: String
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    compute(){
      this.$emit('dispatch',this.actions)
    }
  },
}
</script>
<style lang="scss" scoped>

</style>