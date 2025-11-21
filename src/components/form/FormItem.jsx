import { Checkbox, Form, InputNumber, Select, Switch } from "antd"
import fields from "./fields"
import { useState } from "react"

const FormItem = ({ form }) => {
    const [checked, setChecked] = useState(true)
    const { Option } = Select;

    return fields.map(field => {
        switch (field.type) {
            case "select":
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
                        initialValue={field.initialValue}
                    >
                        <Select
                            style={{ width: '100%', textAlign: "left" }}
                            min={field.min || ''}
                            max={field.max || ''}
                            placeholder={field.placeholder || ''}
                            // defaultValue={field.initialValue}
                            onChange={(e, item) => {
                                form.setFieldValue('minima', item.props.min);
                                form.setFieldValue('maxima', item.props.max);
                                form.setFieldValue('quantidade', item.props.qtd);
                                form.setFieldValue('agruparPor', item.props.agrupado);
                                document.getElementById('scrollableDiv').scrollIntoView({
                                    behavior: "smooth",
                                });
                                form.submit()
                            }}
                        >
                            {field.options.map(item => (
                                <Option key={item.id} value={item.name} props={item}>
                                    {item.name}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                )
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
                        initialValue={field.initialValue}
                    >
                        <InputNumber
                            inputMode="numeric"
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

