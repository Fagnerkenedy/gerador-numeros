import { Checkbox, Form, InputNumber, Switch } from "antd"
import fields from "./fields"
import { useState } from "react"

const FormItem = () => {
    const [checked, setChecked] = useState(true)
    return fields.map(field => {
        switch (field.type) {
            case "number":
                return (
                    <Form.Item
                        label={<span>{field.label}</span>}
                        name={field.name}
                        rules={[
                            {
                                required: field.required,
                                message: 'Este campo é obrigatório',
                            },
                        ]}
                    >
                        <InputNumber
                            style={{ width: '100%' }}
                            min={field.min || ''}
                            max={field.max || ''}
                            placeholder={field.placeholder || ''}
                        />
                    </Form.Item>
                )

            case "check":
                return (
                    <Form.Item
                        label={<span>{field.label}</span>}
                        name={field.name}
                        valuePropName="checked"
                        initialValue={checked}
                    >
                        <Checkbox 
                            onChange={(e) => {
                                setChecked(e.target.checked)
                            }}
                        />
                    </Form.Item>
                )
            case "switch":
                return (
                    <Form.Item
                        label={<span>{field.label}</span>}
                        name={field.name}
                        initialValue={field.initialValue}
                    >
                        <Switch />
                    </Form.Item>
                )
            default:
                return false
        }
    })
}

export default FormItem

