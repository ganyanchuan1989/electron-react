/* 入口启动文件 */
import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import {
  HashRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'

function ParamIdDemo (props) {
  console.log(props.match.params) // params: {id: "123"}
  return <div>Page1</div>
}

function Page2 (props) {
  console.log(props.location.param) // param: {id: 123}
  return <div>Page2</div>
}
function Page3 (props) {
  console.log(props) // param: {id: 123}
  return <div>page3</div>
}

function BusiPage (props) {
  const { history } = props
  return (
    <button
      onClick={() => {
        history.push({ pathname: '/page3', param: { id: 123 } })
      }}
    >
      Jump Page3
    </button>
  )
}

const BusiPageRouter = withRouter(BusiPage)

// ================================
// 将根组件挂载到 DOM，启动！
// ================================
function loadIndex () {
  ReactDOM.render(
    <ConfigProvider>
      <Router>
        <div>
          <Route exact path="/page1/:id" component={ParamIdDemo} />
          <Route exact path="/page2" component={Page2} />
          <Route exact path="/page3" component={Page3} />
          <Link to="/page1/123">Link Id</Link>
          <br />
          <Link to={{ pathname: '/page2', param: { id: 123 } }}>
            Link Param
          </Link>
          <br />
          <BusiPageRouter />
        </div>
      </Router>
    </ConfigProvider>,
    document.getElementById('app')
  )
}

loadIndex()
