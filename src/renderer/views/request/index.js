import React from 'react'
import { Link } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons'
import { Form, Input, Button, message } from 'antd'
import axios from 'axios'

import styles from './index.less'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

export default function RequestDemo () {
  const onFinish = (values) => {
    console.log('Success:', values)
    const { username, password } = values
    // axios.post()
    axios
      .post('/api/login.ajax', {
        username,
        password,
      })
      .then(function (response) {
        console.log(response)
        message.info('登录成功')
      })
      .catch(function (error) {
        console.log(error)
        message.error(`登录成功${error}`)
      })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className={styles.Container}>
      <div className={styles.TitleContainer}>
        <Link to="/">
          <HomeOutlined className={styles.HomeIcon} />
        </Link>
        <h1>请求示例</h1>
      </div>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            发送请求
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
