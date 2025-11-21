import { Checkbox, Form, InputNumber, Menu, Modal, Select, Switch, Typography } from "antd"
import fields from "./fields"
import { useState } from "react"

const FormItem = ({ form }) => {
    const [checked, setChecked] = useState(true)
    const [open, setOpen] = useState(false);
    const { Text } = Typography

    const handleSelect = (item) => {
        setOpen(false)
        form.setFieldValue('categoria', item.name)
        form.setFieldValue('minima', item.min)
        form.setFieldValue('maxima', item.max)
        form.setFieldValue('quantidade', item.qtd)
        form.setFieldValue('agruparPor', item.agrupado)
        document.getElementById('scrollableDiv').scrollIntoView({
            behavior: "smooth",
        });
        form.submit()
    }
    return fields.map(field => {
        switch (field.type) {
            case "select":
                return (
                    <>
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
                                open={false}
                                style={{ width: '100%', textAlign: "left" }}
                                onClick={(e) => setOpen(true)}
                            />
                        </Form.Item>
                        <Modal
                            open={open}
                            footer={null}
                            onCancel={() => setOpen(false)}
                            centered
                            title={field.label}
                        >
                            <Menu>
                                {field.options.map((item) => (
                                    <>
                                        <Menu.Item
                                            onClick={() => handleSelect(item)}
                                        >
                                            <Text style={{ fontSize: 16 }}>
                                                {item.name}
                                            </Text>
                                        </Menu.Item>
                                    </>
                                ))}
                            </Menu>
                        </Modal>
                    </>
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

