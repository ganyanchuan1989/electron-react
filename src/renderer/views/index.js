import React from 'react'
// import axios from 'axios'
// import {Button, Input} from 'antd'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'

import styles from './index.less'

export default function WelCome () {
  // function handleRequest () {
  //   axios.post('/api/login.json', {
  //     firstName: 'Fred',
  //     lastName: 'Flintstone',
  //   })
  //     .then(function (response) {
  //       console.log(response)
  //     })
  //     .catch(function (error) {
  //       console.log(error)
  //     })
  // }
  return (
    <div className={styles.Container}>
      <div className={styles.LogoContainer}>
        <img src={require('@/assets/img/electron.png')} />
        <h1> Welcome to you electron app with react </h1>
        <a href="https://github.com/ganyanchuan1989/electron-react">
          View on GitHub
        </a>
      </div>
      <div className={styles.CardContainer}>
        <h1>简介</h1>
        <p>
          基于electron-vue改造的electron-react版本，继承了electron-vue脚手架优点，如：热更新、目录结构清晰、静态资源本地路径转化等。electron-react视图层通过react重构，引入react的全家桶（react、react-router、redux），并增加C/S架构程序所关注的核心功能（日志，sqlite3，网络请求等）。
        </p>
        <Row gutter={16}>
          <Col span={24}>
            <h1>功能清单</h1>
            <ul>
              <li>winston: 本地日志</li>
              <li>sqlite3 & ORM：本地持久化存储</li>
              <li>electron-builder：构建打包</li>
              <li>electron-updater：自动更新</li>
              <li>crashReporter：崩溃报告</li>
              <li>LocalConfig：本机配置文件，适配多环境</li>
              <li>plugins: 本地插件调用</li>
              <li>mock & proxy: 本地开发支持mock与非mock请求</li>
              <li>CssModule: 解决CSS命名冲突</li>
              <li>ErrorBoundary: React 错误边界</li>
              <li>antd: UI组件库</li>
            </ul>
          </Col>
          <Col span={24}>
            <h1>示例</h1>
            <ul>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
              <li><Link to="/plugin">plugin</Link></li>
              <li><Link to="/request">request</Link></li>
            </ul>
          </Col>
        </Row>
        <h1>文档</h1>
        <a href="https://github.com/ganyanchuan1989/electron-react">README</a>
      </div>
    </div>
  )
}
