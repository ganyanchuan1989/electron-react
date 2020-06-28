import React from 'react'
import { Link } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons'
import { Form, Input, Button } from 'antd'
import {ipcRenderer} from 'electron'

import styles from './index.less'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

export default function PluginDemo () {
  const onFinish = values => {
    console.log('Success:', values)
    const {pdfpath} = values
    console.log(pdfpath)
    ipcRenderer.send('plugins', {type: 'print', funcParams: {pdfpath, param: '-prompt'}})
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className={styles.Container}>
      <div className={styles.TitleContainer}>
        <Link to="/">
          <HomeOutlined className={styles.HomeIcon} />
        </Link>
        <h1>插件示例</h1>
      </div>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <Form.Item
          label="PDF路径"
          name="pdfpath"
          initialValue="./plugins/pdfp/1.pdf"
          rules={[{ required: true, message: 'Please input your pdfpath!' }]}>
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            打印
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
