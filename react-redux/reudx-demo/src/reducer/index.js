const initialState = {
  value: '默认值'
}

// 创建reducer

const reducer = (state = initialState, { type, payload }) => {
  console.log(state,payload)
  switch (type) {
    case 'send_type':
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default reducer
