<template>
  <div>
    {{result}}
  </div>
</template>
<script>
export default {
  name: 'counter',
  props:{
    result: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      
    }
  },
}
</script>