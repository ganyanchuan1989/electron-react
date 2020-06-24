// ======================================================
// 配置中间件
// ======================================================
import thunk from 'redux-thunk' // redux-reducer异步请求中间件
import logger from 'redux-logger'

const middlewares = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger)
}

export default middlewares
