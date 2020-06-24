/* 入口启动文件 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'
import store from '@/redux/store'
import BasicLayout from './layouts/BasicLayout'

import '@/assets/less/index.less'

// ================================
// 将根组件挂载到 DOM，启动！
// ================================
function loadIndex () {
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
}

// let userAuthToken = localStorage.getItem('userAuthToken');
// if (userAuthToken) {
//   console.log('检查存在用户令牌，联机进行令牌校验，查询用户信息');
//   xhr({
//     url: '/api/v2/checkUserToken',
//     body: { userAuthToken },
//   }).then(
//     ({ userData, roleList }) => {
//       if (userData && roleList) {
//         console.log(`已登录用户：${userData.userName}(${userData.loginName})`);
//         saveUserData({
//           userData,
//           roleList,
//         });
//       } else {
//         console.log('用户信息不存在');
//       }
//       loadIndex();
//     },
//     (err) => {
//       console.log(err);
//       loadIndex();
//     }
//   );
// } else {
//   loadIndex();
// }

loadIndex()
