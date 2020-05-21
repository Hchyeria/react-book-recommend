import React from "react";

import { Form, Input, Button } from "antd";
import { PhoneOutlined, LockOutlined } from "@ant-design/icons";
import './index.styl'
import appState from '../../stores/appState'

import { post } from '../../utils/request'
import generateForm from '../../utils/generateForm'


const onFinish = (values, setLoading) => {
  const postData = async () => {
    const res = await post({
      url: 'user/login',
      data: values
    })
    setLoading(false)
    if (res.status) {
      success("Login successfully!")
      localStorage.setItem('token', res.data)
      appState.login()
      const { history } = props
      history.goBack()
    }
  }
  postData()
}

const Login = memo((props) => {
  const [loading, setLoading] =  useState(false);
  const { history } = props
  const onFinish = useCallback((values) => {
    setLoading(true)
    const postData = async () => {
      const res = await post({
        url: 'user/login',
        data: values
      })
      setLoading(false)
      if (res.status) {
        success("Login successfully!")
        localStorage.setItem('token', res.data)
        appState.login()
        const { history } = props
        history.goBack()
      }
    }
    postData()
  }, [history]);



  return (
      <Form name="normal_login" className="login-form" onFinish={onFinish}>
        <Form.Item
          name="telephone"
          rules={[{ required: true, message: "Please input your Telephone!" }]}
        >
          <Input
            prefix={<PhoneOutlined className="site-form-item-icon" />}
            placeholder="Telephone"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
  );
})

export default Login;
