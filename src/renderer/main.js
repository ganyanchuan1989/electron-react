/* 入口启动文件 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'
import logger from './logger'
import store from '@/redux/store'
import BasicLayout from './layouts/BasicLayout'

import '@/assets/less/index.less'

// ================================
// 将根组件挂载到 DOM，启动！
// ================================
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={BasicLayout} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
)

logger.debug('start renderer')
