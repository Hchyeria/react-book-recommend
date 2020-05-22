import React from "react";
import {
  Select
} from "antd";
import './index.styl'
import register from '../../apis/auth/register'
import generateForm from '../../utils/generateForm'


const onFinish = (value, setLoading) => {
  const { confirm, ...data } = value
  register(data)
  setLoading(false)
}

const config = {
  onFinish,
  name: 'Register',
  data: [
    {
      type: 'Input',
      formItem: {
        label: '用户名',
        name: 'userName',
        rules: [
          { required: true,
            message: '请输入用户名!' 
          }
        ],
        hasFeedback: true
      }
    },
    {
      type: 'Input',
      element: {
        type: 'password'
      },
      formItem: {
        label: '密码',
        name: 'password',
        rules: [
          { required: true,
            message: "请输入密码!"
          }
        ],
        hasFeedback: true
      }
    },
    {
      type: 'Input',
      element: {
        type: 'password'
      },
      formItem: {
        label: '再次输入密码',
        dependencies: ['password'],
        name: 'confirm',
        rules: [
          {
            required: true,
            message: "请再次输入密码!"
          },
          ({ getFieldValue }) => ({
             validator(rule, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                "两个密码不一致!"
              );
            }
          })
        ],
        hasFeedback: true
      }
    },
    {
      type: 'Number',
      formItem: {
        label: '年龄',
        name: 'age',
        rules: [
          { 
            required: true,
            type: "number", 
            min: 0, 
            max: 150 
          }
        ],
        hasFeedback: true
      }
    },
    {
      type: 'Select',
      formItem: {
        label: '性别',
        name: 'gender',
        rules: [
          { 
            required: true,
          }
        ],
        hasFeedback: true
      },
      reactChild: (
          <Select>
            <Select.Option value="0">女</Select.Option>
            <Select.Option value="1">男</Select.Option>
          </Select>
      )
    },
    {
      type: 'Input',
      formItem: {
        label: '个人介绍',
        name: 'introduction'
      }
    }
  ]
}

const Register = generateForm(config)
export default Register
