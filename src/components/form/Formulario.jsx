import { Affix, Button, Form, Grid } from "antd"
import FormItem from "./FormItem"

const { useBreakpoint } = Grid;

const Formulario = ({ finish }) => {
    const screens = useBreakpoint();
    const [form] = Form.useForm()
    return (
        <Form
            form={form}
            labelCol={
                screens.xs
                    ? undefined
                    : { flex: '150px' }
            }
            labelAlign="right"
            labelWrap
            wrapperCol={
                screens.xs
                    ? undefined
                    : { flex: 1 }
            }
            colon={false}
            layout={screens.xs ? 'vertical' : 'horizontal'}
            onFinish={finish}
        >
            <FormItem form={form} />
            <Affix offsetTop={10}>
                <Button
                    style={{ width: '100%' }}
                    type="primary"
                    htmlType="submit"
                    onClick={() => document.getElementById('scrollableDiv').scrollIntoView({ behavior: "smooth" })}
                >
                    Gerar
                </Button>
            </Affix>
        </Form>
    )
}

export default Formulario