import React from 'react'
// import { message } from 'antd'

export default class NotFound extends React.Component {
  componentWillMount () {
    alert('此页面暂无内容')
    this.props.history.goBack()
  }

  render () {
    // 非实体组件需显式返回 null
    return null
  }
}
