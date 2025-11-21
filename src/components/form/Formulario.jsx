import { Button, Form, Grid } from "antd"
import FormItem from "./FormItem"

const { useBreakpoint } = Grid;

const Formulario = ({ finish }) => {
    const screens = useBreakpoint();
    return (
        <Form
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
            <FormItem />
            <Button style={{ width: '100%' }} type="primary" htmlType="submit">Gerar</Button>
        </Form>
    )
}

export default Formulario