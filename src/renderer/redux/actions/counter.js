// ================================
// Action Type
// ================================
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

// ================================
// Action creator
// ================================
const increase = () => (dispatch) => {
  dispatch({
    type: INCREASE,
    payload: {},
  })
}

const decrease = () => (dispatch) => {
  // 登录失败
  dispatch({
    type: DECREASE,
    payload: {},
  })
}

/* default 导出所有 Actions Creator */
export {
  increase,
  decrease,
}

// ================================
// Action handlers for Reducer
// 本来更新 state 是 Reducer 的责任
// 但要把 ActionType 导出又引入实在太麻烦
// 且在 Reducer 中写 switch-case 实在太不优雅
// 故在此直接给出处理逻辑
// ================================
export const ACTION_HANDLERS = {
  [INCREASE]: (state, { payload }) => {
    let {count} = state
    count++
    return {...state, count}
  },
  [DECREASE]: (state, { payload }) => {
    let {count} = state
    count--
    return {...state, count}
  },
}
