import { defineStore } from 'pinia'

export const countStore = defineStore({
  id: 'count', // id必填，且需要唯一
  state: () => {
    return {
      count: 1
    }
  },
  // 修改state
  actions: {
    updateCount(count: number) {
      this.count ++
    }
  },
})