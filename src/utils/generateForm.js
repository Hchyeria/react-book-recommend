import React, { useState, useCallback, memo } from 'react'
import { Form, Input, InputNumber, Col, Button, Row } from 'antd'

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


const ButtonItem = (props) => {
	const [buttonLoading, setButtonLoading] = useState(false)

  const { onClick } = props
	const handleClick = useCallback(() => {
		setButtonLoading(true)
		onClick(setButtonLoading)
	}, [onClick])

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
		}
		case 'Number': {
			return <InputNumber {...element} />
		}
		case 'Select': {
			return props.reactChild
		}
		case 'Button': {
			return <ButtonItem {...props} />
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

    const { cb } = props

		const onFinish = useCallback((values) => {
			setSubmitLoading(true)

      config.onFinish && config.onFinish(values, setSubmitLoading, cb)
		}, [cb])

		const formItemLayout = config.formItemLayout || defaultFormItemLayout
		const formName = config.name || 'default form'
    const submitText = config.submitText || 'Register'
    
    const { setting = {} } = config

		return (
			<>
				<Form
          {...setting}
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
