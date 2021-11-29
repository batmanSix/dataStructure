export default {
  // vuex api 使用
  state: {
    number: 1,
  },
  // 相当于vue 中的计算属性对state进行数据加工
  getters: {
    bigSum(state){
      console.log(state,"here")
      return state.number+= 10
    }
  },
  actions: {
    add(payload, value) {
      console.log("action add被调用了")
      payload.commit("ADD", value);
    },
    mins(payload, value) {
      console.log("action mins被调用了")  
      payload.commit("MINS", value);
    },
  },
  // mutations 修改 state
  mutations: {
    ADD(state, value) {
      state.number += value;
      console.log(value,"jere")
    },
    MINS(state, value) {
      state.number -= value;
    },
  },
};


// commit -> mutations
// dispatch -> actions

// mapActions

// mapMutations