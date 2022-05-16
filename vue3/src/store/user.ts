import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      name: '张三'
    }
  },
  // 修改state
  actions: {
    updateName(name: string) {
      this.name = name
    }
  },
  // getters
  getters: {
    fullName: (state) => {
      return state.name + '丰'
    }
  }
})

