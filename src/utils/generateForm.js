import React, { useState, useCallback, memo, lazy, Suspense } from 'react'
import { Form, Input, InputNumber, Select, Col, Button, Row } from 'antd'

const defaultFormItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 8 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 16 },
	},
}
const defaultTailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
	},
}

// const config = {
//   onFinish,
//   name,
//   formItemLayout,
//   data: {
//     [
//       type: input,
//       element: {
//         style,
//         text
//       }
//       formItem: {
//         label,
//         name,
//         rules: [
//           { required: true,
//             message: 'Please input your username!'
//           }
//         ],
//         hasFeedback
//       }
//       setState: true,
//     ],
//     [
//       type: reactChild,
//     ],
//     [

//     ]
//   }
// }

const ButtonItem = (props) => {
	const [buttonLoading, setButtonLoading] = useState(false)

	const handleClick = useCallback(() => {
		setButtonLoading(true)
		props.onClick(setButtonLoading)
	})

	const { element = {} } = props

	return (
		<Button
			loading={buttonLoading}
			onClick={props.onClick && handleClick}
			{...element}
		>
			{props.text}
		</Button>
	)
}

const ItemForm = (props) => {
  const { element = {} } = props
	switch (props.type) {
		case 'Input': {
			return <Input {...element} />
			break
		}
		case 'Number': {
			return <InputNumber {...element} />
			break
		}
		case 'Select': {
			return props.reactChild
			break
		}
		case 'Button': {
			return <ButtonItem {...props} />
			break
		}
		default: {
			return props.reactChild
		}
  }
}

const ElementForm = (props) => {
	const { formItem = {} } = props
	return (
		<Form.Item {...formItem}>
			{ ItemForm(props) }
		</Form.Item>
	)
}

const generateForm = (config) => {
	const GenerateForm = memo((props) => {
		const [form] = Form.useForm()
		const [submitLoading, setSubmitLoading] = useState(false)

		const onFinish = useCallback((values) => {
			setSubmitLoading(true)

      config.onFinish && config.onFinish(values, setSubmitLoading)
      props.cb && props.cb()
		}, [])

		const formItemLayout = config.formItemLayout || defaultFormItemLayout
		const formName = config.name || 'default form'
		const submitText = config.submitText || 'Register'

		return (
			<>
				<Form
					{...formItemLayout}
					form={form}
					name={formName}
					onFinish={onFinish}
					scrollToFirstError
				>
					{config.data &&
						config.data.length > 0 &&
						config.data.map((ele, index) => <ElementForm key={index} {...ele} />)}
					<Form.Item {...defaultTailFormItemLayout}>
						<Button type="primary" htmlType="submit" loading={submitLoading}>
							{submitText}
						</Button>
					</Form.Item>
				</Form>
			</>
		)
	})

	return GenerateForm
}

export default generateForm
